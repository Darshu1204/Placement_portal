const mongoose = require('mongoose');
const validator = require('validator')
const { Schema } = mongoose //we have to import schema to create Student  Schema
const EventsSchema = new Schema({
    EventName: {
        type: String,
        required: true
    },
    EventDate: {
        type: Date,
        required: true
    },
    EventLocation: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Events', EventsSchema);