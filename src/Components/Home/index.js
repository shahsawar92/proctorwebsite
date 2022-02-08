import React,{useState} from 'react'
import Body from './Components/body'
import HeaderOne from './Components/header-1'
import HeaderTwo from './Components/header-2'
import Index from './Components/model'
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
             {showModalProctor && <ProctorModal setshowModalProctor={setshowModalProctor}  />}
             { showModalEachChat && <SubjectModal  setshowModalEachChat={setshowModalEachChat}/>}
             
             { showCameraModal && <CameraModal  setshowCameraModal={setshowCameraModal}/>}
            <HeaderOne />
            <HeaderTwo  setshowModal={setshowModal} setshowModalProctor={setshowModalProctor} setshowCameraModal={setshowCameraModal}  />
            <Body  />
        </div>
    )
}
