import React, { useState, useEffect } from "react"
import SingleMessage from "./SingleMessage"

const ChatComponent = ({ groupId }) => {
  const [groupMessages, setGroupMessages] = useState([])

  async function getMessages() {
    try {
      const response = await fetch("http://localhost:5000/group/getMessages", {
        method: "GET",
        headers: { "Content-Type": "application/json", token: localStorage.token, groupId: groupId },
      })

      const parseResponse = await response.json()
      setGroupMessages(parseResponse)
    } catch (error) {}
  }
  useEffect(() => {
    getMessages()
  }, [])

  return (
    <div style={{ maxHeight: "80vh" }} className='overflow-hidden  overflow-y-scroll'>
      <div className=''>
        <div className='mt-20 mb-16'>
          <div className='clearfix flex flex-col items-center'>
            {groupMessages.length > 0 &&
              groupMessages.map((msg) => {
                return <SingleMessage content={msg.content} sendTime={msg.sendtime} sendDate={msg.senddate} key={msg.message_id} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatComponent
