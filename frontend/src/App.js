import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
// import StudentLogin from './components/StudentLogin';
import Home from './components/Home';
import ApplicationStatus from './components/ApplicationStatus';
import Viewjobs from './components/viewjobs';
import ViewApplicant from './components/ViewApplicant';
import StudentDashboard from './components/StudentDashboard';
import StudentLogin from './components/StudentLogin';
import UpdateResume from './components/UpdateResume';
import AdminDashboard from './components/AdminDashboard';
import PostJob from './components/PostJob';
import AdminRegister from './components/AdminRegister';
import StudentRegister from './components/StudentRegister';
import Company from './components/Company';
import Profile from './components/Profile';
import AppliedJob from './components/AppliedJob';
import AddEvents from './components/AddEvents'
function App() {
  const[loggedin,setLoggedin]=useState(false);
  const Slogged=()=>{
    setLoggedin(true);
  }
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/student" isloggedin={loggedin} element={<StudentDashboard />} />
          <Route exact path="/admin/register" element={<AdminRegister />} />
          <Route exact path="/student/register" isloggedin={loggedin} element={<StudentRegister />} />
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/events" element={<AddEvents />} />
          <Route exact path="/student/login" isloggedin={loggedin} element={<StudentLogin />} />
          {/* <Route exact path="/ApplicationStatus" element={<ApplicationStatus />} /> */}
          <Route exact path="/student/viewjob" element={<Viewjobs />} />
          <Route exact path="/student/profile" element={<Profile />} />
          <Route exact path="/student/appliedJob" element={<AppliedJob />} />
          <Route exact path="/student/updateresume" element={<UpdateResume />} />
          <Route exact path="/student/applicationstatus" element={<ApplicationStatus />} />
          <Route exact path="/admin/viewapplicant" element={<ViewApplicant />} />
          <Route exact path="/admin/company" element={<Company />} />
          <Route exact path="/admin/postjob" element={<PostJob/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
