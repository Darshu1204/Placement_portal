// const mongoose = require('mongoose');
// const { Schema } = mongoose;
// // const validator=require("express-validator");
// const validator = require('validator');
// const StudentSchema = new Schema({
//     name: {
//         type: String,
//         required: true,

//         validate: {
//             validator: function (value) {
//                 return value.length >= 3;
//             },
//             message: props => `${props.value} is not a valid name. Name must be at least 3 characters long.`
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: {
//             validator: value => validator.isEmail(value),
//             message: props => `${props.value} is not a valid email address.`
//         }
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });
// // module.exports=UserSchema;
// module.exports = mongoose.model('student', StudentSchema);