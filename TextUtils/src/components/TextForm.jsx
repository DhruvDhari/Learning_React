// // import React,{useState} from 'react'

// // export default function TextForm(props) {
   
// //     const handleUpclick=()=>{
// //         console.log("uppercase was clicked"+ text);
// //         // let newext= text.toUpperCase;
// //         let newext=text.toUpperCase();
// //         setText(newext);
// //     }
// //     const handleonChange=(event)=>{
// //         console.log("on change");
// //         setText(event.target.value)
        
// //     }
// //     const[text,setText]= useState('enter text here mere bhai!!!');
// //     return (
// //         <>
//         // <div className='container my-3'>
//         //     <div className="my-5">
//         //         <h1>{props.heading}</h1>
//         //         <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} rows="8"  ></textarea>
//         //     </div>
//         //     <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
            
            
//         // </div>
//         // <div className="container my-3">
//         //     <h2>Your text summary</h2>
//         //     <p>{text.split(" ").length} words and {text.length} characters</p>
//         // </div>

        
        
// //         </>
// //             )
// // }

// import React,{ useState } from 'react'



// export default function TextForm(props) {

//         const[text,setText]= useState("Enter text here...");
//         // setText("bhai");
//         const handleUpClick=()=>{
//                 // baba("arreh op bolo");
//             console.log("uppercase was clicked "+ text);
            
//             let newext=text.toUpperCase();
//             props.showAlert("Converted to Uppercase !","success");
//               setText(newext);
              
//         }
//         const handleUpClick2=()=>{
//                 // baba("arreh op bolo");
//             console.log("Lowercase was clicked "+ text);
            
//             let newext=text.toLowerCase();
//             props.showAlert("Converted to Lowercase !","success");

//               setText(newext);
//         }
//         const handleClearClick=()=>{
//           let newext='';
//           setText(newext);
//           props.showAlert("Cleared Text !!!","success");
//         }

//         const handleCopy=()=>{
//           let text =document.getElementById("myBox");
//           text.select();
//           navigator.clipboard.writeText(text.value);
//           props.showAlert("Copied to Clipboard!","success");
//         }

//         const handleExtraSpaces=()=>{
//           let newext=text.split(/[ ]+/);
//           setText(newext.join(" "));
//           props.showAlert("Removed all the Extra Spaces !","success");
//         }

//         const handleOnChange=(event)=>{
//             console.log("on change");
//             setText(event.target.value);
            
//         }
//   return (
//      <>
//      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
        
//         <textarea style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
//       </div>
//       <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick} >Convert To Uppercase</button>
//       <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick2} >Convert To Lowercase</button>
//       <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleClearClick} >Clear Text</button>
//       <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCopy} >Copy Text</button>
//       <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
//     </div>
//     <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
//         <h1>Your Text Summary</h1>
//         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
//         <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes it will take to read this..</p>
//         <h2>Preview</h2>
//         <p>{text.length>0?text:"Nothing to Preview"}</p>
//     </div>

//      </>
    
//   )
// }





import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
