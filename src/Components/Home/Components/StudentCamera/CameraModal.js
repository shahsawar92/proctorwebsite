import React from "react";
import '../style.css';
import ProfileImg from "../profileImg";
import StudentImg from "./StudentImg";
import code from '../../../../images/code.jpg'
import awardicon from '../../../../images/awardicon.png'
import cameraicon from '../../../../images/cameraicon.ico'
import camera from '../../../../images/camera.svg'

export default function ProctorModal({setshowCameraModal}) {
  
  return (
    <>
        <>
          <div 
            className="grid justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-x-0 inset-y-0 z-50 outline-none focus:outline-none">

            <div className="relative ">
              {/*content*/}
              <div className="border-0 rounded-lg  shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between 2xl:p-5 px-3 py-2  rounded-t">

                  <h3 className="  ">
                        Student Camera      
                    </h3>

                  <button className="rounded closebtn px-2 text-red-500"
                    onClick={() => setshowCameraModal(false)}
                  >
                      × 
                  </button>
                </div>
            
                {/*body*/}
                                 <div className="relative sizeClass bg-gray-400">   
                                 <img className='w-full h-full' src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                                  <img className='h-24 w-36 relative bottom-24 rounded-l-lg float-right' src={code} alt="code" /> 
                                   <img className='h-7 w-7 -right-32 -top-10 relative bottom-32 rounded-l-lg float-right' src={cameraicon} alt="" />
                                   </div>
                                   <div className="w-10 h-10 p-3 ml-2 rounded  absolute  bottom-2 bg-white ">
                                   <img src={awardicon} alt='iconaward' />
                                   </div>
                {/*footer*/}
               
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
     
    </>
  );
}