import React, { useState, useEffect } from "react"
import YouHaveToLogin from "../../components/youHaveToLogin"
import AppNav from "../../components/AppNav"
import GroupView from "../../components/GroupView"

const Group = ({ id }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userId, setUserId] = useState("")
  async function getData() {
    try {
      const responseVer = await fetch("http://localhost:5000/auth/verified", {
        method: "POST",
        headers: { token: localStorage.token },
      })
      const parseResVer = await responseVer.json()
      parseResVer === true ? setIsAuthenticated(true) : setIsAuthenticated(false)

      const responseUID = await fetch("http://localhost:5000/userinfo", {
        method: "GET",
        headers: { token: localStorage.token },
      })
      const parseResUID = await responseUID.json()
      setUserId(parseResUID[0].user_id)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getData()
  })
  return (
    <section style={{ overflow: "hidden", maxHeight: "100vh" }}>
      {isAuthenticated && <AppNav />}
      {isAuthenticated && <GroupView id={id} userId={userId} />}
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
