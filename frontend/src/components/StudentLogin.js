import {React,useState} from 'react'
// import '../styles/studentlogin.css'
import {Link} from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';

const Studentlogin = (props) => {
    const [slogged, setSlogged] = useState(false);
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleLogin=async(e)=>{
        e.preventDefault();
        // console.log("Post");
        try {
            const response = await axios.post('http://localhost:5000/student/login', {
                email,
                password
            });
            const data=response.data;
            // console.log(response);
            if(response.status===400 || !data || (data.email===email && data.password===password)) {
                window.alert("Login Failed ");
                console.log("Login Failed ");
            }else{
                console.log("Login Successfully");
                sessionStorage.setItem("studentId",data.student._id);
                sessionStorage.setItem("studentName",data.student.name);
                window.alert("Login Successfully");
                navigate('/student')
            }
        }
        catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred during Login.");
        }
    }
    
  return (
    <div > 
          <div className='studentlogin-holder'>
              <div className="studentlogin-container">
                    <h1 className="title">Student Login</h1>
                    <hr/>
                    <div className="left">
                        
                    <form className="studentlogin-form" autoComplete="off" >
                        <div className="username login-textfield ">
                            <input className="login-inputfield" type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Username' id="username" required />
                        </div>
                        <div className="password login-textfield ">
                            <input className="login-inputfield" type="password" name="password" value={password} id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" required />
                        </div>
                        <div className="submit">
                            <input type="submit" onClick={handleLogin} value="Login" id="submitBtn" />
                        </div>
                        <div className="signup-link">
                            <small>Not a member?</small><Link to="/student/register">Signup</Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2023 Placement Management System</p>
            </footer>
    </div>
  )
}

export default Studentlogin