import React from 'react'
import {BsAward,BsFillCheckCircleFill} from 'react-icons/bs'
import { MdOutlineNotificationsActive} from 'react-icons/md'
import {GoRepoForcePush} from 'react-icons/go'
import {FaEye} from 'react-icons/fa'
import '../style.css'
import book from '../../../images/book.png'
import profile from '../../../images/profile.png'
import cameraicon from '../../../images/cameraicon.ico'

export default function Card2() {
    return (
    <div >
        <div className="bg-white border-2  drop-shadow-2xl shadow-2xl px-5  blurclass shadow-pink-600 my-6 pb-2 w-auto  h-auto items-center overflow-hidden md:max-w-sm rounded-lg  ring-offset-blue-600 mx-auto">
        {/* header */}
                <div className='flex w-60 justify-between py-3'>
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
        {/* camera-inputs */}
                <div className="relative flex flex-col">
                    <img  className='h-28 w-full self-center ' src={profile} alt="profile" />
                    <img className='h-28 w-full  self-center' src={book} alt="books" />
                    <img className='place-self-end  -mt-10 pr-2 w-10 h-10 text-green-900 ' src={cameraicon} alt='camera'></img>
                </div>
        {/* footer */}
                <div className="  py-3  flex justify-between items-center text-gray-700 font-bold text-xs flex-wrap border-t">
        
                    <div className='bg-blue-200 py-2 px-3 rounded-lg'><BsAward/></div>
                    <div>Ends in: <br /> 1:14 hrs</div>
                    <div>Type1: 02 <br /> Type2: 02</div>
                    <div className="flex">
                    <div className='bg-yellow-400 py-2 px-2 rounded-lg'><MdOutlineNotificationsActive /></div>
                    <div className='bg-gray-400 py-2 px-2 ml-1 rounded-lg'><GoRepoForcePush /></div>
                </div>
        
            </div>
        </div>

    </div>
    )
}
