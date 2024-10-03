// const resumeData = {
//     id: "1",
//     studentId: "123",
//     file: "path/to/resume.pdf",
//     uploadedAt: new Date("2023-01-15"),
//     updatedAt: new Date("2023-01-20")
//   };


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    file: {
        type: String,
        required: true
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'StudentProfile',
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;

