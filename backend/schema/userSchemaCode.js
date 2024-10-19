
const mongoose = require("mongoose");
bcrypt = require("bcryptjs");

const courseSchema = new mongoose.Schema({
    courseName:{
        type: String,
        required: true,
    },
    courseCategory:{
        type: String,
    },
    courseDescription:{
        type: String,
        required: true,
    },
    coursePrice:{
        type: Number,
    },
    hasPaid:{
        type: Boolean,
        default: false,
    },
    courseRegDate:{
        type: String,
        required: true,
    },
    courseEnrollDate:{
        type: Date,
    },
    courseDuration:{
        type: String,
        required: true,
    },
    courseInstructor:{
        type: String,
    },
    courseStatus:{
        type: String,
        default: "In Progress",
    },
    courseType:{
        type: String,
    },
    courseFeedback:{
        type: String,
    },
    certificateUrl:{
        type: String,
    },
})

const userSchema = new mongoose.Schema({
    email:{
        unique: true,
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    usertype:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
    education:{
        type: [String],
    },
    experience:{
        type: [String],
    },
    courses:[courseSchema],

})

userSchema.pre("save",async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
});

const userSchemaModel = mongoose.model('users',userSchema);

module.exports = userSchemaModel;
