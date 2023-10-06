import React, { Fragment } from 'react'
import Modal from './Modal'

const ModalPostActions = (props) => {
  return (
    <Fragment>
    <Modal {...props} size="xs">
    <ul className="w-full text-base">
        <li>
            <a href="" className="border-b text-center text-red-600 py-3 block">
                Report
            </a>
        </li>
        <li>
            <a href="" className="border-b text-center text-red-600 py-3 block">
                Unfollow
            </a>
        </li>
        <li>
            <a href="" className="border-b text-center py-3 block">
                Go to Post
            </a>
        </li>
        
        <li>
            <a onClick={()=>props.setIsOpen(false)} className="border-b text-center py-3 block cursor-pointer">
                Cancel
            </a>
        </li>

    </ul>

    </Modal>
</Fragment>
  )
}

export default ModalPostActions