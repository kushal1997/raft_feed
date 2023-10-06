import React, { Fragment, useState } from 'react'
import WebPhoto from "../assets/images/photo_web.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalPostActions from './modals/ModalPostActions';
import ModalPost from './modals/ModalPost';


const Post = () => {
  const [isPModalAOpen,setIsPModalAOpen]=useState(false);
  const [isPModal,setIsPModal]=useState(false);
  return (
    <Fragment>
    <ModalPostActions isOpen={isPModalAOpen} setIsOpen={setIsPModalAOpen}/>
    <ModalPost isOpen={isPModal} setIsOpen={setIsPModal}/>
      <div className="border rounded-lg border-slate-200 mb-5 bg-white">
        <div className="flex p-3 flex-row">
          <div className="flex-1">
            <a href="" className=''>
              <img
                src="https://randomuser.me/api/portraits/women/57.jpg"
                alt=""
                className="w-8 rounded-full inline"
              />
              <span className="font-medium text-sm ml-2">
                user123
              </span>
            </a>
          </div>
          <div>
            <a onClick={()=>setIsPModalAOpen(true)}>
              <FontAwesomeIcon icon={'ellipsis'}/>
            </a>
          </div>
        </div>
        <img src={WebPhoto} alt="Photo of Web Developer" className="w-100" />
        <div className="p-3 flex flex-row text-2xl">
          <div className="flex-1">
            <a href="" className="mr-3 text-red-600 cursor-pointer">
              <FontAwesomeIcon icon={'heart'} />
            </a>

            <a 
            className="mr-3 hover:text-gray-500 cursor-pointer"
            onClick={()=>setIsPModal(true)}
            >
              <FontAwesomeIcon icon={['far', 'comment']} />
            </a>

            <a href="" className=" hover:text-gray-500 cursor-pointer">
              <FontAwesomeIcon icon={['far', 'paper-plane']} />
            </a>
          </div>
          <div className="">
            <a href="" className="cursor-pointer hover:text-gray-500">
              <FontAwesomeIcon icon={['far', 'bookmark']} />
            </a>
          </div>
        </div>
        <div className="font-medium text-sm px-3">1000 Likes</div>
        <div className="px-3 text-sm">
          <span className="font-medium">gigo6969</span>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere necessitatibus provident repellendus distinctio, voluptatum aliquid."
        </div>
        <div className="text-gray-500 uppercase p-3 text-xs tracking-wide mt-2">
          23 hours ago
        </div>

        <div className="p-3 flex flex-row border-t">
          <div className="flex items-center">
            <a href="" className="text-2xl cursor-pointer">
              <FontAwesomeIcon icon={['far', 'smile']} />
            </a>
          </div>
          <div className="flex-1 pr-3 py-1">
            <input type="text" name="" id="" className="w-full px-3 text-sm py-1 outline-0" placeholder='Add a comment' />
          </div>
          <div className="flex items-center text-sm">
            <a href="" className="text-sky-500 font-medium cursor-pointer">
              Post
            </a>
          </div>
        </div>


      </div>
    </Fragment>
  )
}

export default Post