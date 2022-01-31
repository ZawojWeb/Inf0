import React, { useState, useEffect } from "react"
import YouHaveToLogin from "../../components/youHaveToLogin"
import AppNav from "../../components/AppNav"
import Groups from "../../components/Groups"
const Dashboard = ({ params }) => {
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
    <div>
      {isAuthenticated && <AppNav />}
      {isAuthenticated && <Groups />}
      {!isAuthenticated && <YouHaveToLogin />}
    </div>
  )
}

export default Dashboard
