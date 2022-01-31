import React from "react"

const SingleMessage = ({ content, sendTime, sendDate }) => {
  let thisDate = new Date(sendDate).toLocaleDateString()
  let thisTime = sendTime.split(".")[0]

  return (
    <div className='bg-blue-600 w-3/4 mx-4 my-2 p-2 rounded-lg flex flex-col drop-shadow-lg '>
      <div className='text-center text-white text-sm'>
        {thisDate} | {thisTime}
      </div>
      <div className='text-white text-xl'>{content}</div>
    </div>
  )
}

export default SingleMessage
