import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment, useState } from 'react'
import profilePost from "../../assets/images/photo_web.jpg"
const ProfilePost = () => {
    const [showOverlay, setOverlay] = useState(false);
    return (
        <Fragment>
            <div className="relative overflow-hidden w-full pt-[100%]"
                onMouseEnter={() => setOverlay(true)}
            >
                <a href="">
                    <div className={`bg-gray-800 bg-opacity-60 h-full w-full absolute inset-0 z-10 flex items-center justify-center text-white 
                ${showOverlay ? "" : "hidden"}`}
                        onMouseLeave={() => setOverlay(false)}
                    >
                        <FontAwesomeIcon icon={'heart'} />
                        <span className="ml-2">200</span>
                        <FontAwesomeIcon icon={'comment'} className='ml-8' />
                        <span className='ml-2'>100</span>
                    </div>
                </a>
                <img
                    src={profilePost}
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full" />
            </div>
        </Fragment>
    )
}

export default ProfilePost