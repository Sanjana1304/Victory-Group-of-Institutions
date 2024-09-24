const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    
    message:{
        type: String,
        required: true,
    },
})

const supportSchemaModal = mongoose.model('support',supportSchema);

module.exports = supportSchemaModal;