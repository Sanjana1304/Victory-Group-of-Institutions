const mongoose = require("mongoose");

const courseRequestSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    courseTitle:{
        type: String,
        required: true,
    },
    courseCategory:{
        type: String,
        required: true,
    },
    courseDescription:{
        type: String,
    },
})

const courseRequestModel = mongoose.model('course_requests',courseRequestSchema);

module.exports = courseRequestModel;