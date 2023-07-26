// import logo from './logo.svg';
import './App.css';
// import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
let aboutText="About";
let name="Text Modifier Website";
function App() {
  return (
    <>
    
  <Navbar title={name} aboutText={aboutText} />
  <div className="container my-5">
  {/* <TextForm heading="Enter the text to Analyse"/> */}
   <About/>
  </div>
  
    {/* <Navbar title='Capitalizer'/>
    <div className='container'>
    <TextForm heading="Enter Text To Analyse"/>
    </div> */}
    </>
     );
}

export default App;

