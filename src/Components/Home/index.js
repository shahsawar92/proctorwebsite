import React,{useState} from 'react'
import Body from './Components/body'
import HeaderOne from './Components/header-1'
import HeaderTwo from './Components/header-2'
import Index from './Components/model'

export default function Home() {
    const [showModal, setshowModal] = useState(false)
    return (
        <div className='bg-gray-300 h-screen pt-4'>
             {showModal && <Index  setshowModal={setshowModal}/>}
            <HeaderOne />
            <HeaderTwo  setshowModal={setshowModal}/>
            <Body />
        </div>
    )
}
