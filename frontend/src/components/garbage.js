
                        {/* <div className="fname textfield ">
                            <input className="inputfield" type="text" placeholder='First Name' />
                        </div> */}
                        {/* <div className="lname textfield ">
                            <input className="inputfield" type="text" placeholder='Last Name' />
                        </div> */}
        //  const postdata = async (e) => {
    
        //      console.log("Post");
        //      e.preventDefault();
        //     //  const { name, email, phone, work, password, cpassword } = user;
        //      const{name,email,phone,password,gender,dob,department,year,address}=student;
        //      const res = await fetch('/student/register', {
        //          method: "POST",
        //          headers: {
        //              "Content-Type": "application/json"
        //          },
        //          body: JSON.stringify({ name, email, phone, password, gender, dob, department, year, address })
        //      });
    
        //      console.log("post1");
        //      const data = await res.json();
        //      console.log(data);
        //      if (res.status === 400 || !data) {
        //          window.alert("Invalid Registeration");
        //      } else {
        //          window.alert("Registeration Successful");
        //      }
        //  }
/********************************** */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const StudentRegister = () => {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        dob: "",
        department: "",
        year: "",
        address: ""
    });

    const [errors, setErrors] = useState({}); // State to track form validation errors

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setStudent({ ...student, [field]: value });
    }

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        // Validate each required field
        if (student.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (student.email.trim() === "") {
            newErrors.email = "Email is required";
        }
        if (student.phone.trim() === "") {
            newErrors.phone = "Mobile Number is required";
        }
        if (student.password.trim() === "") {
            newErrors.password = "Password is required";
        }
        if (student.gender.trim() === "") {
            newErrors.gender = "Gender is required";
        }
        if (student.dob.trim() === "") {
            newErrors.dob = "Date of birth is required";
        }
        if (student.department.trim() === "") {
            newErrors.department = "Department is required";
        }
        if (student.year.trim() === "") {
            newErrors.year = "Year is required";
        }
        if (student.address.trim() === "") {
            newErrors.address = "Address is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if there are no errors
    }

    const postdata = async (e) => {
        e.preventDefault();
        console.log("Post");

        if (!validateForm()) {
            // Form validation failed, don't submit the form
            return;
        }

        try {
            const { name, email, phone, password, gender, dob, department, year, address } = student;
            const response = await axios.post('/student/register', {
                name,
                email,
                phone,
                password,
                gender,
                dob,
                department,
                year,
                address
            });

            console.log("post1");
            console.log(response.data); // Axios automatically parses JSON response

            if (response.status === 200) {
                window.alert("Registration Successful");
                navigate('/student/login');
            } else {
                window.alert("Invalid Registration");
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred during registration.");
        }
    }

    return (
        <div className='student-container'>
            <div className="signin-holder">
                <div className="signin-container">
                    <h1 className="title">Student Signup</h1>
                    <hr />
                    <form className="signin-form" autoComplete='on'>
                        <div className="name profile-input ">
                            <input className="studentsign-input" type="text" name="name" onChange={handleChange} value={student.name} placeholder='Name' required />
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>
                        <div className="email profile-input ">
                            <input className="studentsign-input" type="email" name="email" onChange={handleChange} value={student.email} placeholder='Email' required />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className="phone profile-input ">
                            <input className="studentsign-input" type="phone" name="phone" onChange={handleChange} value={student.phone} placeholder='Mobile Number' required />
                            {errors.phone && <p className="error-message">{errors.phone}</p>}
                        </div>
                        <div className="password profile-input ">
                            <input className="studentsign-input" type="password" name="password" onChange={handleChange} value={student.password} id="password" placeholder="Password" required />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>
                        <div className="gender profile-input ">
                            <input className="studentsign-input" type="text" name="gender" onChange={handleChange} value={student.gender} placeholder='Gender' required />
                            {errors.gender && <p className="error-message">{errors.gender}</p>}
                        </div>
                        <div className="dob profile-input ">
                            <input className="studentsign-input" type="text" name="dob" onChange={handleChange} value={student.dob} placeholder='Date of birth' required />
                            {errors.dob && <p className="error-message">{errors.dob}</p>}
                        </div>
                        <div className="department profile-input ">
                            <input className="studentsign-input" type="text" name="department" onChange={handleChange} value={student.department} placeholder='Department' required />
                            {errors.department && <p className="error-message">{errors.department}</p>}
                        </div>

                        <div className="year profile-input ">
                            <input className="studentsign-input" type="text" name="year" onChange={handleChange} value={student.year} placeholder='Year' required />
                            {errors.year && <p className="error-message">{errors.year}</p>}
                        </div>
                        <div className="address profile-input ">
                            <textarea name="address" id="address" rows="3" placeholder='Address' value={student
                                .address} onChange={handleChange} required></textarea>
                            {errors.address && <p className="error-message">{errors.address}</p>}
                        </div>
                        {/* <div className="password profile-input ">
                            <input className="studentsign-input" type="password" name="confirm-password" id="confirm-password"
                                placeholder="Confirm Password" />
                        </div> */}
                        <input type="submit" value="signin" id="signinBtn" onClick={postdata} />
                        <div className="login-link">
                            <small>already registered?</small><Link to="/student/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StudentRegister;


{/* <div>
                            <label htmlFor="jobTitle">Job Title:</label>
                            <input type="text" id="jobTitle" name="jobTitle" required />
                        </div>

                        <div>
                            <label htmlFor="company">Company:</label>
                            <input type="text" id="company" name="company" required />
                        </div>
                        <div>
                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" name="location" required />
                        </div>
                        <div>
                            <label htmlFor="description">Job Description:</label>
                            <textarea id="description" name="description" rows="4" required />
                        </div> */}


                        // student.css 
                        
// header {
//     background - color: #3c24c2;
//     color: #fff;
//     padding: 1rem;
//     display: flex;
//     justify - content: space - between;
//     align - items: center;
// }

// nav ul {
//     list - style: none;
//     display: flex;
// }

// nav ul li {
//     margin - right: 1rem;
// }

// nav ul li a {
//     text - decoration: none;
//     color: #fff;
//     transition: color 0.3s;
// }

// nav ul li a:hover {
//     color: #ff9900;
// }

// .main {
//     padding: 2rem;
// }

// .dashboard {
//     background - color: #fff;
//     padding: 2rem;
//     border - radius: 5px;
//     box - shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// footer {
//     text - align: center;
//     padding: 1rem;
//     background - color: #3c24c2;
//     color: #fff;
// }
