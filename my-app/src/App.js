// import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
// import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react'


let aboutText="About";
let name="Text Modifier Website";
function App() {
  const[mode,setMode]=useState("dark");

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <> 
  <Navbar title={name} aboutText={aboutText} mode={mode} toggleMode={toggleMode} />
  <div className="container my-5">
  <TextForm heading="Enter the text to Analyse" mode={mode}/>
   {/* <About/> */}
  </div>
  
    {/* <Navbar title='Capitalizer'/>
    <div className='container'>
    <TextForm heading="Enter Text To Analyse"/>
    </div> */}
    </>
     );
}

export default App;

