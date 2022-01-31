import React, { useEffect, useState } from "react"
const SingleTask = ({ userName, taskContent, progress, taskId, getTasks }) => {
  const deleteTask = async (taskId) => {
    try {
      console.log("object")
      const response = await fetch("http://localhost:5000/group/deleteTask", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", token: localStorage.token, taskId: taskId, taskName: taskContent },
      })

      const parseResponse = await response.json()
      getTasks()
    } catch (error) {}
  }
  return (
    <div className='flex justify-around py-4 px-2'>
      <div className='w-2/6'>{taskContent}</div>
      <div className='flex justify-center w-3/6'>
        <div className='form-check form-check-inline mx-4'>
          <input className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type='radio' name={taskContent + taskId} id={taskContent + taskId + "1"} value='0' checked={progress == 0 ? true : false} />
          <label className='form-check-label inline-block text-gray-800' for={taskContent + taskId + "1"}>
            No Started
          </label>
        </div>
        <div className='form-check form-check-inline mx-4'>
          <input className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type='radio' name={taskContent + taskId} id={taskContent + taskId + "2"} value='1' checked={progress == 1 ? true : false} />
          <label className='form-check-label inline-block text-gray-800' for={taskContent + taskId + "2"}>
            In Progress
          </label>
        </div>
        <div className='form-check form-check-inline mx-4'>
          <input className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type='radio' name={taskContent + taskId} id={taskContent + taskId + "3"} value='2' checked={progress == 2 ? true : false} />
          <label className='form-check-label inline-block text-gray-800' for={taskContent + taskId + "3"}>
            Complete
          </label>
        </div>
      </div>
      <div className='w-1/6 flex justify-center cursor-pointer'>
        {progress == 2 && (
          <div
            onClick={() => {
              deleteTask(taskId)
            }}
          >
            <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='trash' width='20px' height='20px' className='svg-inline--fa fa-trash fa-w-14 text-red-600	' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path fill='currentColor' d='M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z'></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleTask
