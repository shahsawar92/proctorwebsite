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

export default function CardView3({setshowModalProctor}) {
    const [positions, setPosition] = useState([profile, book]);

    return (
        <div className="relative flex flex-col">
            <div className="flex flex-row">
                <div className="relative flex flex-col">
                    <div>
                        <img  onClick={()=>{setshowModalProctor(true)}}className="w-28 h-full self-center " src={positions[0]} alt="profile" style={{ width: '400px' }} />
                    </div>

                    <div className="absolute bottom-2 right-5">
                        <img  className="w-28 h-full  self-center" src={positions[1]} alt="books" />
                    </div>
                    <img onClick={()=>{setshowModalProctor(true)}}className='place-self-end  -mt-10 pr-2 w-10 h-7 text-green-900 change-position-btn' src={cameraicon} alt='camera' style={{ zIndex: '1' }} onClick={() => {
                        if (positions[0].includes("profile")) {
                            setPosition([book, profile]);
                        } else {
                            setPosition([profile, book]);
                        }
                    }}></img>
                </div>
            </div>
        </div>
    )
}
