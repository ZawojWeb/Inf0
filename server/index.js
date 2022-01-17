const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
// middleware
app.use(cors())
app.use(express.json()) //req.body

// ROUTES
// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
    res.json(newTodo.rows[0])
  } catch (error) {
    console.log(error)
  }
})

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo")
    res.json(allTodos.rows)
  } catch (error) {
    console.log(error)
  }
})

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const getAToDo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    res.json(getAToDo.rows[0])
  } catch (error) {
    console.log(error)
  }
})

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const updateTodo = await pool.query("UPDATE todo SET description = $2 WHERE todo_id = $1", [id, description])
    res.json("Todo was successfully updated")
  } catch (error) {
    console.log(error)
  }
})

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
    res.json("Todo was successfully deleted")
  } catch (error) {
    console.log(error)
  }
})

app.listen(5000, () => {
  console.log(`Server listening on port 5000`)
})
