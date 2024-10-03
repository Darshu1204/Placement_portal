const mongoose = require('mongoose');
const validator = require('validator')
const { Schema } = mongoose //we have to import schema to create Student  Schema
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
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
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1,
        max: 4
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
    //     phoneNumber: {
    //         type: String,
    //         validate: {
    //             validator: function (v) {
    //                 return /\d{10}/.test(v); // Assuming you want a 10-digit phone number
    //             },
    //             message: props => `${props.value} is not a valid phone number!`
    //         },
    //         required: [true, 'Phone number is required']
    //     }
    // });
    address: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Student', StudentSchema);