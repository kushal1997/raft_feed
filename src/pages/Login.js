import React, { Fragment, useState } from 'react'
import mobile from "../assets/images/mobile.png"
import logo from "../assets/images/logo.png"
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
                            <form action="" className="mt-8 w-64 flex flex-col ">
                                <input
                                autoFocus
                                    type="text"
                                    className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-100 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                    value={email}
                                    placeholder='"Phone number,username or email'

                                />

                                <input
                                    type="text"
                                    className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-100 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                                    value={password}
                                    placeholder='"enter password'

                                />
                                <button className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                                    Log In
                                </button>
                            </form>
                            <div className="text-sm text-center text-red-500 absolute bottom-20 px-8">
                                Incorrect Credential
                            </div>

                        </div>
                        <div className="bg-white border border-gray-300 text-centerw-80 py-4">
                            <span className="text-sm">Dont have an account ?</span>
                            <a className="text-blue-500 text-sm font-semibold ml-1 cursor-pointer">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login