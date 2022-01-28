import Popup from "reactjs-popup"
import CreateGroupForm from "./CreateGroupForm"
import "reactjs-popup/dist/index.css"

const CreateGroup = ({ userId, setGroups, groups }) => {
  return (
    <>
      <Popup
        className='max-w-xs'
        trigger={
          <a
            data-section-id='1'
            data-category='__elements'
            data-component-id='fa131f65_04_awz'
            className='text-center inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl'
            href='#'
            onClick={(e) => {
              e.preventDefault()
            }}
            data-config-id='04_button'
          >
            Create Group
          </a>
        }
        modal
      >
        <CreateGroupForm userId={userId} setGroups={setGroups} groups={groups} />
      </Popup>
    </>
  )
}

export default CreateGroup
