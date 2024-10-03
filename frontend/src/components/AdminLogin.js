import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {TextField} from '@mui/material'
const Admin = () => {
    const [alogged,setAlogged]=useState('false');
    const [aemail,setAemail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleLogin=async(e)=>{
        e.preventDefault();
        console.log("Post");
        try {
            const response = await axios.post('http://localhost:5000/admin/login', {
                aemail,
                password
            });
            const data = response.data;
            if (response.status === 400 || !data ) {
                window.alert("Login Failed ");
                console.log("Login Failed ");
            } else {
                console.log("Login Successfully");
                window.alert("Login Successfully");
                navigate('/admin')
            }
        }
        catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred during Login.");
        }
    }

    return (
    <>  
        <div className='adminlogin-holder'>
            <div className="adminlogin-container">
                <h1 className="title">Admin Login</h1>
                <hr/>
                <form className="adminlogin-form" autocomplete="off" >
                    <div className="username login-textfield ">
                        <input className="login-inputfield" type="email" placeholder='Username' id="username" value={aemail} onChange={(e)=>{setAemail(e.target.value)}} required />
                        {/* <TextField varient='standard' className="login-inputfield" type="email" label='Enter Username' id="username" value={aemail} onChange={(e)=>{setAemail(e.target.value)}} required /> */}
                    </div>
                    <div className="password login-textfield ">
                        <input className="login-inputfield" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                        {/* <TextField varient='standard' className="login-inputfield" type="password" name="password" id="password" label="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required /> */}
                    </div>
                    <input type="submit" value="Login" id="submitBtn" onClick={handleLogin}/>
                    {/* <p>OR</p> */}
                    <div className="signup-link">
                        <small>Not a member?</small><Link to="/admin/register">Signup</Link>
                    </div>
                </form>
            </div>
            <footer>
                <p>&copy; 2023 Placement Management System</p>
            </footer>
        </div>
    </>
    )
}    

export default Admin


