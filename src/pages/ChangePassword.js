import React, { Fragment, useState } from 'react'

const ChangePassword = () =>{
    const [pass, setPass] = useState('');
    const [confPass, setConfPass] = useState('');

    return (
        <Fragment>
            <div className="flex flex-row justify-center text-center items-center">
                <div className="w-1/3 p-3 ">
                    <a href="" className="float-right mr-5">
                        <img
                            src="https://randomuser.me/api/portraits/women/57.jpg"
                            width={50}
                            alt=""
                            className="rounded-full"
                        />
                    </a>
                </div>
                <div>
                    <h1 className="text-xl flex justify-center text-center items-center">gigo6969</h1>
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Password
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input type="text" className="border p-1 px-3 w-[95%] bg-gray-300" placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    
                </div>
            </div>

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Confirm Password
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input type="text" className="border p-1 px-3 w-[95%] bg-gray-300" placeholder='Confirm password' value={confPass} onChange={(e)=>setConfPass(e.target.value)}/>
                </div>
            </div>

            

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    
                </div>
                <div className="w-2/3 pr-10">
                    <button className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm disabled:opacity-50" type='submit'>
                        Change Password
                    </button>
                    
                </div>
            </div>
            

        </Fragment>
    )
}

export default ChangePassword