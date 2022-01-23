import React, { useState, useEffect } from "react"
import CreateGroup from "./CreateGroup"
import GroupCard from "./GroupCard"

const Groups = () => {
  const [userId, setUserId] = useState("")
  const [groups, setGroups] = useState([])
  async function getUserId() {
    try {
      const response = await fetch("http://localhost:5000/userinfo", {
        method: "GET",
        headers: { token: localStorage.token },
      })

      const parseRes = await response.json()

      setUserId(parseRes[0].user_id)
    } catch (err) {
      console.error(err.message)
    }
  }

  async function getUserGrups(userId) {
    try {
      const response = await fetch("http://localhost:5000/userinfo/groups", {
        method: "GET",
        headers: { token: localStorage.token, userId: userId },
      })

      const parseRes = await response.json()

      setGroups(parseRes)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getUserId()
  }, [])
  useEffect(() => {
    if (userId) {
      getUserGrups(userId)
    }
  }, [userId, groups.length])

  return (
    <section className='py-8 bg-white'>
      <div className='container px-4 mx-auto flex flex-col'>
        <CreateGroup userId={userId} setGroups={setGroups} groups={groups} />
        <div className='flex flex-wrap -mx-4 md:-mx-6 lg:-mx-8'>
          {groups.length > 0 &&
            groups.map((group) => {
              return <GroupCard name={group.name} privilege={group.privilege} id={group.group_id} key={group.group_id} />
            })}
        </div>
      </div>
    </section>
  )
}

export default Groups
