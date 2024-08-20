const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")
app.use(express.json())

const MONGODB_URL = "mongodb://127.0.0.1:27017/ecommerce_v1"

mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log(`${MONGODB_URL} connection Successfull...`)
    })
    .catch((err)=>{
        console.error("Error in connecting to mongodb", err.message)
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



app.listen(8080, () => {
    console.log("Server Listening on Port 8080")
})
























