import React, { Fragment } from 'react'
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from "../../assets/images/photo_web.jpg"
const ModalPost = (props) => {
    const { isOpen, setIsOpen } = props;
    return (
        <Fragment>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="lg">
                <div className="flex flex-row h-full">
                    <div className="w-3/5 flex items-center justify-center">
                        <img src={img} />
                    </div>
                    <div className="w-2/5 relative pt-16 ml-2">
                        <div className="absolute top-0 w-full p-3 flex flex-row border-b">
                            <div className="flex-1">
                                <a href="" className="">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/57.jpg"
                                        alt=""
                                        className="w-8 rounded-full max-w-none inline"

                                    />
                                    <span className="font-medium text-sm ml-2">
                                        user123
                                    </span>
                                </a>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={'ellipsis'} />
                            </div>
                        </div>
                        <div className="overflow-scroll h-[69%] pb-48">
                            <div className="flex flex-row p-3">
                                <div>
                                    <img
                                        src="https://randomuser.me/api/portraits/women/57.jpg"
                                        alt=""
                                        className="w-8 rounded-full max-w-none inline"
                                    />
                                </div>
                                <div>
                                    <div className="px-3 text-sm">
                                        <span className="mr-2 font-medium">
                                            user123
                                        </span>
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto nulla, illo incidunt repellat similique!"
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row p-3">
                                <div>
                                    <img
                                        src="https://randomuser.me/api/portraits/women/57.jpg"
                                        alt=""
                                        className="w-8 rounded-full max-w-none inline"
                                    />
                                </div>
                                <div className="grow relative">
                                    <div className="px-4 text-sm">
                                        <span className="font-medium mr-2">
                                            gigo6969
                                        </span>
                                        Looks Great!
                                    </div>
                                    <a href="" className="absolute top-0 right-0 text-xs cursor-pointer text-red-600">
                                        <FontAwesomeIcon icon={'heart'} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute button-0 w-full border-t bg-white">
                            <div className="p-3 flex flex-row text-2xl w-full">
                                <div className="flex-1">
                                    <a href="" className="mr-3 text-red-600 cursor-pointer">
                                        <FontAwesomeIcon icon={'heart'} />
                                    </a>

                                    <a
                                        className="mr-3 hover:text-gray-500 cursor-pointer"
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
                            <div className="text-sm font-medium px-3">
                                1,234 Likes
                            </div>
                            <div className="text-gray-500 uppercase px-3 text-xs tracking-wide my-3">
                                23 Hours Ago
                            </div>
                            <div className="p-3 flex flex-row border-t">
                                <div className="flex items-center">
                                    <a href="" className="text-2xl">
                                        <FontAwesomeIcon icon={['far', 'face-smile']} />
                                    </a>
                                </div>
                                <div className="flex-1 pr-3 py-1">
                                    <input type="text" className="w-full px-3 text-sm outline-0" placeholder='Add a comment ...' />
                                </div>
                                <div className="flex items-center text-sm">
                                    <a className="text-sky-500 font-medium">
                                        Post
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </Fragment>
    )
}

export default ModalPost