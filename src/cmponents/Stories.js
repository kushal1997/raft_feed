import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'

const Stories = () => {
    return (
        <Fragment>
            <div className="relative mb-5 bg-white">
                <div className="absolute left-3 top-1/2">
                    <a href="" className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 shadow-md cursor-pointer">
                        <FontAwesomeIcon icon={'chevron-left'} />
                    </a>
                </div>
                <div className="absolute right-3 top-1/2">
                    <a href="" className="bg-white text-gray-400 flex items-center justify-center rounded-full text-sm w-6 h-6 shadow-md cursor-pointer">
                        <FontAwesomeIcon icon={'chevron-right'} />
                    </a>
                </div>
                <ul className="border rounded-lg border-slate-200 p-4 flex space-x-4 overflow-x-auto">
                    <li className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full ">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                <img
                                    src="https://randomuser.me/api/portraits/women/26.jpg"
                                    alt=""
                                    className="rounded-full w-16 "

                                />
                            </a>
                        </div>
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                User2023
                            </div>
                        </a>
                    </li>
                    <li className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full ">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                <img
                                    src="https://randomuser.me/api/portraits/women/26.jpg"
                                    alt=""
                                    className="rounded-full w-16 "

                                />
                            </a>
                        </div>
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                User2023
                            </div>
                        </a>
                    </li>
                    <li className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full ">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                <img
                                    src="https://randomuser.me/api/portraits/women/26.jpg"
                                    alt=""
                                    className="rounded-full w-16 "

                                />
                            </a>
                        </div>
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                User2023
                            </div>
                        </a>
                    </li>
                    <li className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full ">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                <img
                                    src="https://randomuser.me/api/portraits/women/26.jpg"
                                    alt=""
                                    className="rounded-full w-16 "

                                />
                            </a>
                        </div>
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                User2023
                            </div>
                        </a>
                    </li>
                    <li className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full ">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                <img
                                    src="https://randomuser.me/api/portraits/women/26.jpg"
                                    alt=""
                                    className="rounded-full w-16 "

                                />
                            </a>
                        </div>
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                User2023
                            </div>
                        </a>
                    </li>
                    <li className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full ">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                <img
                                    src="https://randomuser.me/api/portraits/women/26.jpg"
                                    alt=""
                                    className="rounded-full w-16 "

                                />
                            </a>
                        </div>
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                User2023
                            </div>
                        </a>
                    </li>
                    <li className="flex flex-col items-center space-y-1">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full ">
                            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
                                <img
                                    src="https://randomuser.me/api/portraits/women/26.jpg"
                                    alt=""
                                    className="rounded-full w-16 "

                                />
                            </a>
                        </div>
                        <a className="cursor-pointer">
                            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                                User2023
                            </div>
                        </a>
                    </li>
                </ul>

            </div>
        </Fragment>
    )
}

export default Stories