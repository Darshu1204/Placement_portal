import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css'
const Adminnav = (props) => {
  return (
    <div>
        <header className='anav-header'>
            <h1 className='anav-h1'>{props.heading}</h1>
            <nav className='anav'>
                <ul>
                    <li><Link to="/admin" >Dashboard</Link></li>
                    <li><Link to="/admin/events" >Add Event</Link></li>
                    <li><Link to="/admin/company" >Add Company</Link></li>
                    <li><Link to="/admin/viewApplicant">View Applicant</Link></li>
                    <li><Link to="/admin/postjob">Post Job </Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </nav>
        </header>

    </div>
  )
}

export default Adminnav
