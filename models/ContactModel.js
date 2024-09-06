const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    type: {type: String, required: true},
    data: {type: String, required: true}
}, {timestamps: true})

const ContactModel = mongoose.model("contacts", ContactSchema)

module.exports = ContactModel