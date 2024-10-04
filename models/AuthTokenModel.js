const mongoose = require("mongoose")

const AuthTokenSchema = new mongoose.Schema({
    token: {type: String, required: true},
    user: {type: String, require: true}
}, {timestamps: true})

const AuthTokenModel = mongoose.model("authtokens", AuthTokenSchema)

module.exports = AuthTokenModel