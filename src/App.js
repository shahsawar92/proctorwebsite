import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import LogIn from "./Components/Login";
import SignIn from "./Components/Signin";

function App() {
  return (
    
   <>
  
  <Router>
     
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/" element={<LogIn/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    
    </Router>

   </>
  );
}

export default App;



function NotFound() {
  return <h2>404- no page found</h2>;
}