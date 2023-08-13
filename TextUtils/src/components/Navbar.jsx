// // import React from 'react'
// // import PropTypes from 'prop-types'

// // export default function Navbar(props) {
// //   return (
// //     <>
// //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="/"><h1>{props.title}</h1></a>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="/">Home</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="/">Link</a>
// //         </li>
// //         <li className="nav-item dropdown">
// //           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// //             Dropdown
// //           </a>
// //           <ul className="dropdown-menu">
// //             <li><a className="dropdown-item" href="/">Action</a></li>
// //             <li><a className="dropdown-item" href="/">Another action</a></li>
// //             <li><hr className="dropdown-divider"/></li>
// //             <li><a className="dropdown-item" href="/">Something else here</a></li>
// //           </ul>
// //         </li>
// //       </ul>
// //     </div>
// //   </div>
// // </nav>
// //     </>
// //   )
// // }

// // Navbar.propTypes={
// //        title: PropTypes.string.isRequired,
// //        about: PropTypes.string}


// // Navbar.defaultProps={
// //   title:"insaan"
// // }


// import React from 'react'
// import PropTypes from 'prop-types'
// // import { Link } from 'react-router-dom'


// export default function Navbar(props) {
//   return (
//     <div>
//       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>

//     {/* pallet for various colors */}
//     <div className="d-flex">
//         <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
//       </div>
//       {/* ***************** */}
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
    
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//           {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
//         </li>
//         {/* <li className="nav-item">
//           <Link className="nav-link" to="/about">{props.aboutText} </Link>
//         </li> */}
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/">Action</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
       
//       </ul>

     
//       <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//   <input className="form-check-input" onClick={props.toggleMode('null')} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
// </div>
//       <form className="d-flex" role="search">
//         <input className="form-control mx-3" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-primary" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
    
//     </div>
//   )
// }

// Navbar.propTypes={
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }

// Navbar.defaultProps={
//     title:"bhai kuch toh daal"
// }





import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">{props.aboutText}</a>
                        </li>
                    </ul>

                    <div className="d-flex">
                      <div className="bg-primary rounded mx-2"  style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode('primary')}}></div>
                      <div className="bg-danger rounded mx-2"  style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode('danger')}}></div>
                      <div className="bg-success rounded mx-2"  style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode('success')}}></div>
                      <div className="bg-warning rounded mx-2"  style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode('warning')}}></div>
                      <div className="bg-light rounded mx-2"  style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode('light')}}></div>
                      <div className="bg-dark rounded mx-2"  style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode('dark')}}></div>
                    </div>
                    
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        {/* <input className="form-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };
