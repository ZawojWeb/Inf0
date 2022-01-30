import React, { useState, useEffect } from "react"
import AdminView from "./AdminView"
import EditorView from "./EditorView"
import UserView from "./UserView"

const GroupView = ({ id, userId }) => {
  // TODO: fetch for privileges and set view (Admin,Editor,User)
  const [privilage, setPrivilage] = useState("")
  const [view, setView] = useState()

  async function getUserPrivilage(id) {
    try {
      const response = await fetch("http://localhost:5000/group/privilege", {
        method: "GET",
        headers: { token: localStorage.token, groupId: id },
      })

      const parseRes = await response.json()
      setPrivilage(parseRes[0].privilege)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getUserPrivilage(id)
  }, [])

  return <div>{privilage.length > 0 && privilage == "admin" ? <AdminView groupId={id} userId={userId} privilage={privilage} /> : privilage == "editor" ? <EditorView groupId={id} userId={userId} privilage={privilage} /> : <UserView groupId={id} userId={userId} privilage={privilage} />}</div>
}

export default GroupView
