const TagModel = require("../models/TagModel")

exports.insert = [(req, res)=>{
    const tag = new TagModel({
        text: req.body.text,
        code: req.body.code
    })
    tag.save()
    .then((savedTag)=>{
        res.send(savedTag)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

exports.list = [(req, res)=>{
    TagModel.find().populate("posts")
    .then((tags)=>{
        res.send(tags)
    })
    .catch((err)=>{
        res.send(err)
    })
}]