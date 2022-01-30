import React, { useState } from "react"
import Tabs from "./Tabs"
import TasksComponent from "./TasksComponent"
import ChatComponent from "./ChatComponent"
import UserGroupList from "./UserGroupList"
import ApisForm from "./ApisForm"

const AdminView = ({ groupId, userId, privilage }) => {
  const [userList, setUserList] = useState([""])
  const tabsName = ["Messages", "Tasks", "APIs"]
  const components = [<ChatComponent />, <TasksComponent adminId={userId} userList={userList} groupId={groupId} userPrivilage={privilage} />, <ApisForm groupId={groupId} />]
  return (
    <div className='flex flex-row'>
      <Tabs className='basis-2/3 p-8' tabsName={tabsName} components={components} />
      <UserGroupList groupId={groupId} userList={userList} setUserList={setUserList} userPrivilage={privilage} />
    </div>
  )
}

export default AdminView
