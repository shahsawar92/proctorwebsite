import React from "react";
import './style.css';

export default function Index({setshowModal}) {
  
  return (
    <>
        <>
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
                  <button className="rounded closebtn px-2 text-red-500"
                    onClick={() => setshowModal(false)}
                  >
                      × 
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex px-5 ">
               
                
                <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-2   flex flex-col ">
                     <h1 className="2xl:font-bold md:font-medium text-gray-700 text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF bg-HeadBtn  text-xs rounded-lg " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1  btnS rounded-lg text-xs ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF   rounded-lg text-xs " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-xs" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5   ml-1 btnS rounded-lg text-xs ">Pasue</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between ml-12  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg  text-xs" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs">Pasue</div>
                         </div>
                     </div>
                     
                  </div>

                  {/* 2 */}
                  <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-3  flex flex-col pl-3 pr-6">
                     <h1 className="2xl:font-bold md:font-medium text-gray-700 text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 bg-HeadBtn btnF text-xs rounded-lg " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                             
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs  text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-xs " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-xs" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg  text-xs" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     
                  </div>
                  {/* 3 */}
                  <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-4 flex flex-col pl-3 pr-6">
                     <h1 className="2xl:font-bold md:font-medium  text-gray-700 text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 bg-HeadBtn btnF text-xs rounded-lg " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                             
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-xs " >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg text-xs" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between   ">
                             <div className="2xl:px-3 px-2 py-0.5 btnF  rounded-lg  text-xs" >Take</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     
                  </div>
                  {/* 4 */}
                  <div className="border p-3 border-BorderClr w-full  overflow-x-hidden overflow-y-scroll myscroll rounded mx-2   flex flex-col ">
                     <h1 className="2xl:font-bold md:font-medium  text-gray-700 text-base self-center 2xl:mb-9 md:mb-2">New</h1>
                     <div className="flex justify-between items-center mt-1  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium ">ST23942</div>
                         <div className="flex  justify-between   ">
                             
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                             
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                            
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between  ">
                            
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs ">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
                         </div>
                     </div>
                     <div className="flex justify-between items-center mt-2  ">
                         <div className="2xl:text-sm md:text-xs text-gray-700 2xl:font-bold mr-4 md:font-medium">ST23942</div>
                         <div className="flex  justify-between   ">
                           
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 btnS rounded-lg text-xs">Pasue</div>
                             <div className="2xl:px-3 px-2 py-0.5 ml-1 Pbtn rounded-lg text-xs ">History</div>
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