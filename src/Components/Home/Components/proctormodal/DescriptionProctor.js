import React from 'react';
import '../style.css'
import './style.css'
import pause from "../../../../images/pause.svg"
export default function DiscriptionProctor({setshowCameraModal}) {
  return <div className='h-60'>
        <div className='bg-white h-20 my-2 grid grid-cols-1 border rounded-lg p-2'>
            <div className='grid grid-cols-12 disc-t'>
                <div className='col-span-2 disc-t1 font-bold'>Type 1 02</div>
                <div className='col-span-2 disc-t1 font-bold'>Type 1 02</div>
                <div className='col-span-2'>Start: 8:30 </div>
                <div className='col-span-2'>End: 10.30 </div>
                <div className='col-span-4'>Time Remaining: 01:11 </div> 
            </div>
            <div className='grid grid-cols-4 disc-t mt-4'>
           
            <button id='reject'  className=" popupclickbtn   disc text-white w-12 h-8  rounded">
            Warn!
            </button>
            <button id='onhold' className=" bg-blue-500   w-12 h-8  disc text-white rounded" >
               <div className='flex justify-center' > <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </button>
            <div className='w-12 h-8'>Verified
                <div className='ml-1 '><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg></div>
            </div>
             <button onClick={()=>{setshowCameraModal(true)}} id='accept' className=" bg-blue-500  disc text-white  w-12 h-8   rounded">
                 Take
            </button>
            </div>

        </div>

        <div className='disc bg-e h-48 rounded-xl'>
          <div className="relative flex items-center justify-between  rounded-t-xl px-3 py-1 border-b border-gray-200 chathead  ">
              <div className='text-xs'>Action History</div>
            </div>
                {/* table  */}

                <table>
  <tr>
    <td>&nbsp;</td>
    <td>Type</td>
    <td>Time</td>
    <td>Comment</td>
    <td>Review</td>
  </tr>
  <tr>
    <td>1.</td>
    <td>audio</td>
    <td>8.53 hrs</td>
    <td>Walking</td>
    <td>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
        </svg>
    </td>
  </tr>
  <tr>
    <td>2.</td>
    <td>video</td>
    <td>8.53 hrs</td>
    <td>Camera off</td>
    <td>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
        </svg>
    </td>
  </tr>
  

</table>
        </div>
        </div>;
}
