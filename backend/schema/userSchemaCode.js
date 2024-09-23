
const mongoose = require("mongoose");
bcrypt = require("bcryptjs");

const courseSchema = new mongoose.Schema({
    courseName:{
        type: String,
        required: true,
    },
    courseDescription:{
        type: String,
        required: true,
    },
    coursePrice:{
        type: Number,
        required: true,
    },
    courseRegDate:{
        type: String,
        required: true,
    },
    courseDuration:{
        type: String,
        required: true,
    },
    coursePhoto:{
        type: String,
    },
    courseInstructor:{
        type: String,
        required: true,
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
        type: String,
    },
    experience:{
        type: String,
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
