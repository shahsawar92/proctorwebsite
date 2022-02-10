import React from 'react'
import {BsAward,BsFillCheckCircleFill} from 'react-icons/bs'
import { MdOutlineNotificationsActive} from 'react-icons/md'
import {GoRepoForcePush} from 'react-icons/go'
import {FaEye} from 'react-icons/fa'
import '../style.css'

import CardView1 from '../Cardviews/cardview1'
import CardView2 from '../Cardviews/cardview2'
import CardView3 from '../Cardviews/cardview3'
import { useState } from 'react';

export default function Card2() {
    const [selectedCard, setCard] = useState(1);
    return (
        <div >
            
            <div className="bg-white border-2  drop-shadow-2xl shadow-2xl px-5  my-6 pb-2 w-auto  h-auto items-center overflow-hidden md:max-w-sm rounded-lg  ring-offset-blue-600 mx-auto">
                {/* header */}
                <div className='flex w-60 justify-between py-3'>
                    <div className='font-bold text-sm'>STD074895</div>
                    <div className='flex '>

                        <div className=' text-gray-600 font-bold text-xs flex flex-col mr-4'> <div>Proctor eyes</div>
                            <div className='text-black flex flex-row self-center'>
                                <FaEye size={16} color='blue' /> &nbsp;{' x '}&nbsp;
                                <div className='font-light ' style={{ fontSize: 0.2 - 'rem' }}>  2 </div>
                            </div>
                        </div>

                        <div className='text-gray-600 font-bold text-xs flex flex-col'>
                            <div> Verified</div>
                            <div className='self-center text-green-500'><BsFillCheckCircleFill color='green' /> </div>
                        </div>
                    </div>
                </div>
                {/* camera-inputs */}

                {selectedCard === 1 ? <CardView1 /> : null}
                {selectedCard === 3 ? <CardView2 /> : null}
                {selectedCard === 2 ? <CardView3 /> : null}

                {/* footer */}
                
                <div className="  py-3  mt-4 flex justify-between items-center text-gray-700 font-bold text-xs flex-wrap border-t">
                    <div className='bg-blue-200 py-2 px-3 rounded-lg' onClick={() => {
                        setCard(prev => (prev + 1) % 3 + 1)
                    }}><BsAward /></div>
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
