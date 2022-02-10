import React from 'react';
import code from '../../../images/code.jpg'
import awardicon from '../../../images/awardicon.png'
import cameraicon from '../../../images/cameraicon.ico'
import camera from '../../../images/camera.svg'


export default function ProfileImg() {
  return <div className='  w-full h-72 rounded-xl '>

<div className='w-full bg-gray-500 h-3/4'>
<img className='h-6 w-6 absolute ' src={camera} alt="" />
<img className='rounded-t-lg h-full ' src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
<img className='h-24 w-36 relative bottom-24 rounded-l-lg right-0 left-44' src={code} alt="code" />
<img className='h-6.5 w-7 relative bottom-32 rounded-l-lg left-72' src={cameraicon} alt="" />
</div>
<div className='flex justify-between mt-9'>
 <div id='camera-align' className=" bg-blue-500  text-xs text-white py-2 px-3   rounded"><img src={awardicon} alt='iconaward' /></div>
 <div>
<button id='accept' className=" bg-blue-500  text-xs text-white py-2 px-3 ml-2  rounded">
  Accept
</button>
<button id='reject'  className=" popupclickbtn   text-xs text-white  py-2 px-3 ml-2  rounded">
  Reject
</button>
<button id='onhold' className=" bg-blue-500  text-xs text-white  py-2 px-3  ml-2  rounded">
  On Hold
</button>
</div>


</div>
  </div>;
}

{/* <button class="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button> */}
