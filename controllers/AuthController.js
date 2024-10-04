const UserModel = require("../models/UserModel")
const AuthTokenModel = require("../models/AuthTokenModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.register = [async (req, res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const User = new UserModel({
        username: req.body.username,
        email: req.body.email,
        contact: req.body.contact, 
        password: hashedPassword
    })
    User.save()
    .then((savedObject)=>{
        res.send(savedObject)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

exports.signin = [  (req, res)=>{
    UserModel.findOne({
        username: req.body.username
    })
    .then(async (user)=>{
        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
        if(passwordMatch){
            const token = jwt.sign(
            {
                userid: user._id,         // data
                email: user.email
            }, 
            "this-can-be-any-random-key", // password for encryption
            {
                expiresIn: "1h"           // configuration
            })
            const authToken = new AuthTokenModel({
                token: token,
                user: user._id
            })

            authToken.save()
            .then((savedToken)=>{
                console.log(savedToken)
                res.send({token: token})
            })
            .catch((err)=>{
                res.send(err)
            })

        }else{
            res.send(false) 
        }      
    })
    .catch((err)=>{
        res.send(err)
    })
}]