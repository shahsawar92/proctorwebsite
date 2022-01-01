import React, { useState } from 'react'
import Index from './model'
import Card2 from './newcard'

export default function Body() {
    
    return (
        <div className=' bg-white h-2/3 m-2  rounded-lg px-5'>
           
            <div >
                <div className='inline-block lg:pt-4 lg:pl-10 pt-2 lg:text-xl font-medium'>Exame Room</div>
                <div className='w-5/6 float-right lg:pt-8 -mt-3'><hr /> </div>
            </div>
            <div className='flex justify-start' >
               <Card2 />  
            </div>
           
        </div>
    )
}
