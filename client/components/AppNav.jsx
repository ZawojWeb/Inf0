import React, { Fragment, useState, useEffect } from "react"
import { useRouter } from "next/router"

const AppNav = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [userId, setUserId] = useState("")
  const [avatar, setAvatar] = useState("")
  const router = useRouter()

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/userinfo", {
        method: "GET",
        headers: { token: localStorage.token },
      })

      const parseRes = await response.json()

      setName(parseRes[0].nickname)
      setMail(parseRes[0].mail)
      setUserId(parseRes[0].user_id)
      setAvatar(parseRes[0].avatar_id)
    } catch (err) {
      console.error(err.message)
    }
  }

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    router.push("/Login")
  }

  useEffect(() => {
    getName()
  }, [])

  return (
    <section className='text-gray-50 font-heading font-medium relative bg-blue-500'>
      <nav className='flex justify-between px-6 lg:px-12 py-8'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center'>
            <a
              onClick={(e) => {
                e.preventDefault()
                router.push("/Groups")
              }}
              href='/Groups'
            >
              <img className='h-12' src='/assets/uinel-assets/logos/uinel-gray-white.svg' alt='' />
            </a>
          </div>
          <div className='flex items-center'>
            <a className='flex items-center text-white' href='#'>
              <span>{name}</span>
              <img className='ml-6' src='/assets/uinel-assets/elements/navigations/avatar-online.png' alt='' />
              <img className='ml-6' src='/assets/uinel-assets/elements/navigations/arrow-down-white.svg' alt='' />
            </a>
            <div className='w-px h-8 bg-white mx-9 bg-opacity-20'></div>
            <button className='uppercase text-white text-sm font-body font-bold border-2 border-white border-opacity-30 rounded-full py-3 px-5 tracking-wide hover:border-white' onClick={(e) => logout(e)}>
              <span className='block mt-px'>Wyloguj się</span>
            </button>
          </div>
        </div>
      </nav>
    </section>
  )
}
export default AppNav
