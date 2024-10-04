const PostModel = require("../models/PostModel")
const TagModel = require("../models/TagModel")

exports.insert = [(req, res)=>{
    const post = new PostModel({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        author: req.body.author,
        tags: req.body.tags
    })
    post.save()
    .then((savedPost)=>{
        res.send(savedPost)
    })
    .catch((err)=>{
        res.send(err)
    })
}]
exports.insertWithTag = [(req, res)=>{
    const post = new PostModel({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        author: req.body.author,
        tags: req.body.tags
    })
    post.save()
    .then(async (savedPost)=>{
        for(let i=0; i<savedPost.tags.length; i++){
            // await TagModel.updateOne(
            //     {_id: savedPost.tags[i]}, //Criteria or Condition
            //     {posts:[savedPost._id]} // data to update
            // )
            await TagModel.updateOne(
                {_id: savedPost.tags[i]}, //Criteria or Condition
                {
                    $push: {
                        posts: savedPost._id
                }} // data to update
            )            
            .then((tag)=>{
                console.log(tag)
            })
        }
       res.send(savedPost)
    })
    .catch((err)=>{
        res.send(err)
    })
}]

exports.list = [(req, res)=>{
    PostModel.find().populate("tags")
    .then((posts)=>{
        res.send(posts)
    })
    .catch((err)=>{
        res.send(err)
    })
}]