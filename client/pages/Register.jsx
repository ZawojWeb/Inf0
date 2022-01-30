import Link from "next/link"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"

function Register() {
  const [inputs, setInputs] = useState({
    mail: "",
    nick: "",
    password: "",
    checkPassword: "",
  })
  const router = useRouter()

  const { mail, nick, password, checkPassword } = inputs

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    if (password !== checkPassword) {
      toast.error("Hasła są różne", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return 0
    }
    if (mail.length == 0 || nick.length == 0 || password.length == 0) {
      toast.error("Pola nie mągą być puste", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return 0
    }
    try {
      const avatar_id = 1
      const body = { mail, nick, password, avatar_id }

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const parseResponse = await response.json()

      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token)

        toast.success("Udało się stworzyć konto, zaraz zostaneisz przekierowany", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          router.push("/Groups")
        }, 2000)
      } else {
        toast.error(`${parseResponse}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <section className='pb-24 xl:pb-0 bg-darkBlueGray-500 h-screen flex items-center'>
      <div className='py-8 mx-10 mb-20 xl:mb-52 bg-white' data-removed=''></div>
      <div className='container px-4 mx-auto'>
        <div className='relative xl:pb-52 text-center overflow-hidden'>
          <img className='absolute top-0 bottom-0 h-full left-1/2 mt-20 transform -translate-x-1/2 object-contain' src='uinel-assets/images/sign-up/half-circle.svg' alt='' />
          <div className='relative'>
            <span className='inline-block py-3 px-7 mb-10 text-lg font-medium font-heading leading-5 text-indigo-500 border border-indigo-500 rounded-6xl'>Create account</span>
            <div className='mb-14 xl:mb-16'>
              <h2 className='text-9xl md:text-10xl xl:text-11xl text-white leading-tight font-heading font-medium'>Start creating a design</h2>
            </div>
            <div className='max-w-md mx-auto'>
              <input className='w-full mb-6 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' onChange={(e) => onChange(e)} value={nick} name='nick' type='text' placeholder='Nickname' />
              <input className='w-full mb-6 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' onChange={(e) => onChange(e)} value={mail} name='mail' type='email' placeholder='Your Email' />
              <input className='w-full mb-6 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' onChange={(e) => onChange(e)} value={password} name='password' type='password' placeholder='Password' />
              <input className='w-full mb-14 py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' onChange={(e) => onChange(e)} value={checkPassword} name='checkPassword' type='password' placeholder='Confirm password' />
              <div className='relative mb-14 flex justify-center items-center'>
                <input style={{ appearance: "none" }} type='checkbox' />
                <p className='text-gray-200'>
                  Masz konto ? <Link href='/Login'>Zaloguj się</Link>
                </p>
              </div>
              <a className='block py-5 px-10 mx-auto w-full md:max-w-max text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl' onClick={onSubmitForm} href='/Dashboard'>
                Register now
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme='colored' position='top-right' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </section>
  )
}
export default Register
