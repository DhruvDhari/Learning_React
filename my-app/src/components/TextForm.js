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

import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        
        <div class="mb-3">
        <label for="myBox" class="form-label">{props.heading}</label>
        <textarea class="form-control" id="myBox" rows="8"></textarea>
      </div>
    </div>
  )
}

