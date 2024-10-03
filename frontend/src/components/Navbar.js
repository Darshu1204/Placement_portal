// import React ,{useEffect} from 'react'
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//     let location = useLocation();
//     useEffect(() => {
//         // console.log(location);
//         // console.log(location.pathname);
//     }, [location])
//   return (
//     <div>
//           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//               <div className="container-fluid">
//                   {/* <Link className="navbar-brand" to="/">Portal</Link> */}
//                   <img src="logo" alt="LOGO" />
//                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                       <span className="navbar-toggler-icon"></span>
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                           {/* <li className="nav-item">
//                               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                           </li>
//                           <li className="nav-item">
//                               <Link className="nav-link " aria-current="page" to="/student">Student</Link>
//                           </li>
//                           <li className="nav-item">
//                               <Link className="nav-link " aria-current="page" to="/admin">Admin</Link>
//                           </li>
//                           <li className="nav-item">
//                               <Link className="nav-link " aria-current="page" to="/applicationStatus">ApplicationStatus</Link>
//                           </li>
//                            */}
//                           <li className="nav-item">
//                               <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
//                           </li>
//                           <li className="nav-item">
//                               <Link className={`nav-link ${location.pathname === "/studentlogin" ? "active" : ""}`} aria-current="page" to="/student/login">Student</Link>
//                           </li>
//                           <li className="nav-item">
//                               <Link className={`nav-link ${location.pathname === "/adminlogin" ? "active" : ""}`} aria-current="page" to="/admin/login">Admin</Link>
//                           </li>
//                           {/* <li className="nav-item">
//                               <Link className={`nav-link ${location.pathname === "/applicationStatus" ? "active" : ""}`} aria-current="page" to="/applicationStatus">ApplicationStatus</Link>
//                           </li> */}
//                           {/* if(loggedin){<li>
//                               <Link className={`nav-link ${location.pathname === "/viewjobs" ? "active" : ""}`} aria-current="page" to="/applicationStatus">ApplicationStatus</Link>
//                           </li>} */}
//                       </ul>
//                   </div>
//               </div>
//           </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Logo.jpg';
import '../styles/home.css'

const Navbar = () => {
  return (
    <div>
        <nav className='home-nav'>
            <ul>
                <img src={logo} alt="LOGO" />
                <li><Link href="/">Home</Link></li>
                <li><Link href="/student/login">Student</Link></li>
                <li><Link href="/admin/login">Admin</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
