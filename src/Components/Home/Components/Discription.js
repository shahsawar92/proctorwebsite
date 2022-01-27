import React from 'react';
import './style.css'
export default function Discription() {
  return <div className='disc  h-72 bg-e  rounded-xl '>
          <div className="relative flex items-center justify-between  rounded-t-xl px-2 py-1 border-b border-gray-200 chathead  ">
              <div className='text-xs'>System Provided</div>
            </div>
            {/* body */}
            <div className='px-2 pb-3'>
          <div className="grid grid-cols-6 gap-4 ">
            <div className="col-start-1 col-span-2 h-15 w-20 mt-2 rounded bg-gray-600 ">
            <img className='rounded-t-lg h-full ' src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />

            </div>
            <div className="col-start-3 col-span-4 mt-4 " >
            <div className='grid grid-cols-6 '>
              <span className='col-start-1 col-span-2'>NIC:</span>
              <span className='text-gray-400 col-span-2'>1234</span>
              <span className='col-start-1 col-span-2'>Batch No:</span>
              <span className='text-gray-400 col-span-2'>1234</span>
              <span className='col-start-1 col-span-2'>Group No:</span>
              <span className='text-gray-400 col-span-2'>1234</span>
            </div>
              
              
            </div>
          </div>
          <div className="grid grid-cols-10 gap-5 mt-4">
          <div className="col-start-1 col-end-11 text-xs font-bold -mb-2 ">Check List</div>
          <div className='col-start-1 col-end-7  '>
         <div className='grid grid-cols-3 gap-2'>
      
         <label className=" col-start-1 col-span-2  desc-text">ID Match </label>
          <input className='-mb-1' type="checkbox" />  

          <label className=" col-start-1 col-span-2  desc-text">Face Recognition </label>
         <input className='-mb-1' type="checkbox" />   
          <label className=" col-start-1 col-span-2 desc-text">Mic </label>
         <input className='-mb-1' type="checkbox" />   
          <label className=" col-start-1 col-span-2  desc-text">Face Camera Lighting </label>
         <input className='-mb-1' type="checkbox" />   
          <label className=" col-start-1 col-span-2  desc-text">Face Camera Position </label>
         <input className='-mb-1' type="checkbox" />   
          <label className=" col-start-1 col-span-2  desc-text">Desk Camera Lighting </label>
         <input className='-mb-1' type="checkbox" />   
          <label className=" col-start-1 col-span-2  desc-text">Desk Camera Position </label>
         <input className='-mb-1' type="checkbox" />   


      

       {/*   <span className='col-start-1 col-span-2 desc-text'>ID Match</span>
              <span className=' col-span-1  p-0.5 text-center w-5 h-3 bg-white'>x</span>
              <span className='col-start-1 col-span-2 desc-text'>Face Recognition</span>
              <span className=' col-span-1  p-0.5 text-center w-5 h-3 bg-white'>x</span>
              <span className='col-start-1 col-span-2 desc-text'>Mic </span>
              <span className=' col-span-1  p-0.5 text-center w-5 h-3 bg-white'>x</span>
              <span className='col-start-1 col-span-2 desc-text'>Face Camera Lighting</span>
              <span className=' col-span-1  p-0.5 text-center w-5 h-3 bg-white'>x</span>
              <span className='col-start-1 col-span-2 desc-text'>Face Camera Position</span>
              <span className=' col-span-1  p-0.5 text-center w-5 h-3 bg-white'>x</span>
              <span className='col-start-1 col-span-2 desc-text'>Desk Camera Lighting</span>
              <span className=' col-span-1  p-0.5 text-center w-5 h-3 bg-white'>x</span>
              <span className='col-start-1 col-span-2 desc-text'>Desk CAmera Positioning</span>
              <span className=' col-span-1  p-0.5 text-center w-5 h-3 bg-white'>x</span> */}
              </div>
          

          </div>
          {/* comment */}
          <div className="col-start-7 col-end-11 " >
            
            <div className=''>
              <div className=' font-bold'>Snap Taken</div>
              <div className='text-gray-400'>
              <div>1. photo</div>
              <div>1. photo</div>
              </div>
            </div>
            <div className='mt-5'>
              <div className='font-bold text-xs'>Comment</div>
              <div className='w-20 h-14 rounded-sm font-extralight text-gray-400 p-1 bg-white'>
                mic is off
              </div>
            </div>
              
           
          </div>
          </div>
          </div>  
        </div>;
}
