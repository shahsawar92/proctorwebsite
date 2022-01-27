import React,{useState} from 'react'
import Body from './Components/body'
import HeaderOne from './Components/header-1'
import HeaderTwo from './Components/header-2'
import Index from './Components/model'
import SubjectModal from './Components/subjectModal';
import Chatbox from './Components/chat'

export default function Home() {
    const [showModal, setshowModal] = useState(false)
    const [showModalEachChat, setshowModalEachChat] = useState(false)

    return (
        <div className='bg-gray-300 h-auto pt-4'>
             {showModal && <Index  setshowModal={setshowModal}/>}

             { showModalEachChat && <SubjectModal  setshowModalEachChat={setshowModalEachChat}/>}
            <HeaderOne />
            <HeaderTwo  setshowModal={setshowModal} setshowModalEachChat={setshowModalEachChat}  />
            <Body  />
        </div>
    )
}
