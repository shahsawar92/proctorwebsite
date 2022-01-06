import React from 'react'
import { IoMdChatboxes } from 'react-icons/io';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './style.css'

export default function HeaderTwo({setshowModal}) {
    return (<>
    
    <div class="grid lg:grid-cols-5 grid-cols-1 gap-1 bg-white mx-2 my-2  pb-3 pt-5 h-auto rounded-lg px-2">
    <div className='grid grid-cols-2 gap-1   '>

          <div  id="btn-1" className='pointer text-white flex rounded-lg  px-2 self-center  py-3'> 
          <div onClick={()=>{setshowModal(true) }}> Candidate varification </div>
          <div className='icon'> <BsFillPatchCheckFill fontSize="1.3em" /></div> 
          </div>

            <div  id="btn-2" className='pointer text-white flex rounded-lg  px-3  self-center justify-between py-3'><div> Proctor Group Chat</div>
            <div className='icon' > <IoMdChatboxes fontSize="1.5em" /></div>
            </div>
           </div>

           <div className='grid grid-cols-4 gap-2 pl-3 lg:pl-0 lg:col-span-2' >
      
            <div id="btn-3div" className='col-start-1 col-end-3 font-medium self-center'>
                <b>Status</b>: 
                <span id="btn-3" style={{backgroundColor:'#54FFB4'}}  className='text-xs font-medium py-1 rounded-lg px-3 ml-2 '> INPROGRESS</span>
                </div>
        
            <div id="btn-4" className='text-yellow-900 2xl:py-2 rounded-lg 2xl:text-sm font-medium 2xl:px-7  lg:px-5  lg:py-3 lg:text-xs px-5  py-2 text-xs  text-center self-center'>Leave</div>

           <div id="btn-5"   className='text-blue-400 2xl:py-2 rounded-lg 2xl:text-sm font-medium 2xl:px-7  lg:px-5  lg:ml-0 lg:py-3 lg:text-xs px-5  py-2 text-xs text-center self-center'> Break</div>
          
          </div>
          
          <div id='time' className='2xl:text-sm lg:pt-0 lg:text-center text-gray-700 pl-3 lg:pl-0  text-xs displayclass font-medium' >
                 <span>Start Time: 800 hrs</span><br />
                 <span>End Time: 1000 hrs</span><br />
                 <span>Buffer Time: 15 mi</span>
             </div>

          
             <div className=' bg-white lg:px-5 '>
              <div className='flex  lg:place-content-center rounded-lg py-2  px-3    bg-green-200'> <div id='head' className='font-medium text-gray-700  text-center place-self-center border-r pr-3   border-gray-400 '>Head <br /> Count </div> 
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


// <div id='header2' className=' grid grid-flow-row grid-col-4  gap-4 justify-evenly bg-white mx-2 my-2 h-auto  lg:mx-2 lg:my-2 lg:h-20 2xl:mx-3 rounded-lg 2xl:my-3 2xl:h-32 items-center'>
// {/* Candidate varification */}
//             <div className=''>

//             <div  id="btn-1" className='  pointer text-white lg:text-sm font-medium 2xl:py-2 lg:py-2 lg:w-48 lg:px-2 w-32 py-2 px-2 text-xs 2xl:w-60 mt-4  rounded-lg  2xl:px-2 flex justify-between'> <div onClick={()=>{setshowModal(true) }}> Candidate varification </div><div className='icon'> <BsFillPatchCheckFill fontSize="1.3em" /></div> </div>
// {/* Proctor Group Chat */}
//             <div  id="btn-2" className=' hover:bg-blue-300 text-white lg:text-sm font-medium 2xl:py-2 lg:py-2 2xl:w-60 lg:w-44 rounded-lg w-32 py-2 px-1 mt-4 text-xs  2xl:px-6 lg:px-2 flex justify-between'><div> Proctor Group Chat</div> <div className='icon' > <IoMdChatboxes fontSize="1.5em" /></div></div>

//             </div>
//         <div className='flex  pt-4 lg:pt-0' >
//    {/* Status */}         
//             <div id="btn-3div" className='2xl:text-sm displayclass py-2 lg:text-xs text-xs font-medium px-4 md:px-2'><b>Status</b>: <span id="btn-3" style={{backgroundColor:'#54FFB4'}}  className=' 2xl:text-sm text-xs font-medium py-1 rounded-xl px-3 '> IN PROGRESS</span></div>


// {/* leave and break btns */}
            
//             <div id="btn-4"  className='  text-yellow-900 2xl:px-7 mx-5 md:mx-1 2xl:py-2 2xl:text-sm lg:px-5  lg:py-2 lg:text-xs px-6  py-2 text-xs font-medium rounded-lg'>Leave</div>

//             <div id="btn-5"   className='text-blue-400 2xl:py-2 rounded-lg 2xl:text-sm font-medium 2xl:px-7  lg:px-5  lg:py-2 lg:text-xs px-5  py-2 text-xs'> Break</div>
//             </div>

// {/* time */}<div className='p-5 lg:p-0'>
//             <div id='time' className='2xl:text-sm pt-4 lg:pt-0 text-gray-700  text-xs displayclass font-medium' >
//                 <span>Start Time: 800 hrs</span><br />
//                 <span>End Time: 1000 hrs</span><br />
//                 <span>Buffer Time: 15 mi</span>
//             </div>

//             {/* head count */}
            
//                 <div id="btn-6" style={{backgroundColor:'#CFEAFF'}}  className='flex bg-green-200 displayclass 2xl:px-4 2xl:py-2 2xl:text-sm lg:px-2 lg:py-1 lg:text-xs px-2 py-1 text-xs font-medium rounded-xl '> <div id='head' className='font-medium text-gray-700  text-center text-lg border-r-2 border-black px-4'>Head <br /> Count </div> 
//                 <span id='candidates' className='pl-3'>
                
//                     <div className='text-base text-gray-700 '>Candidates: (23 + 05)/40</div>
//                     <div className='text-base text-gray-700  '>Proctors: 10/12</div>

//                 </span>
//                 </div>
                
//             </div>
//         </div>