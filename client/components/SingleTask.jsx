import React, { useEffect, useState } from "react"
const SingleTask = ({ userName, taskContnt, progress }) => {
  return (
    <div className='flex justify-around'>
      <div>{taskContnt}</div>
      <div className='flex justify-center'>
        <div className='form-check form-check-inline mx-4'>
          <input className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option1' />
          <label className='form-check-label inline-block text-gray-800' for='inlineRadio10'>
            No Started
          </label>
        </div>
        <div className='form-check form-check-inline mx-4'>
          <input className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='option2' />
          <label className='form-check-label inline-block text-gray-800' for='inlineRadio20'>
            In Progress
          </label>
        </div>
        <div className='form-check form-check-inline mx-4'>
          <input className='form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='option2' />
          <label className='form-check-label inline-block text-gray-800' for='inlineRadio30'>
            Complete
          </label>
        </div>
      </div>
    </div>
  )
}

export default SingleTask
