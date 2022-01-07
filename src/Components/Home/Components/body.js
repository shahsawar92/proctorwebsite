import React from 'react'
import Card2 from './newcard'

export default function Body() {
    
    return (
        <div className=' bg-white h-screen m-2 pt-4  rounded-lg px-5'>
            <div className='flex flex-row  justify-between' >
                <div className=' '>Exame Room</div>
                <div className=' w-9/12 md:w-10/12 mt-3.5 '><hr /> </div>
            </div>
            <div className='flex justify-start' >
               <Card2 />  
            </div>
        </div>
    )
}
