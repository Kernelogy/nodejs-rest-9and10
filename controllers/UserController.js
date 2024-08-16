const UserModel = require("../models/UserModel")

exports.insert = [(req, res)=>{
    const User = new UserModel({
        username: req.body.username,
        email: req.body.email,
        contact: req.body.contact, 
        password: req.body.password
    })
    User.save()
    .then((savedObject)=>{
        res.send(savedObject)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

exports.list = [(req,res)=>{
    UserModel.find() //returns multiple objects as an array
    .then((users)=>{
        res.send(users)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

exports.login = [(req, res)=>{
    UserModel.findOne({
        username: req.body.username, 
        password: req.body.password
    })
    .then((user)=>{
        /*
        let userFound = false
        if(user){ // True => User data is in database 
            userFound = true
        }
        res.send(userFound)
        */
       user ? res.send(true) : res.send(false)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

















