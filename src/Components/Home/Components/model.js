import React from "react";
import './style.css';

export default function Index({setshowModal}) {
  
  return (
    <>
        <>
        <div className="newdev">hello</div>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto 2xl:my-6 md:my-2 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between 2xl:p-5 px-5 py-2  rounded-t">

                  <h3 className=" ">
                  Candidate Varification
                  </h3>
                  <button className="rounded  px-2 text-red-500"
                    onClick={() => setshowModal(false)}
                  >
                      × 
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex ">
               
                
                  <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-4 flex flex-col">
                     <h1 className="2xl:font-bold md:font-medium  text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  text-sm rounded-lg " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-SBtn rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-sm " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF   rounded-lg text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between ml-12  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg  text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm">Pasue</div>
                         </div>
                     </div>
                     
                  </div>

                  {/* 2 */}
                  <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-4 flex flex-col">
                     <h1 className="2xl:font-bold md:font-medium  text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 bg-HeadBtn btnF text-sm rounded-lg " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-SBtn rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-sm " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between ml-12  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg  text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm">Pasue</div>
                         </div>
                     </div>
                     
                  </div>
                  <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-4 flex flex-col">
                     <h1 className="2xl:font-bold md:font-medium  text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 bg-HeadBtn btnF text-sm rounded-lg " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-SBtn rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-sm " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between ml-12  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg  text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm">Pasue</div>
                         </div>
                     </div>
                     
                  </div>
                  <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-4 flex flex-col">
                     <h1 className="2xl:font-bold md:font-medium  text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF bg-HeadBtn  text-sm rounded-lg " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-SBtn rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF   rounded-lg text-sm " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs 2xl:font-bold md:font-medium">ST23942</div>
                         <div className="flex  justify-between ml-12  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg  text-sm" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 bg-green-200 rounded-lg text-sm">Pasue</div>
                         </div>
                     </div>
                     
                  </div>
                 
                  
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end  border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowModal(false)}
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