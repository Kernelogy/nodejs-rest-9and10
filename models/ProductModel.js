const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    desc: {type: String},
    price: {type: Number, required: true},
    image: {type: String}
}, {timestamps: true})

const ProductModel = mongoose.model("products", ProductSchema)

module.exports = ProductModel