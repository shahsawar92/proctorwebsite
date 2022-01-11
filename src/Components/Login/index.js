import React from 'react'
import image from '../../images/loginimage.png';
import {Link } from 'react-router-dom'
import './style.css'


export default function LogIn() {
    return (
        <div>
            <div className='sm:grid sm:grid-cols-2  place-content-center justify-center h-screen sm:gap-4 sm:mt-0 mt-10  px-5 sm:px-20'>
                
            <form className=" md:w-10/12 w-full self-center sm:self-start md:self-center">
            <div className="md:flex md:items-center md:justify-end mb-6">
                        
                        <div className="md:w-2/3 ">
                        <h1 className="block text-black font-extrabold text-4xl   mb-1 md:mb-0 pr-4">
                            Welcome To Proctoring!
                        </h1>
                        <h2 className="w-full font-bold text-gray-700 py-2 px-4">
                            Login to continue

                        </h2>
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:justify-end mb-6">  
                        <div className="md:w-2/3">
                        <label className="block text-black font-bold  mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Email
                        </label>
                        <input className="bg-blue-100 appearance-none border-2 border-blue-100 rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Email Address' />
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:justify-end mb-6">
                        
                        <div className="md:w-2/3 ">
                        <label className="block text-black font-bold  mb-1 md:mb-0 pr-4" for="inline-password">
                            Password
                        </label>
                        <input className="bg-blue-100 appearance-none border-blue-100 rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="8+ characters" />
                        </div>
                    </div>
                    
                    <div className="md:flex md:items-center md:justify-end">
                      
                        <div className="md:w-2/3 self-end ">
                        <Link  to={"/home"} className="shadow text-center  w-full bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-xl" type="button">
                            Sign In
                        </Link>
                        <h2 className="w-full font-bold text-gray-700 py-2 px-4">
                            Don't have account  <Link to={"/signin"} className='text-blue-500 active:blue:200 hover:to-blue-400'> Sign Up</Link>

                        </h2>
                        </div>
                    </div>
</form>
            
            <div className='mt-20 sm:mt-0'>
                <img className='w-full' src={image} alt="react-pic" />
            </div>

            </div>
            
        </div>
    )
}
