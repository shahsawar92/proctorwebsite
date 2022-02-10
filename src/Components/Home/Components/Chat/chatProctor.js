import React from 'react';
import '../style.css';
import {RiAwardLine} from 'react-icons/ri';
import {FaAngleUp} from 'react-icons/fa';


export default function ChatProctor() {
  return <div id='chattext1'>
  <div className=" mx-auto">
    <div className="min-w-full border rounded-xl   ">
      <div className="block">
        <div className="w-full">
          <div className="relative flex items-center justify-between px-3 py-1 rounded-t-xl border-b border-gray-200 chathead">
            <div className='text-xs'>Candidate Chat</div>
            <div className='flex text-gray-600'>
                
            </div>
          </div>
          <div className="relative w-full  overflow-y-auto bg-e h-20">
            
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>;
}
