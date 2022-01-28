import React from "react"
import Tabs from "./Tabs"
import TasksComponent from "./TasksComponent"
import ChatComponent from "./ChatComponent"
import UserGroupList from "./UserGroupList"

const AdminView = ({ groupId, userId }) => {
  const tabsName = ["Messages", "Tasks", "APIs"]
  const components = [<ChatComponent />, <TasksComponent />, "APIsCompoent"]

  return (
    <div className='flex flex-row'>
      <Tabs className='basis-2/3 p-8' tabsName={tabsName} components={components} />
      <UserGroupList groupId={groupId} />
    </div>
  )
}

export default AdminView
