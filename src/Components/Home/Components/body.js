import React from 'react'
import Card1 from './Students/student1'
import Card2 from './Students/student2'

export default function Body({setshowModalProctor}) {
    
    return (
        <div className=' bg-white h-screen m-2 pt-4  rounded-lg px-5'>
            <div className='flex flex-row  justify-between' >
                <div className=' '>Exam Room</div>
                <div className=' w-9/12 md:w-10/12 mt-3.5 '><hr /> </div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start' >
               <Card1 setshowModalProctor={setshowModalProctor} /> 
               <Card2 />  
               <Card2 />  
            </div>
        </div>
    )
}
