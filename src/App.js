import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import  About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
const [mode, setmode] = useState('light');
const [alert, setalert] = useState(null);

const showalert= (message,type)=>{
    setalert({
    msg:message,
    type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2500);
}

const toggleMode=()=>{
if(mode==='light'){
setmode('dark')
document.body.style.backgroundColor='#1a2253';
showalert("dark mode has been enabled ", "success");
}
else{
setmode('light')
document.body.style.backgroundColor='white';
showalert("light mode has been enabled ","success");
}
}

  return (
   <>
   <Router>
    <Navbar name='textUtils' about='About us' mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container">
        <Switch>
        <Route exact path="/about">
        <About mode={mode} />
        </Route>
        <Route exact path="/">
        <TextForm showalert={showalert} heading='Enter your text to analyze' mode={mode}/>
        </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}
export default App;
