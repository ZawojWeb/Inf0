import React, { useState, useEffect } from "react"

const GroupView = ({ id, userId }) => {
  // TODO: fetch for privileges and set view (Admin,Editor,User)
  return (
    <div>
      <h1>Group ID: {id}</h1>
      <h1>User ID: {userId}</h1>
    </div>
  )
}

export default GroupView
