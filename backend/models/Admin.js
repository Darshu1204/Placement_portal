const mongoose = require('mongoose');
const { Schema } = mongoose;
// const validator=require("express-validator");
const validator = require('validator');
const AdminSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.length >= 3;
            },
            message: props => `${props.value} is not a valid name. Name must be at least 3 characters long.`
        }
    }, 
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.length >= 3;
            },
            message: props => `${props.value} is not a valid name. Name must be at least 3 characters long.`
        }
    },
    aemail: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: props => `${props.value} is not a valid email address.`
        }
    },
    username: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.length >= 3;
            },
            message: props => `${props.value} is not a valid name. Name must be at least 3 characters long.`
        }
    },
    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    applicants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"StudentProfile"
    }]
});
// module.exports=UserSchema;
module.exports = mongoose.model('Admin', AdminSchema);