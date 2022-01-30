import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import SingleTask from "./SingleTask"
import Popup from "reactjs-popup"
import Collapsible from "react-collapsible"
import "react-toastify/dist/ReactToastify.css"
import "reactjs-popup/dist/index.css"
const TasksComponent = ({ userList, groupId, adminId, userPrivilage }) => {
  const [inputs, setInputs] = useState({
    taskContent: "",
    userId: "",
  })
  const [tasksList, setTasksList] = useState([])

  const { taskContent, userId } = inputs
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const addTask = async (e) => {
    e.preventDefault()

    try {
      const body = { taskContent, userId, groupId }
      const response = await fetch("http://localhost:5000/group/addTask", {
        method: "POST",
        headers: { "Content-Type": "application/json", token: localStorage.token },
        body: JSON.stringify(body),
      })

      const parseResponse = await response.json()
      toast.success("Dodano nowe zadanie", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setInputs({
        taskContent: "",
        userId: "",
      })
      getTasks()
    } catch (error) {}
  }

  async function getTasks() {
    try {
      const response = await fetch("http://localhost:5000/group/getTasks", {
        method: "GET",
        headers: { "Content-Type": "application/json", token: localStorage.token, groupId: groupId },
      })

      const parseResponse = await response.json()
      setTasksList(parseResponse)
    } catch (error) {}
  }

  useEffect(() => {
    getTasks()
  }, [groupId, tasksList.length])

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
        <div className='w-full px-10'>
          <div className='px-6 lg:px-20 py-12 lg:py-24 bg-white shadow-2xl rounded-lg'>
            <form action='#'>
              <h3 className='mb-10 text-2xl font-bold font-heading'></h3>
              <div className='flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full'>
                <input onChange={(e) => onChange(e)} value={taskContent} name='taskContent' className='w-full pr-6 pl-4 py-4 font-bold placeholder-gray-200 rounded-r-full focus:outline-none' type='text' placeholder='Task content' />
              </div>
              <div className='flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full'>
                <select name='userId' onChange={(e) => onChange(e)} value={userId}>
                  <option value=''>--Wybierz użytkownika--</option>
                  {userList &&
                    userPrivilage == "admin" &&
                    userList.map((user) => {
                      return adminId != user.user_id && <option value={user.user_id}>{user.nickname}</option>
                    })}

                  {userList &&
                    userPrivilage == "editor" &&
                    userList.map((user) => {
                      return adminId != user.user_id && user.privilege != "editor" && user.privilege != "admin" && <option value={user.user_id}>{user.nickname}</option>
                    })}
                </select>
              </div>
              <button onClick={addTask} className='py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200'>
                Add User
              </button>
            </form>
          </div>
        </div>
      </Popup>

      <div className='my-8'>
        {userList &&
          tasksList &&
          userPrivilage == "admin" &&
          userList.map((user) => {
            return (
              user.privilege != "admin" && (
                <Collapsible className='drop-shadow-2xl my-8' openedClassName='drop-shadow-2xl bg-white  my-8' trigger={<h1 className='bg-blue-500 font-medium text-xl  text-center text-white py-2'>{user.nickname}</h1>}>
                  <div className='flex flex-col '>
                    {tasksList.map((task) => {
                      return task.user_id == user.user_id && <SingleTask taskId={task.task_id} taskContent={task.content} progress={task.complete} key={task.task_id} getTasks={getTasks} />
                    })}
                  </div>
                </Collapsible>
              )
            )
          })}

        {userList &&
          tasksList &&
          userPrivilage == "editor" &&
          userList.map((user) => {
            return (
              user.privilege != "admin" &&
              user.privilege != "editor" && (
                <Collapsible className='drop-shadow-2xl my-8' openedClassName='drop-shadow-2xl bg-white  my-8' trigger={<h1 className='bg-blue-500 font-medium text-xl  text-center text-white py-2'>{user.nickname}</h1>}>
                  <div className='flex flex-col '>
                    {tasksList.map((task) => {
                      return task.user_id == user.user_id && <SingleTask taskId={task.task_id} taskContent={task.content} progress={task.complete} key={task.task_id} />
                    })}
                  </div>
                </Collapsible>
              )
            )
          })}
      </div>
      <ToastContainer theme='colored' position='top-right' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}

export default TasksComponent
