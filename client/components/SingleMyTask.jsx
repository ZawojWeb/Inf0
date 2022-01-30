import React, { useEffect, useState } from "react"
const SingleMyTask = ({ userName, taskContent, progress, taskId }) => {
  const [progresState, setProgresState] = useState(progress)

  const changeProgress = async (tId, progresState) => {
    try {
      const response = await fetch("http://localhost:5000/group/updateProgres", {
        method: "POST",
        headers: { "Content-Type": "application/json", token: localStorage.token, taskId: tId, progresState: progresState },
      })

      const parseResponse = await response.json()
    } catch (error) {}
  }

  useEffect(() => {
    changeProgress(taskId, progresState)
  }, [progresState])

  return (
    <div className='flex justify-around py-4 px-2'>
      <div className='w-2/5'>{taskContent}</div>
      <div className='flex justify-center w-3/5'>
        <div className='form-check form-check-inline mx-4'>
          <input
            className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='radio'
            name={taskContent + taskId}
            id={taskContent + taskId + "1"}
            value='0'
            checked={progresState == 0 ? true : false}
            onClick={(e) => {
              setProgresState(e.target.value)
            }}
          />
          <label className='form-check-label inline-block text-gray-800' for={taskContent + taskId + "1"}>
            No Started
          </label>
        </div>
        <div className='form-check form-check-inline mx-4'>
          <input
            className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='radio'
            name={taskContent + taskId}
            id={taskContent + taskId + "2"}
            value='1'
            checked={progresState == 1 ? true : false}
            onClick={(e) => {
              setProgresState(e.target.value)
            }}
          />
          <label className='form-check-label inline-block text-gray-800' for={taskContent + taskId + "2"}>
            In Progress
          </label>
        </div>
        <div className='form-check form-check-inline mx-4'>
          <input
            className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='radio'
            name={taskContent + taskId}
            id={taskContent + taskId + "3"}
            value='2'
            checked={progresState == 2 ? true : false}
            onClick={(e) => {
              setProgresState(e.target.value)
            }}
          />
          <label className='form-check-label inline-block text-gray-800' for={taskContent + taskId + "3"}>
            Complete
          </label>
        </div>
      </div>
    </div>
  )
}

export default SingleMyTask
