// import logo from './logo.svg';
import './App.css';
// import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
let about=5;
let name="Dhaki chiki website";
function App() {
  return (
    <>
    
<Navbar title={name} aboutText={about} />
    {/* <Navbar title='Capitalizer'/>
    <div className='container'>
    <TextForm heading="Enter Text To Analyse"/>
    </div> */}
    </>
     );
}

export default App;

