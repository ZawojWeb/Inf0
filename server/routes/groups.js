const router = require("express").Router()
const pool = require("../db")
const authorization = require("../middleware/authorization")

router.post("/create", authorization, async (req, res) => {
  try {
    const { user_id, groupName } = req.body
    console.log(user_id, groupName)
    //req.user has the payload
    const user = await pool.query("CALL createGroup($1,$2);", [user_id, groupName])
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
    } else {
      res.status(404).json(0)
      console.log("User not found")
    }
    //req.user has the payload
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

router.get("/getUsers", authorization, async (req, res) => {
  try {
    const groupId = req.header("groupid")
    const users = await pool.query("SELECT * FROM user_group WHERE group_id = $1", [groupId])
    res.json(users.rows)
  } catch (err) {
    res.status(500).json("Server Error")
  }
})
module.exports = router
