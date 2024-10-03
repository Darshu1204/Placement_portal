const express = require('express');
const StudentProfile = require('../models/StudentProfile');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const Student= require('../models/Student');
const fetchuser = require('../middleware/fetchuser');
const PostJob = require('../models/PostJob');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const JWT_SECRET = process.env.JWT_SECRET;
// route 1:Create  a user using :POST "localhost:5000/api/studentAuth/register" doesn't required login 
// router.post('/register', [
//     body('password', 'password must be atleast of 5 character').isLength({ min: 6 })], async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ error: errors.array() });
//         }
//         try {

//             let student = await Student.findOne({ email: req.body.email });
//             if (student) {
//                 return res.status(400).json({ error: "Sorry a user with this email already exists" });
//             }
//             // const salt = await bcrypt.genSalt(10);
//             // const securePassword = await bcrypt.hash(req.body.password, salt);
//             student = await Student.create({
//                 name: req.body.name,
//                 email: req.body.email,
//                 // password: securePassword,
//                 password:req.body.password
//             })
//             // .then(user=>res.json(user));
//             const data = {
//                 student: {
//                     id: student.id
//                 }
//             }
//             const authtoken = jwt.sign(data, JWT_SECRET);
//             res.json({authtoken:authtoken,student:student});
//             // res.json(student);

//         } catch (error) {
//             console.error(error.message);
//             res.status(500).send("Internal Server Error Occured");
//         }
//         // res.send(req.body)
//     });

// route 2:Create  a Student Profile using :POST "localhost:5000/student/register" doesn't required auth 
router.post('/register', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
        // console.log(errors.array());
    }
    try {
        //Checking Student Already present or not
        let studentProfile = await StudentProfile.findOne({ email: req.body.email });
        if (studentProfile) {
            return res.status(400).json({ error: "Sorry a use with this Email id Already Exist " });
            // console.log("Sorry a use with this Email id Already Exist ");
            // window.alert("Sorry a use with this Email id Already Exist ");
        }
        //Making profile If it not Already Exist
        studentProfile = await StudentProfile.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            gender: req.body.gender,
            dob: req.body.dob,
            department: req.body.department,
            year: req.body.year,
            cgpa: req.body.cgpa,
            address: req.body.address,
        })
        // res.json(studentProfile)
        const data = {
            studentProfile: {
                id: studentProfile._id
            }
        }
        // console.log("1");
        // const authtoken = jwt.sign(data, JWT_SECRET);
        // // res.json(authtoken);
        // console.log("2");
        // res.json({ authtoken: authtoken, studentProfile: studentProfile });
        res.status(200).json(studentProfile);
    } catch (error) {
        console.log(error);
    }
});

// // route 3:Authenticate the Student Login:POST "localhost:5000/api/studentAuth/studentlogin"  required registeration 
router.post('/login', [body('email', "Enter a valid Email").isEmail(),
body('password', 'Password cannot be blank').exists()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const { email, password } = req.body;
    try {
        //Checking Student Already present or not
        let student = await StudentProfile.findOne({ email: req.body.email });
        //checking is student  registered or not 
        if (!student) {
            return res.status(400).json({ error: "Please Try to Login with Valid Credentials " });
        }
        //         const salt = await bcrypt.genSalt(10);
        //         // const securePassword = await bcrypt.hash(student.password, salt);
        //         // console.log(email,password,student.password)
        //         // let passwordComapare=await bcrypt.compare(securePassword,password);
        let passwordComapare = password === student.password ? "True" : "false";
        if (!passwordComapare) {
            return res.status(400).json({ error: "Please Try to Login with Valid Credentials 2" });
            // return res.status(400).json({ error: "Invalid Password" });
        }
        //         const data = {
        //             student: {
        //                 id: student.id
        //             }
        //         }
        //         const authtoken = jwt.sign(data, JWT_SECRET);
        //         // res.json(authtoken);
        // res.json({message:"Logged In",student});
        res.json({ student });

        //         res.json({ authtoken: authtoken, desc: "logged In" });
    } catch (error) {
        console.log(error);
    }
});
// // router.get('/getstudent',fetchuser,async(req,res)=>{
// //     try{
// //         studentId = req.student.id;
// //         const student = await Student.findById(studentId).select("-password");
// //         // const student =s await StudentProfile.findById(studentId).select("-password");
// //         res.send(student);
// //     } catch (error) {
// //         console.error(error.message);
// //         res.status(500).send("Internal Server Error Occured");
// //     }
// // });

router.get('/viewjob', async (req, res) => {
    try {
        // Use Mongoose to query your database for job postings
        const jobs = await PostJob.find(); // Assuming you have a "Job" model
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching job postings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



router.post('/appliedJob/:id', async (req, res) => {
    try {
        //Checking Student Already present or not
        const studentId = req.params.id;
        // console.log(studentId);
        let studentProfile = await StudentProfile.findById({ _id: studentId });
        const { jobId } = req.body;
        let applyJob = await PostJob.findById({ _id:jobId });
        console.log(studentId,jobId)
        if (studentProfile.applyJobId.includes(jobId)) {
            return res.status(400).json({ error: "You have already applied for this job" });
        }
        studentProfile.applyJobId.push(applyJob._id)
        await studentProfile.save();
        applyJob.studentId.push(studentProfile._id)
        await applyJob.save();
        res.status(200).json({ message: "Job applied successfully", studentProfile, applyJob });
    } catch (error) {
        console.log('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getAppliedJob/:id', async (req, res) => {
    try {
        const appliedJobs = await PostJob.find({ studentId: req.params.id });
        // console.log(appliedJobs)
        res.status(200).json(appliedJobs);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})
// router.post('resume/:id',async(req,res)=>{
//     try {
//         let student=await studentProfile.findById({_id:id});
//         res.status(200).json(student);
//         if(student){
//             const {file}=req.body;
//             const resume= new Resume({file,studentId:req.params.id});
//             resume.save().then(()=>{
//                 res.status(200).json("Resume uploaded SuccessFully");
//             })
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })

module.exports = router;



