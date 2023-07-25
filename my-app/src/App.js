// import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
let about="About";
let name="Text Modifier Website";
function App() {
  return (
    <>
  <Navbar title={name} aboutText={about} />
  <div className="container my-5">
  <TextForm heading="Enter the text to Analyse"/>
  </div>
  
    {/* <Navbar title='Capitalizer'/>
    <div className='container'>
    <TextForm heading="Enter Text To Analyse"/>
    </div> */}
    </>
     );
}

export default App;

