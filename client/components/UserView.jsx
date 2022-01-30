import React, { useState } from "react"
import Tabs from "./Tabs"
import TasksComponent from "./TasksComponent"
import ChatComponent from "./ChatComponent"
import UserGroupList from "./UserGroupList"
import MyTasks from "./MyTasks"

const UserView = ({ groupId, userId, privilage }) => {
  const [userList, setUserList] = useState([""])
  const tabsName = ["Messages", "My tasks"]

  const components = [<ChatComponent />, <MyTasks currentUser={userId} privilage={privilage} />]
  return (
    <div className='flex flex-row'>
      <Tabs className='basis-2/3 p-8' tabsName={tabsName} components={components} />
      <UserGroupList groupId={groupId} userList={userList} setUserList={setUserList} userPrivilage={privilage} />
    </div>
  )
}

export default UserView
