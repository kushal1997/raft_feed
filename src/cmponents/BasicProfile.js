import React, { Fragment } from 'react'

const BasicProfile = () => {
  return (
    <Fragment>
      <div className="flex flex-row">
        <a href="#">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt='men'
            width="100"
            className="rounded-full"
          />
        </a>
        <div className="w-72 pl-2 m-auto">
          <div className="text-sm font-medium">
            <a href="#">gigo2345</a>
          </div>
          <div className="text-gray-500 text-sm">
            kushal rao | front end web
          </div>
        </div>
        <div className="w-32 text-right m-auto ">
          <a
            href="#"
            className="text-xs text-sky-500 font-bold cursor-pointer"
          >
            Sign Out
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default BasicProfile