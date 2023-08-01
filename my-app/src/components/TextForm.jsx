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
            props.showAlert("Converted to Uppercase !","success");
              setText(newext);
              
        }
        const handleUpClick2=()=>{
                // baba("arreh op bolo");
            console.log("Lowercase was clicked "+ text);
            
            let newext=text.toLowerCase();
            props.showAlert("Converted to Lowercase !","success");

              setText(newext);
        }
        const handleClearClick=()=>{
          let newext='';
          setText(newext);
        }

        const handleCopy=()=>{
          let text =document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
        }

        const handleExtraSpaces=()=>{
          let newext=text.split(/[ ]+/);
          setText(newext.join(" "));
        }

        const handleOnChange=(event)=>{
            console.log("on change");
            setText(event.target.value);
            
        }
  return (
     <>
     <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick} >Convert To Uppercase</button>
      <button className="btn btn-primary m-2" onClick={handleUpClick2} >Convert To Lowercase</button>
      <button className="btn btn-primary m-2" onClick={handleClearClick} >Clear Text</button>
      <button className="btn btn-primary m-2" onClick={handleCopy} >Copy Text</button>
      <button className="btn btn-primary m-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes it will take to read this..</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to Preview"}</p>
    </div>

     </>
    
  )
}

