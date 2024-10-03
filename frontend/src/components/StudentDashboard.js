// import React from 'react'

// import { Link } from 'react-router-dom'
// import Studentnav from './Studentnav';
// // import '../styles/navbar.css'
// // import {styled} from '@mui/material'

// const StudentDashboard = () => {
//   const studentName=sessionStorage.getItem("studentName");
//   return (
//     <div>
//           <Studentnav heading={`Welcome ${studentName}`}/>
//           <main className='studentdash'>
//               <section className="dashboard">
//                   <h2>Your Dashboard</h2>
//                   <p>Here you can access various functionalities:</p>
//                   <ul>
//                       <li><Link to="/student/viewjobs">View available job opportunities</Link></li>
//                       <li><Link to="/student/applicationstatus">See the status of your applications</Link></li>
//                       <li><Link to="/student/updateresume">Update your resume for better chances</Link></li>
//                   </ul>
//               </section>
//           </main>
//           <footer>
//               <p>&copy; 2023 Placement Management System</p>
//           </footer>

//     </div>
//   );
// }

// export default StudentDashboard
import React, { useState } from 'react';
import Studentnav from './Studentnav';
import StudentDash from '../styles/studentDash.css'
// Component for displaying upcoming events and workshops
const EventsAndWorkshops = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Career Fair', date: '2024-03-15', location: 'Virtual' },
    { id: 2, title: 'Resume Writing Workshop', date: '2024-03-20', location: 'Online' },
    { id: 3, title: 'Mock Interview Session', date: '2024-03-25', location: 'Campus' }
  ]);

  // Function to register for an event
  const registerForEvent = (eventId) => {
    // Implement registration logic here
    console.log(`Registered for event with ID: ${eventId}`);
  };

  return (
    <div className='events-container'>
      <h2>Upcoming Events and Workshops</h2>
      <ul className='events-list'>
        {events.map(event => (
          <li key={event.id} className='event-item'>
            <strong className='event-title'>Event: {event.title}</strong>
            <p className='event-date'>Date: {event.date}</p>
            <p className='event-location '>Location: {event.location}</p>
            <button className='register-button' onClick={() => registerForEvent(event.id)}>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component for interview preparation resources
const InterviewPreparation = () => {
  // Sample interview questions
  const interviewQuestions = [
    'Tell me about yourself.',
    'What are your strengths and weaknesses?',
    'Why do you want to work for this company?',
    'How do you handle stressful situations?',
    'Tell me about a time when you faced a challenge and how you overcame it.'
  ];

  return (
    <div className='interview-container'>
      <h2>Interview Preparation</h2>
      <h3>Sample Interview Questions</h3>
      <ul className='interview-questions '>
        {interviewQuestions.map((question, index) => (
          <li className='' key={index}>{question}</li>
        ))}
      </ul>
      <div className="interview-tips">
        <a href="https://www.glassdoor.com/blog/common-interview-questions/" target='_blank'>50 Most Common Interview Questions on Glassdoor</a>
        <h3>Tips for Answering Common Interview Questions</h3>
        <p>Provide tips and guidelines for answering common interview questions here.</p>
        <h3>Mock Interview Sessions</h3>
        <p>Offer mock interview sessions to help students practice and improve their interview skills.</p>
      </div>
    </div>
  );
};

// Dashboard component combining EventsAndWorkshops and InterviewPreparation
const StudentDashboard = () => {
  return (
    <div>
      <Studentnav />
      <EventsAndWorkshops />
      <InterviewPreparation />
    </div>
  );
};

export default StudentDashboard;
