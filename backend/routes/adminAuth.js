const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const PostJob = require('../models/PostJob');
const Events = require('../models/Events');
const Admin = require('../models/Admin');
router.post('/register', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ error: errors.array() });
    }
    try {
        let admin = await Admin.findOne({ aemail: req.body.aemail });
        if (admin) {
            return res.status(400).send("Admin With this Email Id Already exist")
        }
        admin = await Admin.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            aemail: req.body.aemail,
            username: req.body.username,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            phoneNumber: req.body.phoneNumber,
            role: req.body.role,
            department: req.body.department
        });
        res.json(admin);
    } catch (error) {
        console.log(error)
    }
})

// // route 3:Authenticate the admin Login:POST "localhost:5000/api/adminAuth/adminlogin"  required registeration 
router.post('/login', [body('aemail', "Enter a valid Email").isEmail(),
body('password', 'Password cannot be blank').exists()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const { aemail, password } = req.body;
    try {
        //Checking admin Already present or not
        let admin = await Admin.findOne({ aemail: req.body.aemail });
        //checking is admin  registered or not 
        if (!admin) {
            return res.status(400).json({ error: "Please Try to Login with Valid Credentials " });
        }
        //         const salt = await bcrypt.genSalt(10);
        //         // const securePassword = await bcrypt.hash(admin.password, salt);
        //         // console.log(email,password,admin.password)
        //         // let passwordComapare=await bcrypt.compare(securePassword,password);
        let passwordComapare = password === admin.password ? "True" : "false";
        if (!passwordComapare) {
            return res.status(400).json({ error: "Please Try to Login with Valid Credentials 2" });
            // return res.status(400).json({ error: "Invalid Password" });
        }
        //         const data = {
        //             admin: {
        //                 id: admin.id
        //             }
        //         }
        //         const authtoken = jwt.sign(data, JWT_SECRET);
        //         // res.json(authtoken);
        res.json("Logged In");

        //         res.json({ authtoken: authtoken, desc: "logged In" });
    } catch (error) {
        console.log(error);
    }
});
router.post('/postjob', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        //Making profile If it not Already Exist
        let postjob = await PostJob.findOne({ jobTitle: req.body.jobTitle, company: req.body.comapany, location: req.body.location });
        if (postjob) {
            res.status(400).send("This JOB is Already posted");
        }
        postjob = await PostJob.create({
            jobTitle: req.body.jobTitle,
            location: req.body.location,
            company: req.body.company,
            jobDescription: req.body.jobDescription
        });
        res.json(postjob)
    } catch (error) {
        console.log(error);
    }
});



router.post('/company', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        //Making profile If it not Already Exist
        let company = await Company.findOne({ jobTitle: req.body.jobTitle, company: req.body.comapany, location: req.body.location });
        if (company) {
            res.status(400).send("This JOB is Already posted");
        }
        company = await Company.create({
            name: req.body.name,
            description: req.body.description,
            industry: req.body.industry,
            location: req.body.location,
            website: req.body.website,
            contactEmail: req.body.contactEmail,
            contactPhone: req.body.contactPhone,
        });
        res.json(company)
    } catch (error) {
        console.log(error);
    }
});



router.post('/events', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        //Making profile If it not Already Exist
        let event = await Events.findOne({ EventName: req.body.EventName, EventDate: req.body.EventDate, EventLocation: req.body.EventLocation });
        if (event) {
            return res.status(400).send("This event is Already posted");
        }
        event = await Events.create({
            EventName: req.body.EventName,
            EventLocation: req.body.EventLocation,
            EventDate: req.body.EventDate
        });
        return res.status(200).json(event)
    } catch (error) {
        console.log(error);
        return res.status(500).json("Some Internal Error Occured");
    }
});

router.get('/events',async(req,res)=>{
    try {
        const events=await Events.find();
        // console.log(events);
        res.status(200).json(events);
    } catch (error) {
        console.error('Error While Fetching Event:', error);
        res.status(500).json({ error: 'Internal server error' });
        // console.log(error);
    }
});
router.delete('/events/:id', async (req, res) => {
    try {
        const eventId = req.params.id;

        // Find the event by ID and delete it
        const deletedEvent = await Events.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.json({ message: "Event deleted successfully", deletedEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;


// {