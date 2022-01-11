import React from 'react'
import Card2 from './newcard'

export default function Body() {
    
    return (
        <div className=' bg-white h-screen m-2 pt-4  rounded-lg px-5'>
            <div className='flex flex-row  justify-between' >
                <div className=' '>Exam Room</div>
                <div className=' w-9/12 md:w-10/12 mt-3.5 '><hr /> </div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start' >
               <Card2 /> 
               <Card2 />  
               <Card2 /> 
               <Card2 /> 
            </div>
        </div>
    )
}
