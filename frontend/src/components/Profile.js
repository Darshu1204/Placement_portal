// import React from 'react'
// import img from'../img/hiring.jpg'
// import Studentnav from './Studentnav'
// const Profile = () => {
//   return (
//     <>
//       <Studentnav/>
//       <div className='container student-profile'>
//         <form action="">
//             <div className="row">
//               <div className="col-md-4">
//                 <img src={img} class="rounded float-start" alt="Your img" />
//               </div>
//               <div className="col-md-6">
//                 <div className="profile-head">
//                   <h5>Your name</h5>
//                   <h6> specification like web developer</h6>
//                   <nav class="nav">
//                     <a class="nav-link active" aria-current="page" href="#personal">Personal</a>
//                     <a class="nav-link" href="#education">Education</a>
//                     {/* <a class="nav-link" href="#">Link</a>
//                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
//                   </nav>
//                 </div>
//               </div>
//               <div className="col-md-2">
//                 <input type="text" className='profile-edit-btn' value={"Edit"}/>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-4">
//                 <div className="profile-work">
//                   <p>WORK LINK</p>
//                   <a href="">youtube</a>
//                   <a href="">Instagram</a>
//                   <a href="">Linkdin</a>
//                 </div>
//               </div>
//               <div className="col-md-8 pl-5 about-info">
//                 <div className="tab-content profile-tab" id="mytabcontent">

//                 </div>
//               </div>
//             </div>
//         </form>      
//       </div>
//     </>
//   )
// }

// export default Profile
import React, { useState, useEffect } from 'react';
import '../styles/profile.css'
import axios from 'axios';

const StudentProfile = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    department: "",
    year: "",
    address: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch student data from the backend when the component loads
    axios.get('http://localhost:5000/student/profile')
      .then(response => {
        setStudent(response.data); // Assuming the backend returns the student's data
      })
      .catch(error => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleUpdate = () => {
    // Send a PUT request to update student information
    axios.put('http://localhost:5000/student/update', student)
      .then(response => {
        console.log("Student information updated successfully");
        setIsEditing(false); // Turn off editing mode after successful update
      })
      .catch(error => {
        console.error("Error updating student information:", error);
      });
  }

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [field]: value });
  }

  return (
    <div className='student-container'>
      <div className="profile-holder">
        <div className="profile-container">
          <h1 className="title">Student Profile</h1>
          <hr />
          <form className="profile-form" autoComplete='on'>
            <div className="name profile-input ">
              <label>Name:</label>
              <input className={`student-profile-input ${isEditing ? 'editable' : 'readonly'}`} type="text" name="name" value={student.name} readOnly={!isEditing} onChange={handleChange} />
            </div>
            <div className="email profile-input ">
              <label>Email:</label>
              <input className={`student-profile-input ${isEditing ? 'editable' : 'readonly'}`} type="email" name="email" value={student.email} readOnly />
            </div>
            <div className="phone profile-input ">
              <label>Phone:</label>
              <input className={`student-profile-input ${isEditing ? 'editable' : 'readonly'}`} type="phone" name="phone" value={student.phone} readOnly={!isEditing} onChange={handleChange} />
            </div>
            <div className="gender profile-input ">
              <label>Gender:</label>
              <input className={`student-profile-input ${isEditing ? 'editable' : 'readonly'}`} type="text" name="gender" value={student.gender} readOnly={!isEditing} onChange={handleChange} />
            </div>
            <div className="dob profile-input ">
              <label>Date of Birth:</label>
              <input className={`student-profile-input ${isEditing ? 'editable' : 'readonly'}`} type="text" name="dob" value={student.dob} readOnly={!isEditing} onChange={handleChange} />
            </div>
            <div className="department profile-input ">
              <label>Department:</label>
              <input className={`student-profile-input ${isEditing ? 'editable' : 'readonly'}`} type="text" name="department" value={student.department} readOnly={!isEditing} onChange={handleChange} />
            </div>
            <div className="year profile-input ">
              <label>Year:</label>
              <input className={`student-profile-input ${isEditing ? 'editable' : 'readonly'}`} type="text" name="year" value={student.year} readOnly={!isEditing} onChange={handleChange} />
            </div>
            <div className="address profile-input ">
              <label>Address:</label>
              <textarea name="address" rows="3" value={student.address} readOnly={!isEditing} onChange={handleChange}></textarea>
            </div>
            {isEditing ? (
              <button type="button" onClick={handleUpdate}>Save</button>
            ) : (
              <button type="button" onClick={handleEdit}>Edit</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
