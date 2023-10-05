import React, { Fragment } from 'react'
import ProfileHeader from '../cmponents/profile/ProfileHeader'

const Profile = () => {
  return (
   <Fragment>
    <div className="container pt-8 max-w-5xl">
        <main className="bg-slate-100">
            <ProfileHeader/>
        </main>
    </div>
   </Fragment>
  )
}

export default Profile