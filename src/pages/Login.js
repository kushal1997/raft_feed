import React, { Fragment, useState } from 'react'

import mobile from "../assets/images/mobile.png"
import logo from "../assets/images/logo.png"
import { useUserAuth } from '../context/UserAuth';
import {  toast,ToastContainer  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { logIn } = useUserAuth();
    const navigate =useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await logIn(email,password);
            
            toast.success("Login Successfully");
            navigate('/gigo6969');
        }catch(error){
            console.log("Login Error", error);
            toast.error(error.message);

        }
    }

    return (
        <Fragment>
            <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
                <div className="flex flex-column">
                    <div className="hidden pr-10 md:block h-full">
                        <img src={mobile} width={300} />
                    </div>
                    <div>
                        <div className="bg-white border border-gray-300 w-80 pt-10 pb-60 flex items-center flex-col mb-3 relative">
                            <img src={logo} width={200} />
                            <form onSubmit={handleSubmit} className="mt-8 w-64 flex flex-col ">
                                <input
                                autoFocus
                                    type="text"
                                    className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-100 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder='"Phone number,username or email'

                                />

                                <input
                                    type="text"
                                    className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-100 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder='"enter password'

                                />
                                <button className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                                    Log In
                                </button>
                            </form>
                            <p></p>
                            <hr />
                            
                            <div className="text-sm text-center text-red-500 absolute bottom-20 px-8">
                                <ToastContainer/>
                            </div>

                        </div>
                        <div className="bg-white border border-gray-300 text-centerw-80 py-4">
                            <span className="text-sm">Dont have an account ?</span>
                            <Link to='/account/signup' className="text-blue-500 text-sm font-semibold ml-1 cursor-pointer">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login