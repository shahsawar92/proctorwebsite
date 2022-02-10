import React,{useState} from 'react'
import Body from './Components/body'
import HeaderOne from './Components/Headers/header-1'
import HeaderTwo from './Components/Headers/header-2'
import Index from './Components/CandidateVerification/model'
import SubjectModal from './Components/subjectModal';
// import Chatbox from './Components/chat'
import ProctorModal from './Components/proctormodal/proctorModal'
import CameraModal from './Components/StudentCamera/CameraModal'

export default function Home() {
    const [showModal, setshowModal] = useState(false)
    const [showModalEachChat, setshowModalEachChat] = useState(false)
    const [showModalProctor,setshowModalProctor]= useState(false)
    const [showCameraModal,setshowCameraModal]= useState(false)

    return (
        <div className='bg-gray-300 h-auto pt-4'>
             {showModal && <Index setshowModalEachChat={setshowModalEachChat}  setshowModal={setshowModal}/>}
             {showModalProctor && <ProctorModal setshowCameraModal={setshowCameraModal} setshowModalProctor={setshowModalProctor}  />}
             { showModalEachChat && <SubjectModal     setshowModalEachChat={setshowModalEachChat}/>}
             
             { showCameraModal && <CameraModal  setshowCameraModal={setshowCameraModal}/>}
            <HeaderOne />
            <HeaderTwo   setshowModal={setshowModal}   />
            <Body setshowModalProctor={setshowModalProctor} />
        </div>
    )
}
