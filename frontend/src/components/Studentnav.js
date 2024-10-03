import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
const Studentnav = (props) => {
  const {heading}=props//object destructuring
  return (
    <div>
        <header  className='snav-header'>
            {/* <h1 className='snav-h1'>{props.heading}</h1> */}
            <h1 className='snav-h1'>{heading}</h1>
            <nav className='snav'>
                <ul>

                      <li><Link to="/student">Dashboard</Link></li>
                      <li><Link to="/student/viewjob">View Jobs</Link></li>
                      <li><Link to="/student/appliedjob">Applied Jobs</Link></li>
                      <li><Link to="/student/applicationstatus">Application Status</Link></li>
                      <li><Link to="/student/updateresume">Update Resume</Link></li>
                      <li><Link to="/">Logout</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Studentnav
