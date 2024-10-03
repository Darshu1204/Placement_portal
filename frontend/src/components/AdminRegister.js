import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/adminregister.css';
import axios from 'axios'; 
const AdminRegister = () => {
    const navigate=useNavigate();
    const [admin,setAdmin]=useState({
        firstName:"",
        lastName:"",
        aemail:"",
        username:"",
        password:"",
        confirmPassword:"",
        phoneNumber:"",
        role:"",
        department:""
    });
    const handleChange=async (e)=>{
        e.preventDefault();
        const field=e.target.name;
        const value=e.target.value;
        setAdmin({...admin,[field]:value});
    }
    const handleRegister=async(e)=>{
        e.preventDefault();
        try{
            const {firstName,lastName,aemail,username,password,confirmPassword,phoneNumber,role,department}=admin;
            if(password!==confirmPassword){
                console.log("password and Confirm Password must be same");
                window.alert("password and Confirm Password must be same");
            }
            const response=await axios.post('http://localhost:5000/admin/register',{
                firstName,
                lastName,
                aemail,
                username,
                password,
                confirmPassword,
                phoneNumber,
                role,
                department
            });
            console.log(response.data);
            if (response.status === 400) {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            } else {
                window.alert("Registration Successful");
                console.log("Registration Successful");
                navigate('/admin/login');
            }

        }catch(err){
            console.log("Error:",err);
        }
        
    }
  return (
      <div className='admin-container'>
          {/* <Adminnav heading="Admin Register"/> */}
          <div className='areg-container'>
              <h2>Administrator Registration </h2>
              <form >
                  <div className="fullname">
                      {/* <label>Full Name:</label> */}
                      <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={admin.firstName}
                          onChange={handleChange}
                          required
                      />
                      <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={admin.lastName}
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <div>
                      {/* <label>Email Address:</label> */}
                      <input
                          type="email"
                          name="aemail"
                          placeholder='Email'
                          value={admin.aemail}
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <div>
                      {/* <label>Username:</label> */}
                      <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={admin.username}
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <div>
                      {/* <label>Password:</label> */}
                      <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={admin.password}
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <div>
                      {/* <label>Confirm Password:</label> */}
                      <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={admin.confirmPassword}
                          onChange={handleChange}
                          required
                      />
                  </div>

                  <div>
                      {/* <label>Phone Number:</label> */}
                      <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={admin.phoneNumber}
                          onChange={handleChange}
                      />
                  </div>

                  <div>
                      {/* <label>Role/Position:</label> */}
                      <input
                          type="text"
                          name="role"
                          placeholder='Role'
                          value={admin.role}
                          onChange={handleChange}
                      />
                  </div>

                  <div>
                      {/* <label>Department:</label> */}
                      <input
                          type="text"
                          name="department"
                          placeholder='Department'
                          value={admin.department}
                          onChange={handleChange}
                      />
                  </div>
                  <div className="btn-div">
                      <button type="submit" onClick={handleRegister}>Register</button>
                  </div>
                {/* <input type="submit" value="Register" id="signinBtn"/> */}
                    <div className="adminlogin-link">
                        <small>already registered?</small><Link to="/admin/login">Login</Link>
                    </div>
              </form>
          </div>
    </div>
  )
}

export default AdminRegister
