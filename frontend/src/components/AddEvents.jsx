import React, { useState } from 'react'
import axios from 'axios'
import Adminnav from '../components/Adminnav'
import '../styles/addEvents.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEvents = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    // const [error, setError] = useState(null);
    // const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("hii");
            console.log(eventName,eventDate,eventLocation)

            const formattedDate = formatDate(eventDate);
            const response = await axios.post('http://localhost:5000/admin/events', {
                EventName: eventName,
                EventDate: formattedDate,
                EventLocation: eventLocation
            });
            console.log(response);
            toast.success('Event created successfully!', {
                position: 'top-center'
            });
            setEventName('');
            setEventDate('');
            setEventLocation('');
        } catch (err) {
            toast.error('Failed to create event. Please try again later.', {
                position: 'top-center'
            });
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    return (
        <>
            <Adminnav className="postjob-nav" heading="Add Event" />
            <ToastContainer />
            <div className='AddContainer'>
                <div className='form-container'>
                    <h2>Add New Event</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Event Name:</label>
                            <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                        </div>
                        <div>
                            <label>Event Date:</label>
                            <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                        </div>
                        <div>
                            <label>Event Location:</label>
                            <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
                        </div>
                        <button type="submit">Create Event</button>
                    </form>
                    {/* {error && <div style={{ color: 'red' }}>{error}</div>}
                    {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>} */}
                </div>
            </div>
        </>

    );
}

export default AddEvents