import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import ProfilePost from './ProfilePost'

const ProfilePosts = () => {
  return (
    <Fragment>
      <ul className="flex flex-row p-2 text-sm items-center justify-center border-t text-gray-400 h-16 lg:hidden">
        <li className="flex-1 text-center">
          <strong className="text-black block">107</strong> posts
        </li>
        <li className="flex-1 text-center">
          <strong className="text-black block">2305</strong> followers
        </li>
        <li className="flex-1 text-center">
          <strong className="text-black block">536</strong> following
        </li>
      </ul>
      <div className="flex flex-row text-2xl items-center justify-center border-t uppercase text-gray-400 tracking-widest h-16 lg:text-xs">
        <a className="text-black border-t border-black flex justify-center items-center h-full mr-16 cursor-pointer">
          <FontAwesomeIcon icon={'table-cells'}/>
          <span className="ml-2 hidden lg:inline-block">Posts</span>
        </a>

        <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
          <FontAwesomeIcon icon={'play'}/>
          <span className="ml-2 hidden lg:inline-block">Reels</span>
        </a>

        <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
          <FontAwesomeIcon icon={['far','circle-play']}/>
          <span className="ml-2 hidden lg:inline-block">Videos</span>
        </a>

        <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
          <FontAwesomeIcon icon={['far','bookmark']}/>
          <span className="ml-2 hidden lg:inline-block">Bookmark</span>
        </a>

        <a className="flex justify-center items-center h-full mr-16 cursor-pointer">
          <FontAwesomeIcon icon={'user-tag'}/>
          <span className="ml-2 hidden lg:inline-block">Tagged</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-1 lg:gap-8">
        <ProfilePost/>
        <ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/><ProfilePost/>
      </div>
    </Fragment>
  )
}

export default ProfilePosts