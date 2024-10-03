const mongoose = require('mongoose');
const validator = require('validator')
const { Schema } = mongoose //we have to import schema to create Student  Schema
const PostJobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true,
    },
    studentId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"StudentProfile"
    }]
});
module.exports = mongoose.model('PostJob', PostJobSchema);