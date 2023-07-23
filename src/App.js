// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
//import React,{usestate} from 'react';
import React, {useState} from 'react';
import {
  //  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";

function App() {
  //  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert = (massage, type) =>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(  () =>{
      setAlert(null)
    },3000)

  }
  // const toggleMode = () =>{
  //   if(mode==='light')
  //   {
  //     setMode('black');
  //     document.body.style.backgroundColor='black';
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='light';
  //   }
  // }
  return (
    <>
      {/* <Navbar title="Textutil" other="About" mode={mode} toggleMode={toggleMode} ></Navbar> */}
      
      <Navbar title="TextUtil" other="About"  ></Navbar>
        <Alert alert = {alert}></Alert>
      <div className="container">
        
      <Routes >
          <Route path="/"
            element={<About />}
          />
          
          <Route path="/Textform"
          element={<Textform showAlert={showAlert} heading="Enter the text here"></Textform>}
          />
        </Routes>
      </div>
      
      {/* <About/ > */}
      
    </>
  );
}

export default App;
