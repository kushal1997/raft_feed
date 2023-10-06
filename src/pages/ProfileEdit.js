import React, { Fragment, useState } from 'react'

const ProfileEdit = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <Fragment>
            <div className="flex flex-row">
                <div className="w-1/3 p-3">
                    <a href="" className="float-right mr-5">
                        <img
                            src="https://randomuser.me/api/portraits/women/57.jpg"
                            alt=""
                            className="rounded-full"
                        />
                    </a>
                </div>
                <div>
                    <h1 className="text-2xl">gigo6969</h1>
                    <a href="" className="text-sm text-sky-500 font-bold">
                        Change Profile Photo
                    </a>
                </div>
            </div>
            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        Name
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input type="text" className="border p-1 px-3 w-full" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <p className="text-gray-400 text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsum molestias quos recusandae rerum ad fugit beatae cupiditate! Provident, accusamus!{" "}
                    </p>
                </div>
            </div>

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                        User Name
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input type="text" className="border p-1 px-3 w-full" placeholder='User Name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
            </div>

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                       Email ID
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input type="email" className="border p-1 px-3 w-full" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    
                </div>
            </div>

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                       Phone Number
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input type="number" className="border p-1 px-3 w-full" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    
                </div>
            </div>

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                       Website
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <input type="text" className="border p-1 px-3 w-full" placeholder='Website Name' value={website} onChange={(e)=>setWebsite(e.target.value)}/>
                    
                </div>
            </div>

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    <label className="m-0 p-0 align-baseline font-bold flex align-center">
                       Bio
                    </label>
                </div>
                <div className="w-2/3 pr-10">
                    <textarea type="text" rows={3} className="border p-1 px-3 w-full" placeholder='About yourself' value={bio} onChange={(e)=>setBio(e.target.value)}/>
                    
                </div>
            </div>

            <div className="flex flex-row mt-5 items-center">
                <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
                    
                </div>
                <div className="w-2/3 pr-10">
                    <button className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm disabled:opacity-50" type='submit'>
                        Submit
                    </button>
                    
                </div>
            </div>
            

        </Fragment>
    )
}

export default ProfileEdit