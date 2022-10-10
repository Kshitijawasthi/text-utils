import './App.css';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";

export default function App() {
 const [mode, setMode] = useState('dark');
 const [alert, setAlert] = useState(null);

 const showAlert=(message,type)=>{
     setAlert({
        msg: message,
        type: type 
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
 }

   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title='Textutils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title='Textutils - Light Mode';
    }
   }
    
  return (
    <>
     
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">        
          <TextForm showAlert={showAlert} heading="Textutils-Word Counter, Character Counter, Remove extra space" mode={mode}/>
          <About mode={mode} />
        </div>   
    </>
  );
}

// export default App;
