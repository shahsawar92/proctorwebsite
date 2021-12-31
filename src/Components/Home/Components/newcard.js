import React from 'react'
import {BsAward,BsFillCheckCircleFill} from 'react-icons/bs'
import {MdCameraswitch, MdOutlineNotificationsActive} from 'react-icons/md'
import {GoRepoForcePush} from 'react-icons/go'
import {FaEye} from 'react-icons/fa'

import '../style.css'
import book from '../../../images/book.png'
import profile from '../../../images/profile.png'

export default function Card2() {
    return (
        <div>
    <div className="bg-white border-2  drop-shadow-2xl shadow-2xl px-5  blurclass shadow-pink-600 my-6 pb-2 w-auto justify-center h-auto items-center overflow-hidden md:max-w-sm rounded-lg  ring-offset-blue-600 mx-auto">
        {/* header */}

                <div className='flex w-60 justify-between py-2'>
                    <div className='font-bold text-sm'>STD074895</div>
                    <div className='flex '>

                        <div className=' text-gray-600 font-bold text-xs flex flex-col mr-4'> <div>Proctor eyes</div>
                         <div className='text-black flex flex-row self-center'> 
                         <FaEye size={16} color='blue'  /> &nbsp;{' x '}&nbsp;
                         <div className='font-light ' style={{fontSize:0.2-'rem'}}>  2 </div>
                         </div> 
                        </div>

                        <div className='text-gray-600 font-bold text-xs flex flex-col'> 
                            <div> Varified</div>
                            <div className='self-center text-green-500'><BsFillCheckCircleFill color='green' /> </div>
                         </div>
                    </div>
                </div>
        {/* images */}
                <div className="relative flex flex-col">
                    <img  className='h-24 w-full self-center ' src={profile} alt="profile" />
                    <img className='h-24 w-full  self-center' src={book} alt="books" />
                    <div className='place-self-end py-2 -mt-8 pr-2 text-green-900 '><MdCameraswitch /></div>
                </div>
  
     
        {/* footer */}
      
      <div className="  pt-1  flex justify-between items-center text-gray-700 font-bold text-xs flex-wrap border-t">
        
                    <div className='bg-blue-200 py-2 px-3 rounded-lg'><BsAward/></div>
                    <div>Ends in: <br /> 1:14 hrs</div>
                    <div>Type1: 02 <br /> Type2: 02</div>
                    <div className="flex">
                    <div className='bg-pink-200 py-2 px-2 rounded-lg'><MdOutlineNotificationsActive /></div>
                    <div className='bg-gray-400 py-2 px-2 ml-1 rounded-lg'><GoRepoForcePush /></div>
                    </div>
        
      </div>
    </div>
        </div>
    )
}
