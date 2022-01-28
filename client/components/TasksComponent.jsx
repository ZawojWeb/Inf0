import React, { useEffect, useState } from "react"
import Collapsible from "react-collapsible"
import "reactjs-popup/dist/index.css"
import Popup from "reactjs-popup"

const TasksComponent = () => {
  const [inputs, setInputs] = useState({
    taskContent: "",
  })
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
      <Collapsible className='bg-blue-500' openedClassName='bg-blue-500' trigger='UserName'>
        <div>
          <h1>Task Name</h1>
        </div>
      </Collapsible>
    </>
  )
}

export default TasksComponent
