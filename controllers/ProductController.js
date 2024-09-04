const ProductModel = require("../models/ProductModel")

const multer = require("multer")   
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
})

const uploader = multer({ storage: storage });

exports.insert = [
  uploader.single("image"),  
  (req, res)=>{
    const product = new ProductModel({
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
        //validates if the image file saved 
        image: req.file ? req.file.filename : null, 
    })

    product.save()
    .then((savedObject)=>{
        res.send(savedObject)
    })
    .catch((err)=>{
        res.send(err)
    })

}]

exports.list = [(req, res)=>{
  ProductModel.find()
  .then((products)=>{
    res.send(products)
  })
  .catch((err)=>{
    res.send(err)
  })
}]