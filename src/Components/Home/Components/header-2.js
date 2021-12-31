import React from 'react'
import { IoMdChatboxes } from 'react-icons/io';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './style.css'

export default function HeaderTwo({setshowModal}) {
    return (<>
    <div id='extraone' className='flex sm:hidden justify-evenly  bg-white mx-2 my-2 h-12 rounded-lg  items-center'> 

       <div id="btn-3div" className='text-xs font-medium'><b>Status</b>: <span id="btn-3" style={{backgroundColor:'#54FFB4'}}  className='  text-xs font-medium py-1 rounded-xl px-3 '> IN PROGRESS</span></div>
    
       <div id='time' className='  text-gray-700  text-xs  font-medium' >
                <span>Start Time: 800 hrs</span><br />
                <span>End Time: 1000 hrs</span><br />
                <span>Buffer Time: 15 mi</span>
            </div>
            <div>
                <div id="btn-6" style={{backgroundColor:'#CFEAFF'}}  className='flex bg-green-200  px-2 py-0.5 text-xs font-medium rounded-xl '> <div id='head' className='font-light text-gray-700  text-center text-xs border-r-2 border-black px-4'>Head <br /> Count </div> 
                <span id='candidates' className='pl-3'>
                
                    <div className='text-xs text-gray-700 '>Candidates: (23 + 05)/40</div>
                    <div className='text-xs text-gray-700  '>Proctors: 10/12</div>

                </span>
                </div>
                
            </div>
    </div>
        <div className='flex justify-evenly  bg-white mx-2 my-2 h-16  lg:mx-2 lg:my-2 lg:h-20 2xl:mx-3 rounded-lg 2xl:my-3 2xl:h-32 items-center'>
{/* Candidate varification */}
            <div  id="btn-1" className='pointer text-white lg:text-sm font-medium 2xl:py-2 lg:py-2 lg:w-48 lg:px-2 w-40 py-2 px-1 text-xs 2xl:w-60  rounded-lg  2xl:px-2 flex justify-between'> <div onClick={()=>{setshowModal(true) }}> Candidate varification </div><div className='icon'> <BsFillPatchCheckFill fontSize="1.3em" /></div> </div>
{/* Proctor Group Chat */}
            <div  id="btn-2" className=' hover:bg-blue-300 text-white lg:text-sm font-medium 2xl:py-2 lg:py-2 2xl:w-60 lg:w-44 rounded-lg w-36 py-2 px-1 text-xs  2xl:px-6 lg:px-2 flex justify-between'><div> Proctor Group Chat</div> <div className='icon' > <IoMdChatboxes fontSize="1.5em" /></div></div>
{/* Status */}
            <div id="btn-3div" className='2xl:text-sm displayclass  lg:text-xs text-xs font-medium'><b>Status</b>: <span id="btn-3" style={{backgroundColor:'#54FFB4'}}  className=' 2xl:text-sm text-xs font-medium py-1 rounded-xl px-3 '> IN PROGRESS</span></div>

            <div id="btn-4"  className='  text-yellow-900 2xl:px-7  2xl:py-2 2xl:text-sm lg:px-5  lg:py-2 lg:text-xs px-6  py-2 text-xs font-medium rounded-lg'>Leave</div>

            <div id="btn-5"   className='text-blue-400 2xl:py-2 rounded-lg 2xl:text-sm font-medium 2xl:px-7  lg:px-5  lg:py-2 lg:text-xs px-5  py-2 text-xs'> Break</div>

            <div id='time' className='2xl:text-sm  text-gray-700  text-xs displayclass font-medium' >
                <span>Start Time: 800 hrs</span><br />
                <span>End Time: 1000 hrs</span><br />
                <span>Buffer Time: 15 mi</span>
            </div>
            <div>
                <div id="btn-6" style={{backgroundColor:'#CFEAFF'}}  className='flex bg-green-200 displayclass 2xl:px-4 2xl:py-2 2xl:text-sm lg:px-2 lg:py-1 lg:text-xs px-2 py-1 text-xs font-medium rounded-xl '> <div id='head' className='font-medium text-gray-700  text-center text-lg border-r-2 border-black px-4'>Head <br /> Count </div> 
                <span id='candidates' className='pl-3'>
                
                    <div className='text-base text-gray-700 '>Candidates: (23 + 05)/40</div>
                    <div className='text-base text-gray-700  '>Proctors: 10/12</div>

                </span>
                </div>
                
            </div>
        </div>
        </>
    )
}
