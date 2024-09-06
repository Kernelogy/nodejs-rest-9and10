const UserModel = require("../models/UserModel")
const AddressModel = require("../models/AddressModel")
const ContactModel = require("../models/ContactModel")

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

exports.insertWithContacts = [async (req, res)=>{
    const rContacts = req.body.contacts
    let savedContactIds = []

    // rContacts.map((e)=>{
    for(let i=0; i<rContacts.length; i++){
        const e = rContacts[i]
        const contact = new ContactModel({
            data: e.data,
            type: e.type
        })
        await contact.save()
        .then((savedContact)=>{
            savedContactIds.push(savedContact._id)
        })
    }
    // })

    const User = new UserModel({
        username: req.body.username,
        contacts: savedContactIds, 
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


exports.insertWithAddress = [(req, res)=>{
    const address = new AddressModel({
        plotNo: req.body.address.plotNo,
        street: req.body.address.street,
        city: req.body.address.city,
        landmark: req.body.address.landmark,
        pincode: req.body.address.pincode,
        state: req.body.address.state,
        country: req.body.address.country
    })

    address.save()
    .then((savedAddress)=>{
        const User = new UserModel({
            username: req.body.username,
            email: req.body.email,
            contact: req.body.contact, 
            password: req.body.password,
            address: savedAddress._id
        })
        User.save()
        .then((savedObject)=>{
            res.send(savedObject)
        })
        .catch((err)=>{
            res.send(err)
        })    
    })

    
}]

exports.list = [(req,res)=>{
    // UserModel.find() //returns multiple objects as an array
    // UserModel.find().populate("address")
    UserModel.find().populate(["address", "contacts"])
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

exports.delete = [(req, res)=>{
    UserModel.deleteOne({_id: req.params.id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

















