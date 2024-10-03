import React, { useEffect, useState } from 'react';
import '../styles/ApplicationStatus.css';
import Studentnav from './Studentnav';
import axios from 'axios';

const ApplicationStatus = () => {
    const studentId = sessionStorage.getItem("studentId");
    // console.log(studentId)
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

    useEffect(() => {
        console.log(appliedJob);

    }, [appliedJob])
    return (
        <>
            <div>
                <Studentnav heading={"Application Status"} />
                <main>
                    <section className="status-list">
                        <h2>Your Application Status</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Job Title</th>
                                    <th>Company</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td>UI designer</td>
                                    <td>XYZ Corporation</td>
                                    <td>Under Review</td>
                                </tr>
                                <tr>
                                    <td>Marketing Intern</td>
                                    <td>ABC Company</td>
                                    <td>Accepted</td>
                                </tr>
                            </tbody> */}
                            <tbody>
                                {  appliedJob.map((applied, index) => (
                                <tr>
                                    <td>{applied.jobTitle}</td>
                                    <td>{applied.company}</td>
                                    <td>Under Review</td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </section>
                </main>
                <footer>
                    <p>&copy; 2023 Placement Management System</p>
                </footer>
            </div>
        </>
    )
}

export default ApplicationStatus
