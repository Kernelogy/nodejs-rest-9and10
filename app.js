const express = require("express")
const app = express()
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


const UserController = require("./controllers/UserController")  
app.post("/user/insert", UserController.insert) 
app.get("/user/list", UserController.list)


app.listen(8080, () => {
    console.log("Server Listening on Port 8080")
})
























