import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"

const CreateGroupForm = ({ userId, setGroups, groups }) => {
  const [inputs, setInputs] = useState({
    groupName: "",
  })
  const user_id = userId

  const { groupName } = inputs

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {
      const body = { user_id, groupName }

      const response = await fetch("http://localhost:5000/group/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", token: localStorage.token },
        body: JSON.stringify(body),
      })

      const parseResponse = await response.json()
      setGroups(...groups, [{ name: groupName, privilege: "admin" }])
      setInputs({
        groupName: "",
      })
      toast.success("Stworzono nową grupę", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (error) {}
  }

  return (
    <div className='w-full px-10'>
      <div className='px-6 lg:px-20 py-12 lg:py-24 bg-white shadow-2xl rounded-lg'>
        <form action='#'>
          <h3 className='mb-10 text-2xl font-bold font-heading'></h3>
          <div className='flex items-center pl-6 mb-3 border border-gray-50 bg-white rounded-full'>
            <span className='inline-block pr-3 border-r border-gray-50'>
              <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M17.3899 26.2143C17.3871 26.8725 17.1243 27.5031 16.6587 27.9686C16.1932 28.4342 15.5626 28.6969 14.9044 28.6998V28.6998C14.2462 28.6972 13.6157 28.4347 13.1503 27.9693C12.685 27.5039 12.4224 26.8735 12.4199 26.2153L12.4243 3.54311C12.4255 2.88436 12.6877 2.25282 13.1536 1.78692C13.6195 1.32102 14.2511 1.05876 14.9098 1.05763V1.05763C15.5686 1.0585 16.2 1.3205 16.6657 1.78622C17.1315 2.25194 17.3935 2.88338 17.3943 3.54213L17.3899 26.2143Z' fill='#4338CA' />
                <path d='M26.2369 12.3846C26.8956 12.3855 27.5271 12.6475 27.9928 13.1132C28.4585 13.5789 28.7205 14.2104 28.7214 14.8691C28.7186 15.5274 28.4558 16.1579 27.9902 16.6235C27.5247 17.089 26.8941 17.3518 26.2359 17.3546L3.56376 17.3591C2.90552 17.3565 2.27506 17.094 1.80971 16.6286C1.34435 16.1633 1.0818 15.5328 1.07926 14.8746V14.8746C1.08122 14.2161 1.34375 13.585 1.80947 13.1193C2.27519 12.6536 2.90624 12.3911 3.56473 12.3891L26.2369 12.3846Z' fill='#4338CA' />
              </svg>
            </span>
            <input onChange={(e) => onChange(e)} value={groupName} name='groupName' className='w-full pr-6 pl-4 py-4 font-bold placeholder-gray-200 rounded-r-full focus:outline-none' type='text' placeholder='Group Name' />
          </div>
          <button onClick={onSubmitForm} className='py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200'>
            Create Group
          </button>
        </form>
      </div>
      <ToastContainer theme='colored' position='top-right' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  )
}

export default CreateGroupForm
