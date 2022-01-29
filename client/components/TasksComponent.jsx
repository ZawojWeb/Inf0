import React, { useEffect, useState } from "react"
import SingleTask from "./SingleTask"
import "reactjs-popup/dist/index.css"
import Popup from "reactjs-popup"
import Collapsible from "react-collapsible"
const TasksComponent = () => {
  const [inputs, setInputs] = useState({
    taskContent: "",
  })

  const tasksList = {}
  return (
    <>
      <Popup
        className='max-w-xs'
        trigger={
          <a
            data-section-id='1'
            data-category='__elements'
            data-component-id='fa131f65_04_awz'
            className='text-center inline-block py-2 px-10 my-10 mx-auto text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl'
            href='#'
            onClick={(e) => {
              e.preventDefault()
            }}
            data-config-id='04_button'
          >
            Add Task
          </a>
        }
        modal
      >
        Hejo
      </Popup>

      <div className='my-8 drop-shadow-xl'>
        <Collapsible className='drop-shadow-xl' openedclassName='drop-shadow-xl' trigger={"Lena"}>
          <div className='flex flex-col '>
            <SingleTask taskContnt={"Umyj uszy"} progress={0} />
            <SingleTask taskContnt={"Dupa uszy"} progress={0} />
          </div>
        </Collapsible>
      </div>
      <div className='my-8'>
        <Collapsible className='drop-shadow-md' openedclassName='drop-shadow-xl' trigger={"Lena"}>
          <div className='flex flex-col '>
            <SingleTask taskContnt={"Umyj uszy"} progress={0} />
            <SingleTask taskContnt={"Dupa uszy"} progress={0} />
          </div>
        </Collapsible>
      </div>
    </>
  )
}

export default TasksComponent
