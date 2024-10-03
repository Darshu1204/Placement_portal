// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../styles/company.css'
// import Adminnav from './Adminnav'
// const Company = () => {
//   return (
//     <div>
//         <Adminnav heading="Add Company"/>
//           <main>
//               <section className="dashboard">
//                   <h2>Your Admin Dashboard</h2>
//                   <p>Here you can access various functionalities:</p>
//                   <ul>
//                       <li><Link to="viewapplicant.html">View applicants for your posted jobs</Link></li>
//                       <li><Link to="postjoboppourtunity.html">Post new job opportunities</Link></li>
//                   </ul>
//               </section>
//           </main>
//           <footer>
//               <p>&copy; 2023 Placement Management System</p>
//           </footer>

//     </div>
//   )
// }

// export default Company

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <metLink charset="UTF-8">
// //     <metLink name="viewport" content="width=device-width, initial-scale=1.0">
// //     <link rel="stylesheet" to="company.css">
// //     <title>Admin Dashboard</title>
// // </head>
// // <body>
// //     <header>
// //         <h1>Welcome, XYZ Corporation!</h1>
// //         <nav>
// //             <ul>
// //                 <li><Link to="#">Dashboard</Link></li>
// //                 <li><Link to="viewapplicant.html">View Applicants</Link></li>
// //                 <li><Link to="postjoboppourtunity.html">Post Job Opportunity</Link></li>
// //                 <li><Link to="home.html">Logout</Link></li>
// //             </ul>
// //         </nav>
// //     </header>
// //     <main>
// //         <section className="dashboard">
// //             <h2>Your Admin Dashboard</h2>
// //             <p>Here you can access various functionalities:</p>
// //             <ul>
// //                 <li><Link to="viewapplicant.html">View applicants for your posted jobs</Link></li>
// //                 <li><Link to="postjoboppourtunity.html">Post new job opportunities</Link></li>
// //             </ul>
// //         </section>
// //     </main>
// //     <footer>
// //         <p>&copy; 2023 Placement Management System</p>
// //     </footer>
// // </body>
// // </html>
import React, { useState } from 'react';
import axios from "axios";
import Adminnav from './Adminnav';
import '../styles/company.css'
function AddCompany() {
  const [companyData, setCompanyData] = useState({
    name: '',
    description: '',
    industry: '',
    location: '',
    website: '',
    contactEmail: '',
    contactPhone: '',
  });
  const handleChange =(e) => {
    const {name,value}=e.target;
    setCompanyData({ ...companyData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        name,
        description,
        industry,
        location,
        website,
        contactEmail,
        contactPhone } = { companyData };
      const response = await axios.post('/company', {
        // method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(companyData),
        name,
        description,
        industry,
        location,
        website,
        contactEmail,
        contactPhone
      });
      if (response.status === 201) {
        // Company added successfully
        alert('Company added successfully');
      } else {
        // Handle error
        alert('Failed to add company');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };
  return (
    <>
      <Adminnav />
      <div className='company-container' >
        <h2>Add a Company</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name='name'
              value={companyData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name='description'
              value={companyData.description}
              onChange={handleChange}
            />
          </div>
          {/* Add more fields for industry, location, website, contactEmail, and contactPhone */}
          <div>
            <label>Industry:</label>
            <input
              type="text"
              name='industry'
              value={companyData.industry}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label>Website:</label>
            <input
              type="text"
              name="website"
              value={companyData.website}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Contact Email:</label>
            <input
              type="email"
              name="contactEmail"
              value={companyData.contactEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Contact Phone:</label>
            <input
              type="text"
              name="contactPhone"
              value={companyData.contactPhone}
              onChange={handleChange}
            />
          </div>
          {/* Repeat similar blocks for other fields */}
          {/* <div className='submitBtn'> */}
            <button type="submit">Add</button>
          {/* </div> */}
        </form>
      </div>
    </>
  );
}

export default AddCompany;