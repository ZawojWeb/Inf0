const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
// middleware
app.use(cors())
app.use(express.json()) //req.body

// register and login routes
app.use("/auth", require("./routes/jwtAuth.js"))

app.use("/userinfo", require("./routes/userinfo"))

app.use("/group", require("./routes/groups"))

app.listen(5000, () => {
  console.log(`Server listening on port 5000`)
})

//! TODO:
// [] Add creating groups funcion, have to have: Normal query fo create groups, trigger for connect user with group and set privilage
// [] Add creating APIs funcion, have to have: Normal query to add api, trigger for connect api with group
// [] Add creating Tasks funcion, have to have: Normal query to add taks, trigger for connect tasks with group and user, trigger for new task
// [] Message Just fithn how to implemet this stuff
// [] Prepare routes like dashboard, for authorization which will say what view i have to load
