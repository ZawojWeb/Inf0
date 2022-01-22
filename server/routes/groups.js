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
module.exports = router
