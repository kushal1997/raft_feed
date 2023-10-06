import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'

const ProfileHeader = ({setIsModalOpen}) => {
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <Fragment>
      <div className="grid grid-cols-3 mb-10">
        <div className="bg-green p-3 rounded flex items-start justify-center">
          <img
            src="https://user-images.githubusercontent.com/522079/90506845-e8420580-e122-11ea-82ca-31087fc8486c.png"
            alt="Profile Pic"
            className="rounded-full"
            width={150}
          />
        </div>
        <div className="p-3 text-gray-700 col-span-2">
          <div className="flex items-center">
            <h1 className="inline-block text-3xl align-bottom">
              gigo6969
            </h1>
            <button className="bg-white ml-3 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded text-sm">
              Edit Profile
            </button>
            <a className="ml-3 cursor-pointer" onClick={handleModalOpen}>
              <FontAwesomeIcon icon={'gear'} className='text-2xl leading-6' />
            </a>
          </div>
          <div className="lg:flex flex-row py-5 max-w-sm hidden">
            <div className="basis-1/3">
              <strong>100</strong> posts
            </div>
            <div className="basis-1/3">
              <strong>2305</strong> followers
            </div>
            <div className="basis-1/3">
              <strong>536</strong> following
            </div>
          </div>
          
          <h3 className="font-bold">Kushal Rao</h3>
          <p>{'>'} FrontEnd Web Developer 💻</p>
          <p>{'>'} 1+ yrs experience 🚀</p>
          <p>{'>'} Javascript/React/TailwindCSS</p>
          <a 
          href="https://my-projects-noizy.netlify.app/" 
          target="_blank" 
          className='text-blue-900 font-bold'
          >
            my_projects.com
          </a>


        </div>
      </div>
    </Fragment>
  )
}

export default ProfileHeader