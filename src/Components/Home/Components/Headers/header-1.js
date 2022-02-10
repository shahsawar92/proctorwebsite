import React from 'react'
import '../style.css'
import {Link } from 'react-router-dom';

export default function HeaderOne() {

    return (
        <div className=' mx-2 bg-white rounded-xl h-auto flex justify-between flex-wrap items-center px-2'>
          <div className='font-bold text-xx pl-3  '>Assessment:<span className='pl-2'>AST0123 -Calculus</span></div>
          <div className='flex text-sm  my-3 lg:my-2 '>
          <div id="date" className='bg-green-100   px-3 md:px-2 rounded-lg py-1 md:py-2'>21-Sep-2021   <span className='pl-2'>08:12:23 hrs</span></div>
          <Link to={'/'}>
          <div id="signout" className='bg-red-300  py-1  ml-3  px-3 md:px-2 md:py-2  rounded-lg'>Sign Out </div></Link>
          </div>
        </div>
    )
}
