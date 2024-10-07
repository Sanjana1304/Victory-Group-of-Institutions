
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
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
    message:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: "open",
    },
    DateOfEnquiry:{
        type: Date,
        default: Date.now,
    }
})

const contactSchemaModel = mongoose.model('enquiries',contactSchema);

module.exports = contactSchemaModel;
