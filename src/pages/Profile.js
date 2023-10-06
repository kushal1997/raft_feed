import React, { Fragment } from 'react'
import ProfileHeader from '../cmponents/profile/ProfileHeader'
import Highlights from '../cmponents/profile/Highlights'
import ProfilePosts from '../cmponents/profile/ProfilePosts'
import Footer from '../cmponents/Footer'

const Profile = ({setIsModalOpen}) => {
  return (
   <Fragment>
    <div className="container pt-8 max-w-5xl">
        <main className="bg-slate-100">
            <ProfileHeader setIsModalOpen={setIsModalOpen}/>
            <Highlights/>
            <ProfilePosts/>
        </main>
        <Footer/>
    </div>
   </Fragment>
  )
}

export default Profile