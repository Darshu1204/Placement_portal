// import React from 'react';
// import '../styles/viewjobs.css';
// import Studentnav from './Studentnav';
// const Viewjobs = () => {
//   return (
//     <div className='vj-container' >
//           <Studentnav heading={"View Available Jobs"}/>
         
//           <main className='vj-content'>
//               <section className="job-list">
//                   <h2>Available Job Opportunities</h2>
//                   {/* <ul>
//                       <li>
//                           <h3>Software Developer</h3>
//                           <p>XYZ Corporation</p>
//                           <p>Location: New York</p>
//                           <p>Posted on: August 15, 2023</p>
//                           <label>
//                               <input type="radio" name="apply"/>Apply
//                           </label>
//                       </li>
//                       <li>
//                           <h3>Marketing Intern</h3>
//                           <p>ABC Company</p>
//                           <p>Location: Los Angeles</p>
//                           <p>Posted on: August 10, 2023</p>
//                             <label><input type="radio" name="apply"/>Apply</label>
            
//                       </li><li>
//                           <h3>Web Developer</h3>
//                           <p>ABC Corporation</p>
//                           <p>Location: Hyderabad</p>
//                           <p>Posted on: January 26, 2023</p>
//                           <label>
//                               <input type="radio" name="apply" />Apply
//                           </label>
//                       </li>
//                   </ul> */}
//               </section>
//           </main>
//           <footer>
//               <p>&copy; 2023 Placement Management System</p>
//           </footer>

//     </div>
//   )
// }

// export default Viewjobs




// ViewJobOpportunity.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/viewjobs.css'
import Studentnav from './Studentnav';
import Jobcard from './Jobcard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
const studentId=sessionStorage.getItem("studentId");
const ViewJobOpportunity = () => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        // Fetch the list of posted jobs from your server when the component mounts
        async function fetchJobs() {
            try {
                const response = await axios.get('http://localhost:5000/student/viewjob');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        fetchJobs();
    }, []);
    const applyfunc=async(jobId)=>{
        // console.log(jobId);
        // console.log(studentId);
        try{
            await axios.post(`http://localhost:5000/student/appliedJob/${studentId}`,{jobId}).then(()=>{
                toast.success("Apllied Successfully");
            });
        }
        catch (error) {
            console.error('Error applying for job:', error);
            toast.error("Error applying for job");
        }
    }
    
    return (
        <>
            <ToastContainer/>
            <div className="viewjob-container">
               <Studentnav heading={"View Available Jobs"}/>
                <h2 className='viewjob-title'>View Job Opportunities</h2>
                <div className="card-holder">
                {jobs.map((job,index)=>(<div className="viewjob-card " >
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{ left: '90%', zIndex: '1' }}></span>
                    <div key={index}>
                        <Jobcard title={job.jobTitle} company={job.company} location={job.location} description={job.jobDescription} apply={()=>applyfunc(job._id)} />
                    </div>
                </div>
                ))}
                </div>
            </div>
        </>
    );
};

export default ViewJobOpportunity;
