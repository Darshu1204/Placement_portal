import React, { useState } from 'react';
import '../styles/postjob.css';
import Adminnav from './Adminnav';
import hiringimg from '../img/hiring.jpg';
import axios from  'axios';
import { useNavigate } from 'react-router-dom';
const PostJobOpportunity = () => {
    const [postjob, setPostjob] = useState({
        jobTitle: "",
        company: "",
        location: "",
        jobDescription: ""
    });
    const handleChange=(e)=>{
        e.preventDefault();
        const field=e.target.name;
        const value=e.target.value;
        setPostjob({...postjob,[field]:value});
    }
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if (!postjob.jobTitle || !postjob.company || !postjob.location || !postjob.jobDescription) {
            window.alert('Please fill in all required fields');
            return;
        }
        try{
            const{ jobTitle,company,location,jobDescription}=postjob;
            const response=await axios.post('http://localhost:5000/admin/postjob',{
                jobTitle, company, location, jobDescription
            });
            console.log("post1");
            console.log(response.data);
            if (response.status === 400) {
                window.alert('Error posting job');
            } else {
                window.alert('Job posted successfully');
                // navigate('/admin'); // Redirect to the view jobs page
            }
            setPostjob({jobTitle: "",company: "",location: "",jobDescription: ""})

        } catch (err) {
            console.error('Error occurred:', err);
        }
        //     if(response.status===400){
        //         window.alert("Invalid Registration");
        //         console.log("Invalid Registration");
        //     }else{
        //         window.alert("Registration Successful");
        //         console.log("Registration Successful");
        //         // useNavigate().('/admin');
        //         navigate('/admin');
        //     }
        // }catch(err){
        //     console.log("error Occured");
        // }
    }
    return (
    <>
    <div className='postjob-container'>
        <Adminnav className="postjob-nav" heading="Post Job"/>
        <div className="postjob-content">

        <div className="left">
            <img className="postjob-img" src={hiringimg} alt="" />
        </div>
        <main className='right'>
                <section className="post-form">
                    <h2>Post Job Opportunity</h2>
                    <form>
                        <div><input type="text" id="jobTitle" name="jobTitle"  placeholder="Job Title" value={postjob.jobTitle} onChange={handleChange} required /></div>
                        <div><input type="text" id="company" name="company" placeholder='Company' value={postjob.company} onChange={handleChange} required /></div>
                        <div><input type="text" id="location" name="location" placeholder='Location' value={postjob.location} onChange={handleChange} required /></div>
                        <div><textarea id="description" name="jobDescription" rows="3" placeholder='Description' value={postjob.jobDescription} onChange={handleChange} required /></div>
                        <button type="submit" onClick={handleSubmit}>Post</button>
                    </form>
                </section>
        </main>
        </div>
        <footer className='postjob-footer'>
            <p>&copy; 2023 Placement Management System</p>
        </footer>
    </div >
    </>
  )
}

export default PostJobOpportunity


