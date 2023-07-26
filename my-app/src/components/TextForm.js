// import React,{useState} from 'react'

// export default function TextForm(props) {
   
//     const handleUpclick=()=>{
//         console.log("uppercase was clicked"+ text);
//         // let newext= text.toUpperCase;
//         let newext=text.toUpperCase();
//         setText(newext);
//     }
//     const handleonChange=(event)=>{
//         console.log("on change");
//         setText(event.target.value)
        
//     }
//     const[text,setText]= useState('enter text here mere bhai!!!');
//     return (
//         <>
        // <div className='container my-3'>
        //     <div className="my-5">
        //         <h1>{props.heading}</h1>
        //         <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} rows="8"  ></textarea>
        //     </div>
        //     <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
            
            
        // </div>
        // <div className="container my-3">
        //     <h2>Your text summary</h2>
        //     <p>{text.split(" ").length} words and {text.length} characters</p>
        // </div>

        
        
//         </>
//             )
// }

import React,{ useState } from 'react'


export default function TextForm(props) {
        const[text,setText]= useState("Enter text here...");
        // setText("bhai");
        const handleUpClick=()=>{
                // baba("arreh op bolo");
            console.log("uppercase was clicked "+ text);
            
            let newext=text.toUpperCase();

              setText(newext);
        }
        const handleUpClick2=()=>{
                // baba("arreh op bolo");
            console.log("Lowercase was clicked "+ text);
            
            let newext=text.toLowerCase();

              setText(newext);
        }
        const handleOnChange=(event)=>{
            console.log("on change");
            setText(event.target.value);
            
        }
  return (
     <>
     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleUpClick} >Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleUpClick2} >Convert To Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length)} minutes it will take to read this..</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to Preview"}</p>
    </div>

     </>
    
  )
}

