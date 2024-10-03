
const mongoose = require('mongoose');
const validator = require('validator')
const { Schema } = mongoose //we have to import schema to create Student  Schema
const StudentProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => { validator.isEmail(value) },
            message: props => `${props.value} is Not a Valid Email! Enter the Valid Email`
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => { value.length === 10 },
            message: props => { `Please Enter a Valid Number` }
        }
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    cgpa: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    applyJobId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PostJob"
    }]
    // resume: {
    //     // You can use the 'Mixed' type to store file information
    //     type: mongoose.Schema.Types.Mixed,
    // },
});
module.exports = mongoose.model('StudentProfile', StudentProfileSchema);