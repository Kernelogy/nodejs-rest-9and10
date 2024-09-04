const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")
app.use(express.json())
app.use("/files",express.static(__dirname + "/public"))
const MONGODB_URL = "mongodb://127.0.0.1:27017/ecommerce_v1"

mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log(`${MONGODB_URL} connection Successfull...`)
    })
    .catch((err)=>{
        console.error("Error in connecting to mongodb", err.message)
    })

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

app.post('/upload/single', uploader.single('uploaded_file'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    console.log(req.file, req.body)
    console.log(Date.now())
    res.status(200).send("File Uploaded Successfully...!")
});

app.post("/upload/multiple", uploader.array("uploaded_file", 10), (req, res) => {
    console.log(req.files)
    return res.send("Multiple files Uploaded Successfully...!")
})
/*
const UserController = require("./controllers/UserController")  
const router = express.Router()
router.post("/user/insert", UserController.insert) 
router.get("/user/list", UserController.list)
app.use(router)
*/
// app.post("/user/insert", UserController.insert) 
// app.get("/user/list", UserController.list)

// Activate the routes by linking the route file
// Method 1
// const UserRoute = require("./routes/UserRoute")
// app.use(UserRoute)

// Activate the routes by linking the route file
// Method 2
app.use(require("./routes/UserRoute"))
app.use(require("./routes/ProductRoute"))


app.listen(8080, () => {
    console.log("Server Listening on Port 8080")
})
























