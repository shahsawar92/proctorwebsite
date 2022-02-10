import React from 'react';
import '../style.css';
import {RiAwardLine} from 'react-icons/ri';
import {FaAngleUp} from 'react-icons/fa';
import awardicon from '../../../icons/awardicon-b.png'


export default function Chatbox() {
  return <div id='chattext1' className=' h-32'>
    <div className="container h-32 mx-auto">
      <div className="min-w-full border rounded-xl   ">
        <div className="block">
          <div className="w-full">
            <div className="relative flex items-center justify-between px-3 py-1 rounded-t-xl border-b border-gray-200 chathead">
              <div className='text-xs'>Candidate Chat</div>
              <div className='flex text-gray-600 '><img src={awardicon} alt='iconaward' />
                                
              </div>
            </div>
            <div className="relative w-full p-4 overflow-y-auto bg-e  h-20">
              <ul className="space-y-2 ulclass">
                <li className="flex justify-start">
                  <div  className="relative max-w-xl px-5 py-2  text-white bgbluechat rounded shadow">
                    <span id='chattext' className="block">Hi</span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div  className="relative max-w-xl  px-5 py-2 text-white bggreenchat  rounded shadow">
                    <span id='chattext' className="block">Hiiii</span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="relative max-w-xl  px-5 py-2 text-white bggreenchat  rounded shadow">
                    <span id='chattext' className="block">how are you?</span>
                  </div>
                </li>
                <li className="flex justify-start">
                  <div className="relative max-w-xl  px-5 py-2 text-white bgbluechat rounded shadow">
                    <span id='chattext' className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-full p-1 border-t rounded-b-xl bg-e">
              <div >
              <input type="text" placeholder="Message"
                className="w-40 text-xs inline-block py-1 h-6 pl-4 ml-2 bg-white rounded-full border-none outline-none focus:text-gray-700"
                name="message" required />
                <button className='bgbluechat ml-2 rounded-full p-1' type="submit">
                <svg className="w-3 h-3  text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="white">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
              </div>
              <div>
              < button className='bg-gray-600 p-1 rounded-full'> 
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className='bg-gray-600 p-1 rounded-full ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;
}
