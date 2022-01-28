import React, { useState, useEffect } from "react"
import "reactjs-popup/dist/index.css"
import Popup from "reactjs-popup"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const UserGroupList = ({ groupId }) => {
  const [inputs, setInputs] = useState({
    userEmail: "",
    privilege: "",
  })
  const [userList, setUserList] = useState([])

  const { userEmail, privilege } = inputs

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {
      const body = { userEmail, privilege, groupId }
      const response = await fetch("http://localhost:5000/group/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json", token: localStorage.token },
        body: JSON.stringify(body),
      })

      const parseResponse = await response.json()
      if (parseResponse == 0) {
        toast.error("Nie ma użytkownika z takim mailem", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else {
        toast.success("Dodano nowego usera", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setInputs({
          userEmail: "",
          privilege: "",
        })
      }
    } catch (error) {}
  }

  async function getUsers() {
    try {
      const response = await fetch("http://localhost:5000/group/getUsers", {
        method: "GET",
        headers: { "Content-Type": "application/json", token: localStorage.token, groupId: groupId },
      })

      const parseResponse = await response.json()
      setUserList(parseResponse)
    } catch (error) {}
  }

  useEffect(() => {
    getUsers()
  }, [groupId, userList.length])

  return (
    <div className='basis-1/3 h-screen bg-blue-100 '>
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
            Add User
          </a>
        }
        modal
      >
        <div className='w-full px-10'>
          <div className='px-6 lg:px-20 py-12 lg:py-24 bg-white shadow-2xl rounded-lg'>
            <form action='#'>
              <h3 className='mb-10 text-2xl font-bold font-heading'></h3>
              <div className='flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full'>
                <input onChange={(e) => onChange(e)} value={userEmail} name='userEmail' className='w-full pr-6 pl-4 py-4 font-bold placeholder-gray-200 rounded-r-full focus:outline-none' type='email' placeholder='User Email' />
              </div>
              <div className='flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full'>
                <select name='pets' id='pet-select' onChange={(e) => onChange(e)} value={privilege} name='privilege'>
                  <option value=''>--Wybierz role--</option>
                  <option value='editor'>Edytor</option>
                  <option value='user'>User</option>
                </select>
              </div>
              <button onClick={onSubmitForm} className='py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200'>
                Add User
              </button>
            </form>
          </div>
        </div>
      </Popup>
      <ToastContainer theme='colored' position='top-right' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div>
        {userList.length > 0 &&
          userList.map((user) => {
            return <div>{user.user_id}</div>
          })}
      </div>
    </div>
  )
}

export default UserGroupList
