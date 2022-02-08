import React from 'react';
import code from '../../../../images/code.jpg'
import awardicon from '../../../../images/awardicon.png'
import cameraicon from '../../../../images/cameraicon.ico'
import camera from '../../../../images/camera.svg'



export default function ProfileImg() {
  return <div className='  w-full h-72 rounded-xl '>

<div className='w-full bg-gray-500 h-3/4'>
<img className='h-6 w-6 absolute ' src={camera} alt="" />
<img className='rounded-t-lg h-full ' src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
<img className='h-24 w-36 relative bottom-24 rounded-l-lg right-0 left-44' src={code} alt="code" />
<img className='h-7 w-7 relative bottom-32 rounded-l-lg left-72' src={cameraicon} alt="" />
</div>
<div className='flex justify-between mt-9'>
 <div id='accept' className=" bg-blue-500  text-xs text-white py-2 px-3   rounded"><img src={awardicon} alt='iconaward' /></div>
 <div className='flex'>
<button id='reject'  className=" popupclickbtn   text-xs text-white  py-2 px-3 ml-2 mr-2  rounded">
  Attention
</button>

<div id='accept' style={{backgroundColor:"#FFA620", color:"white"}} className=" bg-blue-500  text-xs text-white py-2 px-3   rounded"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg></div>


</div>



</div>
  </div>;
}

