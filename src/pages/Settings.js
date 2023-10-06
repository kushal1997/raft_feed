import React, { Fragment } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Settings = () => {
    const location=useLocation();
    const {pathname} =location;
  return (
    <Fragment>
        <div className="border flex flex-row bg-white min-h-[80vh]">
            <div className="w-1/4 border-r">
                <ul>
                    <li>
                        <Link
                            className={`block cursor-pointer p-4 px-8 ${
                                pathname === "/accounts/edit"
                                    ? "font-bold border-l-2 border-l-black"
                                    : ""
                            }`}
                            to="edit"
                        >
                            Edit Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`block cursor-pointer p-4 px-8 ${
                                pathname === "/accounts/change_password"
                                    ? "font-bold border-l-2 border-l-black"
                                    : ""
                            }`}
                            to="change_password"
                        >
                            Change Password
                        </Link>
                    </li>
                    <li className="block p-4 px-8">
                        Help
                    </li>
                </ul>
            </div>
            <div className="w-3/4 p-10">
                <Outlet/>
            </div>
        </div>
    </Fragment>
  )
}

export default Settings