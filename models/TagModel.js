const mongoose = require("mongoose")

const TagSchema = new mongoose.Schema({
    text: {type: String, required: true},
    code: {type: String, required: true},
    posts: [     //array of posts [many posts are stored]
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "posts" //table name of the posts model
        }
    ],
}, {timestamps: true})

const TagModel = mongoose.model("tags", TagSchema)

module.exports = TagModel