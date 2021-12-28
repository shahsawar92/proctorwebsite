import React from 'react'
import { IoMdChatboxes } from 'react-icons/io';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './style.css'

export default function HeaderTwo({setshowModal}) {
    return (
        <div className='flex justify-evenly  bg-white mx-2 my-2 h-16  lg:mx-2 lg:my-2 lg:h-20 2xl:mx-3 rounded-lg 2xl:my-3 2xl:h-32 items-center'>
{/* Candidate varification */}
            <div  id="btn-1" className='pointer text-white lg:text-sm font-medium 2xl:py-2 lg:py-1 lg:w-44 lg:px-22
             w-36 py-1 px-1 text-xs 2xl:w-60  rounded-lg  2xl:px-6 flex justify-between'> <div onClick={()=>{setshowModal(true) }}> Candidate varification </div><div className=''> <BsFillPatchCheckFill fontSize="1.3em" /></div> </div>
{/* Proctor Group Chat */}
            <div  id="btn-2" className=' hover:bg-blue-300 text-white lg:text-sm font-medium 2xl:py-2 lg:py-1 2xl:w-60 lg:w-44 rounded-lg w-36 py-1 px-1 text-xs  2xl:px-6 lg:px-2 flex justify-between'><div> Proctor Group Chat</div> <div > <IoMdChatboxes fontSize="1.5em" /></div></div>
{/* Status */}
            <div id="btn-3" className='2xl:text-sm displayclass  lg:text-xs text-xs font-medium'><b>Status</b>: <span  style={{backgroundColor:'#54FFB4'}}  className='text-green-600 hover:bg-green-100 2xl:text-sm text-xs font-medium py-0.5 rounded-xl px-3 '> IN PROGRESS</span></div>


            <div id="btn-4"  className=' bg-red-200 text-yellow-700 2xl:px-7  2xl:py-2 2xl:text-sm lg:px-5  lg:py-1 lg:text-xs px-6  py-1 text-xs font-medium rounded-lg'>Leave</div>

            <div id="btn-5"   className='text-blue-400 2xl:py-2 rounded-lg 2xl:text-sm font-medium 2xl:px-7  lg:px-5  lg:py-1 lg:text-xs px-5  py-1 text-xs'> Break</div>

            <div className='2xl:text-sm text-xs displayclass font-medium' >
                <span>Start Time: 800 hrs</span><br />
                <span>End Time: 1000 hrs</span><br />
                <span>Buffer Time: 15 mi</span>
            </div>
            <div>
                <div id="btn-6" style={{backgroundColor:'#CFEAFF'}}  className='flex bg-green-200 displayclass 2xl:px-4 2xl:py-2 2xl:text-sm lg:px-2 lg:py-1 lg:text-xs px-2 py-1 text-xs font-medium rounded-xl'> <div className='font-bold text-lg border-r-2 border-black pr-5'>Head <br /> Count </div> 
                <span className='pl-3'>
                
                    <div>Candidates: (23 + 05)/40</div>
                    <div>Proctors: 10/12</div>

                </span>
                </div>
                
            </div>
        </div>
    )
}