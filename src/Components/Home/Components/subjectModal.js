import React from "react";
import './style.css';
import Chatbox from './Chat/chat.js'
import Discription from "./Discription";
import ProfileImg from "./profileImg";
import ChatProctor from "./Chat/chatProctor";

export default function SubjectModal({setshowModalEachChat }) {
  
  return (
    <>
        <>
          <div 
            className="grid justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-x-5 inset-y-0 z-50 outline-none focus:outline-none"
          >
            <div id="mainModal" className="relative w-auto mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-auto h-auto bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between 2xl:p-5 px-3 py-2  rounded-t">

                  <h3 className="  ">
                  Candidate spot- Verification
                  </h3>
                  <button className="rounded closebtn px-2 text-red-500"
                    onClick={() => setshowModalEachChat(false)}
                  >
                      × 
                  </button>
                </div>
                <div className='flex flex-row justify-between mx-5' >
                <div className='mb-5'>STD0745</div>
                <div className=' w-9/12 md:w-11/12 mt-3 mx-5 '><hr /> </div>
            </div>
                {/*body*/}
                <div className="relative px-5 grid grid-cols-1 lg:grid-cols-3 gap-8 ">   
                                 <div className="w-80  mb-4"><ProfileImg /></div>
                                 <div className="w-80 mb-4"><Discription /></div>
                                 <div className="w-80 mb-4 rounded-lg"> 
                                 <div className="grid grid-flow-row gap-5">

                                    <div><Chatbox /></div>
                                  
                                    <div><ChatProctor /></div>
                                  
                                </div>
                                 
                                  </div>
                                   </div>
                {/*footer*/}
                <div className="flex items-center justify-end  border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowModalEachChat(false)}
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
     
    </>
  );
}