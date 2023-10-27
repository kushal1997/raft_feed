import React, { Fragment } from 'react'
import logo from "../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { useUserAuth } from '../context/UserAuth'
import { ToastContainer, toast } from 'react-toastify'
export const classNames=(...classes)=>{
    return classes.filter(Boolean).join(' ');
}
const Navbar = () => {
    const {logOut}=useUserAuth();
    const navigate =useNavigate();
    const handleLogout = async () => {
        try {
            const storedToken = localStorage.getItem('authToken');
            
            if (storedToken) {
                localStorage.removeItem('authToken');
            }
    
            await logOut();
            navigate('/');
            toast.success("Logged Out Successfully");
        } catch (err) {
            console.log(err.message);
        }
    }
    
    return (
        <Fragment>
        <ToastContainer/>
            <nav className="sticky top-0 w-full border border-b-1 z-50 bg-white">
                <div className="container max-w-5xl">
                    <div className="flex flex-row py-1 items-center">
                        <div className=" basis-1/2 md:basis-1/3 flex flex-row justify-center items-center">
                            <Link to='/'>
                                <img width={50} height={50} src={logo} alt="logo" />
                                <p>Raft Labs</p>
                            </Link>
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
                                    <Link to='/'>
                                        <FontAwesomeIcon icon={'house'} />
                                    </Link>
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
                                    <Menu as="div" className="relative inline-block text-left">
                                        <Menu.Button className='inline-block w-8 h-8 justify-center bg-white text-sm font-medium text-gray-700'>
                                            <img
                                                className=' rounded-full w-6 w-ful'
                                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                                alt="" />
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >

                                            <Menu.Items className='absolute origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link 
                                                        to='/gigo6969'
                                                        className={
                                                            `${
                                                                classNames(active
                                                                ? 'bg-gray-100 text-gray-900 '
                                                                : 'text-gray-700'
                                                                ,'block px-4 py-2 text-sm text-gray-700')
                                                            }`
                                                        }
                                                        >
                                                            <FontAwesomeIcon icon={"user"} className='mr-2' />Profile
                                                        </Link>
                                                    )}

                                                </Menu.Item>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link 
                                                        to='/gigo6969'
                                                        className={
                                                            `${
                                                                classNames(active
                                                                ? 'bg-gray-100 text-gray-900 '
                                                                : 'text-gray-700'
                                                                ,'block px-4 py-2 text-sm text-gray-700')
                                                            }`
                                                        }
                                                        >
                                                            <FontAwesomeIcon icon={'bookmark'} className='mr-2' />Save
                                                        </Link>
                                                    )}

                                                </Menu.Item>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link 
                                                        to='/gigo6969'
                                                        className={
                                                            `${
                                                                classNames(active
                                                                ? 'bg-gray-100 text-gray-900 '
                                                                : 'text-gray-700'
                                                                ,'block px-4 py-2 text-sm text-gray-700')
                                                            }`
                                                        }
                                                        >
                                                            <FontAwesomeIcon icon={'gear'} className='mr-2' />Settings
                                                        </Link>
                                                    )}

                                                </Menu.Item>

                                                <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <p
                                                        onClick={handleLogout}
                                                        className={
                                                            `${
                                                                classNames(active
                                                                ? 'bg-gray-100 text-gray-900 '
                                                                : 'text-gray-700'
                                                                ,'block px-4 py-2 text-sm text-gray-700 cursor-pointer')
                                                            }`
                                                        }
                                                        >Logout
                                                        </p>
                                                    )}

                                                </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

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
