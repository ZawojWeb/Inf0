import React, { useState, useEffect } from "react"
import SingleMyTask from "./SingleMyTask"

const MyTasks = ({ currentUser, privilage }) => {
  const [userTasksList, setUserTasksList] = useState([])

  async function getTasks() {
    try {
      console.log(currentUser)
      const response = await fetch("http://localhost:5000/group/getUserTask", {
        method: "GET",
        headers: { "Content-Type": "application/json", token: localStorage.token, userId: currentUser },
      })

      const parseResponse = await response.json()
      setUserTasksList(parseResponse)
    } catch (error) {}
  }
  useEffect(() => {
    getTasks()
  }, [currentUser])

  return (
    <div>
      {console.log(userTasksList)}
      {userTasksList.length > 0 &&
        userTasksList.map((task) => {
          return <SingleMyTask taskId={task.task_id} taskContent={task.content} progress={task.complete} key={task.task_id} />
        })}
    </div>
  )
}

export default MyTasks
