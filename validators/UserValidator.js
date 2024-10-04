const UserModel = require("../models/UserModel")
const {body} = require("express-validator")

exports.insert = [
    body("username").trim().isLength({min: 5}).withMessage("Username must be above 5 characters"),
    body("email").trim().isEmail().withMessage("Give a proper email address"),
    body("username").trim().custom((value)=>{
        return UserModel.findOne({username: value})
        .then((user)=>{
            if(user!=null){
                return Promise.reject("Username already exists")
            }
        })
    })
]