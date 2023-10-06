import React, { Fragment } from 'react'
import Modal from './Modal'

const ModalSetting = (props) => {
  return (
    <Fragment>
        <Modal {...props} size="xs">
        <ul className="w-full text-sm">
            <li>
                <a href="" className="border-b text-center py-3 block">
                    Change Password
                </a>
            </li>
            <li>
                <a href="" className="border-b text-center py-3 block">
                    Nametag
                </a>
            </li>
            <li>
                <a href="" className="border-b text-center py-3 block">
                    Apps and Websites
                </a>
            </li>
            <li>
                <a href="" className="border-b text-center py-3 block">
                    Edit Profile
                </a>
            </li>
            <li>
                <a href="" className="border-b text-center py-3 block">
                    Report a problem
                </a>
            </li>
            <li>
                <a href="" className="border-b text-center py-3 block">
                    Logout
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

export default ModalSetting