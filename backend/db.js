// const mongoose=require('mongoose')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoUrl = process.env.mongoUrl;
// const mongoUrl='mongodb+srv://guptayogesh:0aPNS9sUFwOLGXsP@registeration.hdgongd.mongodb.net/test';

const connectToMongo = async () => {
    // mongoose.connect(mongoUrl,()=>{
    //     console.log("Connected To the database");
    // }  //show error
    try {

        await mongoose.connect("mongodb://localhost:27017/Placement1").then(() => {
            console.log('Connected to MongoDB');
        }).catch(err => console.error('Error connecting to MongoDB:', err));
    } catch (err) {
        console.log("database Connection :" + err);
    }
}

module.exports = connectToMongo;