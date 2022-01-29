import React, { useState, useEffect } from "react"

const SingleUserInList = ({ nickname, mail, privilege, groupId, userId, setUserList, userList }) => {
  const deleteUser = async (groupId, userId) => {
    try {
      const response = await fetch("http://localhost:5000/group/deleteUser", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", token: localStorage.token, groupId: groupId, userId: userId },
      })

      const parseResponse = await response.json()
      setUserList(...userList)
    } catch (error) {}
  }
  return (
    <div className='drop-shadow-lg bg-white	px-8 w-80 rounded-lg flex items-center justify-between mb-2'>
      <div className=''>
        <div className=''>
          <span className='text-blue-500/80 font-medium uppercase'>{privilege}</span> {nickname}
        </div>
        <span className='text-gray-500/80'>{mail}</span>
      </div>
      {privilege != "admin" && (
        <div
          className='w-4 cursor-pointer'
          onClick={(e) => {
            deleteUser(groupId, userId)
          }}
        >
          <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='trash' className='svg-inline--fa fa-trash fa-w-14 text-red-600	' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path fill='currentColor' d='M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z'></path>
          </svg>
        </div>
      )}
    </div>
  )
}

export default SingleUserInList
