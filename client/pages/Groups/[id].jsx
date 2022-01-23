import React, { useState, useEffect } from "react"
import YouHaveToLogin from "../components/youHaveToLogin"
import AppNav from "../components/AppNav"

const Group = ({ id }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/verified", {
        method: "POST",
        headers: { token: localStorage.token },
      })

      const parseRes = await response.json()

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    isAuth()
  })
  return (
    <section>
      {id}
      {isAuthenticated && <AppNav />}
      {!isAuthenticated && <YouHaveToLogin />}
    </section>
  )
}

export default Group

export async function getServerSideProps({ query: { id } }) {
  // const res = await fetch(`http://localhost:3000/Groups?id=${id}`)
  const events = id

  return {
    props: {
      id: events,
    },
  }
}
