import React from 'react'
import './style.css'


export default function HeaderOne() {

    return (
        <div className=' mx-3 bg-white rounded-xl h-16 flex justify-between  items-center px-4'>
          <div className='font-bold text-sm '>Assessment: AST0123 -Calculus</div>
          <div className='flex text-sm font-medium '>
          <div id="date" className='bg-green-100  font-medium px-2 rounded-xl py-2'>21-Sep-2021  08:12:23 hrs</div>
          <div id="signout" className='bg-red-300  py-2  ml-3 font-medium px-2  rounded-xl'>Sign Out</div>
          </div>
        </div>
    )
}
