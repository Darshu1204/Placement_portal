// import '../styles/home.css'
// import React from 'react';
// // import {Link}from 'react-router-dom';
// // import Navbar from './Navbar.js'
// import { Link } from 'react-router-dom';
// import logo from '../img/Logo.jpg';
// import img from '../img/hiring.jpg'
// import '../styles/home.css'
// const Home = () => {
//   return (
//     <>
//     <div className='home-container'>
//         {/* <Navbar/> */}<div>
//           <nav className='home-nav'>
//             <ul>
//               <img src={logo} alt="LOGO" />
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/student/login">Student</Link></li>
//               <li><Link to="/admin/login">Admin</Link></li>
//             </ul>
//           </nav>
//         </div>
//          <div className="home-content">
//           <main>
//               <section className="intro">
//                   <h2>Welcome to our Placement Management System!</h2>
//                   <p>We connect talented students with top companies for exciting placement opportunities.</p>
//               </section>
//               {/* <div> */}
//               <div className="row">
//                 <div class="card">
//                   <img src={img} alt="Card Image"/>
//                     <div class="card-body">
//                       <h2 class="card-title">Card Title</h2>
//                       <p class="card-text">This is a sample card content. You can replace this with your own content.</p>
//                       <Link to="#" class="card-link">Learn More</Link>
//                     </div>
//                   </div>
//                 <div class="card">
//                   <img src={img} alt="Card Image" />
//                   <div class="card-body">
//                     <h2 class="card-title">Card Title</h2>
//                     <p class="card-text">This is a sample card content. You can replace this with your own content.</p>
//                     <Link to="#" class="card-link">Learn More</Link>
//                   </div>
//                 </div>
//                 <div class="card">
//                   <img src={img} alt="Card Image" />
//                   <div class="card-body">
//                     <h2 class="card-title">Card Title</h2>
//                     <p class="card-text">This is a sample card content. You can replace this with your own content.</p>
//                     <Link to="#" class="card-link">Learn More</Link>
//                   </div>
//                 </div>
//             </div>
//           </main>
//          </div>
//           <div className="table-container">
//             <h1>Placement Statistics</h1>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Academic Year</th>
//                   <th>Course</th>
//                   <th>Company</th>
//                   <th>No. of Students Placed</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td rowspan="5">2017-2018</td>
//                   <td rowspan="5">Computer & IT</td>
//                   <td>Capgemini</td>
//                   <td>06</td>
//               </tr>
//               <tr>
//                 <td>Infosys</td>
//                 <td>02</td>
//               </tr>
//               <tr>
//                 <td>Wipro</td>
//                 <td>09</td>
//               </tr>
//               <tr>
//                 <td>TCS</td>
//                 <td>01</td>
//               </tr>
//               <tr>
//                 <td>You</td>
//                 <td>Just now</td>
//               </tr>
//               <tr>
//                 <td rowspan="4">2018-2019</td>
//                 <td rowspan="4">Computer & IT</td>
//                 <td>Capgemini</td>
//                 <td>12</td>
//               </tr>
//               <tr>
//                 <td>Infosys</td>
//                 <td>09</td>
//               </tr>
//               <tr>
//                 <td>Wipro</td>
//                 <td>15</td>
//               </tr>
//               <tr>
//                 <td>TCS</td>
//                 <td>08</td>
//               </tr>
//             </tbody>
//           </table>
//           </div>
//         <footer className='home-footer'>
//               <p>&copy; 2023 Placement Management System</p>
//           </footer>
//     </div>
//     </>
//   )
// }

// export default Home

import '../styles/home.css'
import React from 'react';
// import {Link}from 'react-router-dom';
// import Navbar from './Navbar.js'
import { Link } from 'react-router-dom';
import logo from '../img/Logo.jpg';
import img from '../img/hiring.jpg'
import AdminLoginimg from '../img/AdminLogin.jpeg'
import Studentloginimg from '../img/StudentLogin.jpeg'
import '../styles/home.css'
const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div>
          <nav className='home-nav'>
            <ul>
              <img src={logo} alt="LOGO" />
              <li><Link to="/">Home</Link></li>
              <li><Link to="/student/login">Student</Link></li>
              <li><Link to="/admin/login">Admin</Link></li>
            </ul>
          </nav>
        </div>
        <div className="home-content">
          <main>
            <section className="intro">
              <h2>Welcome to our Placement Management System!</h2>
              <p>We connect talented students with top companies for exciting placement opportunities.</p>
            </section>
            {/* <div> */}
            <div className="row">
              <div class="card">
                <img src={AdminLoginimg} alt="Card Image" style={{height: "200px" }} />
                <div class="card-body">
                  <h2 class="card-title">Admin</h2>
                  <p class="card-text">This Admin section contain  the different functionalities in it.The admin can able to add company ,post job and he can view the Applied applicants</p>
                  <Link to="#" class="card-link">Learn More</Link>
                </div>
              </div>
              <div class="card">
                <img src={Studentloginimg} alt="Card Image" style={{ height: "200px" }} />
                <div class="card-body">
                  <h2 class="card-title">Student</h2>
                  <p class="card-text">This Student section contain  the different functionalities in it.The student can able to updateResume ,view job and he can view the Application Ststus</p>
                  <Link to="#" class="card-link">Learn More</Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="table-container">
          <h1>Placement Statistics</h1>
          <table>
            <thead>
              <tr>
                <th>Academic Year</th>
                <th>Course</th>
                <th>Company</th>
                <th>No. of Students Placed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="5">2017-2018</td>
                <td rowspan="5">Computer & IT</td>
                <td>Capgemini</td>
                <td>06</td>
              </tr>
              <tr>
                <td>Infosys</td>
                <td>02</td>
              </tr>
              <tr>
                <td>Wipro</td>
                <td>09</td>
              </tr>
              <tr>
                <td>TCS</td>
                <td>01</td>
              </tr>
              <tr>
                <td>You</td>
                <td>Just now</td>
              </tr>
              <tr>
                <td rowspan="4">2018-2019</td>
                <td rowspan="4">Computer & IT</td>
                <td>Capgemini</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Infosys</td>
                <td>09</td>
              </tr>
              <tr>
                <td>Wipro</td>
                <td>15</td>
              </tr>
              <tr>
                <td>TCS</td>
                <td>08</td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer className='home-footer'>
          <p>&copy; 2023 Placement Management System</p>
        </footer>
      </div>
    </>
  )
}

export default Home
