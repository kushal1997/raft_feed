import React, { Fragment } from 'react'
import logo from "../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return (
        <Fragment>
            <nav className="sticky top-0 w-full border border-b-1 z-50 bg-white">
                <div className="container max-w-5xl">
                    <div className="flex flex-row py-1 items-center">
                        <div className=" basis-1/2 md:basis-1/3 flex flex-row justify-center items-center">
                            <img width={50} height={50} src={logo} alt="logo" />
                            <p>Raft Labs</p>
                        </div>
                        <div className="basis-1/3 hidden md:block">
                            <div className="relative">
                                <FontAwesomeIcon icon={'magnifying-glass'} className=' absolute left-3 top-3 text-gray-300' />
                                <input type="text"
                                    name=""
                                    id=""
                                    placeholder='search'
                                    className='p-2 bg-gray-100 rounded-lg w-80 pl-10 align-middle focus:outline-0 placeholder:font-light'
                                />
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                            <ul className="flex flex-row space-x-4 p-2 text-2xl justify-end items-center">
                                <li>
                                    <a href="" className="cursor-pointer">
                                        <FontAwesomeIcon icon={'house'} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="cursor-pointer">
                                        <FontAwesomeIcon icon={['far', "comment-dots"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="cursor-pointer">
                                        <FontAwesomeIcon icon={['far', "square-plus"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="cursor-pointer">
                                        <FontAwesomeIcon icon={['far', "compass"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="cursor-pointer">
                                        <FontAwesomeIcon icon={['far', "heart"]} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="cursor-pointer">
                                        <img
                                        className=' rounded-full w-6 w-ful'
                                            src="https://user-images.githubusercontent.com/522079/90506845-e8420580-e122-11ea-82ca-31087fc8486c.png"
                                            alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default Navbar
