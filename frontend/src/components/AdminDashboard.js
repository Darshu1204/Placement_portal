import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Adminnav from './Adminnav'
import axios from 'axios'
const AdminDashboard = () => {
  // const eventData = [
  // { id: 1, EventName: 'Workshop on Resume Building', EventDate: 'April 10, 2024', EventLocation: 'Virtual' },
  // { id: 2, EventName: 'Networking Event with Industry Professionals', EventDate: 'April 15, 2024', EventLocation: 'Campus Auditorium' },
  // { id: 3, EventName: 'Guest Lecture on Data Analytics', EventDate: 'April 20, 2024', EventLocation: 'Room 101' },
  // { id: 4, EventName: 'Seminar on Interview Preparation', EventDate: 'April 25, 2024', EventLocation: 'Online' },
  // { id: 5, EventName: 'Hackathon Competition', EventDate: 'April 30, 2024', EventLocation: 'Tech Park' },
  // { id: 6, EventName: 'Web Development Workshop', EventDate: 'May 5, 2024', EventLocation: 'Conference Hall' },
  // { id: 7, EventName: 'Career Fair', EventDate: 'May 10, 2024', EventLocation: 'Exhibition Center' },
  // { id: 8, EventName: 'Panel Discussion on AI in Business', EventDate: 'May 15, 2024', EventLocation: 'Auditorium A' },
  // { id: 9, EventName: 'Entrepreneurship Bootcamp', EventDate: 'May 20, 2024', EventLocation: 'Startup Hub' },
  // { id: 10, EventName: 'Finance Workshop', EventDate: 'May 25, 2024', EventLocation: 'Room 202' }

  // ];
  // Function to delete an event
  // const deleteEvent = (eventId) => {
  //   // Implementation to delete the event with the given eventId
  //   console.log('Deleted event with ID:', eventId);
  // };
  const [events, setEvents] = useState([]); // Initial events array
  useEffect(() => {
    async function allEvents() {
      try {
        const response = await axios.get(`http://localhost:5000/admin/events`);
        setEvents(response.data);
        console.log(events);
      } catch (error) {
        console.error('Error fetching Events:', error);
      }
    }

    allEvents();
  }, [])
  useEffect(() => {
    console.log(events);
  }, [events])

  const deleteEvent = async (eventId) => {
    await axios.delete(`http://localhost:5000/admin/events/${eventId}`);
    const response = await axios.get('http://localhost:5000/admin/events');
    const updatedEvents = response.data;
    setEvents(updatedEvents);
    // Update the state with the filtered events
    // const updatedEvents = events.filter(event => event.id !== eventId);
    // setEvents(updatedEvents);
  };

  return (
    <div className='adminDashboard' style={{ position: 'relative', minHeight: '100vh'  }}>
      {/* backgroundImage: 'url("https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg")' */}
      <Adminnav heading="" />
      <div>
        {/* <h2 style={{textAlign:'center'}}>Admin Dashboard</h2> */}
        <div className='events-container'>
          <h3 style={{ textAlign: 'center', paddingBottom: '10px', fontSize: '20px' }}>Manage Events</h3>
          <ul className='events-list'>
            {events.map(event => (
              <li key={event.id} className='event-item' >
                <strong className='event-title'>Event: {event.EventName}</strong>
                <p className='event-date'>Date: {event.EventDate}</p>
                <p className='event-location '>Location: {event.EventLocation}</p>
                <button className='delete-button' style={{ margin: '10px 0px', width: '150px' }} onClick={() => deleteEvent(event._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer style={{ width: '100vw', padding: '15px', position: 'absolute', bottom: '0px', color: 'white', backgroundColor: 'black', textAlign: "center" }}>
        <p>&copy; 2023 Placement Management System</p>
      </footer>
    </div>
  )
}

export default AdminDashboard
