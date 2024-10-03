import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Studentnav from './Studentnav';
const ApplyJob = () => {
    const studentId = sessionStorage.getItem("studentId");
    const [appliedJob, setAppliedJob] = useState([]);

    useEffect(() => {
        // Fetch the list of posted jobs from your server when the component mounts
        async function appliedJobfunc() {
            try {
                const response = await axios.get(`http://localhost:5000/student/getAppliedJob/${studentId}`);
                setAppliedJob(response.data);
                console.log(appliedJob);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        appliedJobfunc();
    }, []);
    useEffect(()=>{
        console.log(appliedJob);

    },[appliedJob])

    return (
        <div>
            <div className="viewjob-container">
                <Studentnav heading={"View Available Jobs"} />
                <h2 className='viewjob-title'>Applied Job</h2>
                <div className="card-holder">
                    {appliedJob.map((applied, index) => (<div className="viewjob-card " >
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{ left: '90%', zIndex: '1' }}></span>
                        {/* <img src={imageUrl} className="card-img-top" alt="..." /> */}
                        <div className="card-content " >
                            {/* <h2>{applied.title}</h2> */}
                            <h5 className="card-heading" style={{ fontSize: '20px' }}> Job Title:{applied.jobTitle}</h5>
                            <p className="card-text"> Company:{applied.company}</p>
                            <p className="card-text"> Location:{applied.location}</p>
                            <p className="card-text"> Description:{applied.jobDescription}</p>
                            {/* <input type="checkbox" name="" id="" value="Apply"/> */}
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ApplyJob