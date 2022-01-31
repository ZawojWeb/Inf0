const router = require("express").Router()
const pool = require("../db")
const authorization = require("../middleware/authorization")

router.post("/create", authorization, async (req, res) => {
  try {
    const { user_id, groupName } = req.body
    const user = await pool.query("CALL createGroup($1,$2);", [user_id, groupName])
    res.json(user.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.get("/privilege", authorization, async (req, res) => {
  try {
    const groupId = req.header("groupid")
    const user = await pool.query("SELECT privilege FROM user_group WHERE user_id = $1 AND group_id = $2", [req.user, groupId])
    res.json(user.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.post("/addUser", authorization, async (req, res) => {
  try {
    const { userEmail, privilege, groupId } = req.body

    const userExists = await pool.query("SELECT count(*) FROM users WHERE mail = $1", [userEmail])
    if (userExists.rows[0].count >= 1) {
      const user = await pool.query("CALL addUser($3,$1, $2);", [userEmail, privilege, groupId])
      res.status(200).json(1)
      pool.query("CALL createMessage($1, $2);", [groupId, `Dodano nowego użytkownika ${userEmail}`])
    } else {
      res.status(404).json(0)
    }
    //req.user has the payload
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.get("/getUsers", authorization, async (req, res) => {
  try {
    const groupId = req.header("groupid")
    const users = await pool.query("SELECT ug.user_id,ug.privilege, u.nickname, u.mail FROM user_group as ug JOIN Users as u ON u.user_id = ug.user_id WHERE ug.group_id = $1;", [groupId])
    res.json(users.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})
router.delete("/deleteUser", authorization, async (req, res) => {
  try {
    const groupId = req.header("groupid")
    const userId = req.header("userId")
    const users = await pool.query("CALL deleteUserGroup($1,$2);", [userId, groupId])
    res.json(users.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.get("/getUpis", authorization, async (req, res) => {
  try {
    const groupId = req.header("groupId")

    const apiId = await pool.query("SELECT ag.apis_id, a.discordapikey,a.notionapikey,a.facebookapikey,a.slackapikey FROM apis_groups as ag JOIN apiskey as a ON ag.apis_id = a.apis_id  WHERE group_id = $1 ", [groupId])
    res.json(apiId.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.post("/updateApis", authorization, async (req, res) => {
  try {
    const { a_id, Notion, Discord, Facebook, Slack, groupId } = req.body
    const newApis = await pool.query("CALL updateGroupApi($1,$2,$3,$4,$5);", [a_id, Notion, Discord, Facebook, Slack])
    res.json(newApis.rows)
    pool.query("CALL createMessage($1, $2);", [groupId, `Zaktualizowano API`])
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.post("/addTask", authorization, async (req, res) => {
  try {
    const { taskContent, userId, groupId } = req.body
    const userNickname = await pool.query("SELECT nickname FROM users WHERE user_id = $1;", [userId])
    const task = await pool.query("CALL addTask($1,$3, $2);", [taskContent, userId, groupId])
    res.json(task.rows)
    pool.query("CALL createMessage($1, $2);", [groupId, `Dodano nowe zadanie: ${taskContent} użytkownkowi: ${userNickname.rows[0].nickname}`])
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.get("/getTasks", authorization, async (req, res) => {
  try {
    const groupId = req.header("groupId")
    const tasks = await pool.query("SELECT t.content, t.complete,tgu.user_id,t.task_id FROM tasks_group_user AS tgu JOIN tasks as t ON t.task_id = tgu.task_id WHERE group_id = $1;", [groupId])
    res.json(tasks.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.get("/getUserTask", authorization, async (req, res) => {
  try {
    const userId = req.header("userId")
    const groupId = req.header("groupId")
    const tasks = await pool.query("SELECT t.content, t.complete,tgu.user_id,t.task_id FROM tasks_group_user AS tgu JOIN tasks as t ON t.task_id = tgu.task_id WHERE tgu.user_id = $1 AND tgu.group_id = $2;", [userId, groupId])
    res.json(tasks.rows)
  } catch (err) {
    res.status(500).json([])
  }
})

router.post("/updateProgres", authorization, async (req, res) => {
  try {
    const taskId = req.header("taskId")
    const progresState = req.header("progresState")
    const taskName = req.header("taskName")
    const userId = req.header("userId")
    const groupId = req.header("groupId")

    const userNickname = await pool.query("SELECT nickname FROM users WHERE user_id = $1", [userId])
    const task = await pool.query("UPDATE tasks SET complete = $1 WHERE task_id = $2", [progresState, taskId])
    let progresName = progresState == 0 ? "nie zaczęte" : progresState == 1 ? "w trakcie realizacji" : progresState == 2 ? "zakończone" : ""
    pool.query("CALL createMessage($1, $2);", [groupId, `Użytkownik ${userNickname.rows[0].nickname} zaktualizował zadanie ${taskName} i ma teraz status ${progresName}`])

    res.json(task.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.delete("/deleteTask", authorization, async (req, res) => {
  try {
    const taskId = req.header("taskId")
    const taskName = req.header("taskName")
    const users = await pool.query("CALL deleteTask($1);", [taskId])
    res.json(users.rows)
    pool.query("CALL createMessage($1, $2);", [groupId, `Zadanie ${taskName} zostało zakończone`])
  } catch (err) {
    res.status(500).json("Server Error")
  }
})

router.get("/getMessages", authorization, async (req, res) => {
  try {
    const groupId = req.header("groupId")
    const message = await pool.query("SELECT m.content,m.sendtime,m.senddate,m.message_id FROM messages AS m JOIN messages_group as mg ON m.message_id = mg.message_id WHERE mg.group_id = $1;", [groupId])
    res.json(message.rows)
  } catch (err) {
    res.status(500).json([])
  }
})

module.exports = router
