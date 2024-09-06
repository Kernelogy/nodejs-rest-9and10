const mongoose = require("mongoose")

//1. Define a Schema
const UserSchema = new mongoose.Schema({
    username:   {type: String, required: true},
    // email:      {type: String, required: true},
    // contact:    {type: String},
    password:   {type:String, required: true},
    contacts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "contacts"
        }
    ],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    }
}, {timestamps: true})
//2. Create a Model using Schema
const UserModel = mongoose.model("users", UserSchema)
//3. Export the model for import
module.exports = UserModel  //exports only one element