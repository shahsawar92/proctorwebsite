import React from 'react'
import { BsAward, BsFillCheckCircleFill } from 'react-icons/bs'
import { MdCameraswitch, MdOutlineNotificationsActive } from 'react-icons/md'
import { GoRepoForcePush } from 'react-icons/go'
import { FaEye } from 'react-icons/fa'
import '../style.css'
import book from './images/book.png'
import profile from './images/profile.png'
import cameraicon from '../../../icons/cameraicon.ico'
import { useState } from 'react';
const viewPositions = [profile, book];

export default function CardView1({setshowModalProctor}) {
    const [positions, setPosition] = useState([profile, book]);

return (
    <div className="relative flex flex-col">
        <img onClick={()=>{setshowModalProctor(true)}} className='h-28 w-full self-center ' src={positions[0]} alt="profile" />
        <img onClick={()=>{setshowModalProctor(true)}} className='h-28 w-full  self-center' src={positions[1]} alt="books" />
        <img className='place-self-end -mt-10 pr-2 w-10 h-7 text-green-900 ' src={cameraicon} alt='camera' onClick={() => {
            if (positions[0].includes("profile")) {
                setPosition([book, profile]);
            } else {
                setPosition([profile, book]);
            }
        }}></img>
    </div>
)
}

