const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    
    message:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: "pending",
    },
})

const supportSchemaModal = mongoose.model('support',supportSchema);

module.exports = supportSchemaModal;