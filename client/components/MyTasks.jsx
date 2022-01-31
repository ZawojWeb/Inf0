import React, { useState, useEffect } from "react"
import SingleMyTask from "./SingleMyTask"

const MyTasks = ({ currentUser, privilage, groupId, userId }) => {
  const [userTasksList, setUserTasksList] = useState([])

  async function getMyTasks() {
    try {
      const response = await fetch("http://localhost:5000/group/getUserTask", {
        method: "GET",
        headers: { "Content-Type": "application/json", token: localStorage.token, userId: currentUser, groupId: groupId },
      })

      const parseResponse = await response.json()
      setUserTasksList(parseResponse)
    } catch (error) {}
  }
  useEffect(() => {
    getMyTasks()
  }, [currentUser])

  return (
    <div>
      {userTasksList.length > 0 &&
        userTasksList.map((task) => {
          return <SingleMyTask taskId={task.task_id} groupId={groupId} taskContent={task.content} progress={task.complete} userId={userId} key={task.task_id} />
        })}
    </div>
  )
}

export default MyTasks
