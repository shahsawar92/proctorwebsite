import React from 'react'
import './style.css'


export default function HeaderOne() {

    return (
        <div className=' mx-2 bg-white rounded-xl h-auto flex justify-between flex-wrap items-center px-2'>
          <div className='font-bold text-xs pl-3  '>Assessment: AST0123 -Calculus</div>
          <div className='flex text-sm  my-3 lg:my-2 '>
          <div id="date" className='bg-green-100   px-3 md:px-2 rounded-lg py-1 md:py-2'>21-Sep-2021   <span className='pl-2'>08:12:23 hrs</span></div>
          <div id="signout" className='bg-red-300  py-1  ml-3  px-3 md:px-2 md:py-2  rounded-lg'>Sign Out</div>
          </div>
        </div>
    )
}
