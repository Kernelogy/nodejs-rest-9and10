const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String},
    author: {type: String},
    tags: [     //array of tags [many tags are stored]
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tags" //table name of the tags model
        }
    ],
}, {timestamps: true})

const PostModel = mongoose.model("posts", PostSchema)


module.exports = PostModel












// const PostModel = mongoose.model("posts", new mongoose.Schema({
//     title: {type: String, required: true},
//     content: {type: String, required: true},
//     image: {type: String},
//     author: {type: String},
//     tags: [     //array of tags [many tags are stored]
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "tags" //table name of the tags model
//         }
//     ],
//     }, {timestamps: true}) 
// )