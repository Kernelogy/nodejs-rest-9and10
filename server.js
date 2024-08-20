// const http = require("http")
// const fs = require("fs")
// console.log("Hello")
// http.createServer((req, res)=>{
//     fs.readFile("login.html", (err, data)=>{
//         res.write(data.toString())
//         res.end()
//     })
// }).listen(8080)

//Import the expressjs library
const express = require("express")
// Create an express app
// Initiate the express app
const app = express()


//Cofigure method and url fot http request & reponse
app.use(express.json())
app.use(express.urlencoded())
app.use("/files",express.static(__dirname + "/public"))

// console.log(__dirname)//predefined nodejs variable gives project path

app.get("/sayHi", (req, res)=>{
    res.send("Hello World")
})
app.post("/num", (req, res)=>{
    res.send(""+Math.random())
})
app.get("/user", (req, res)=>{
    const user = {
        name: "Mukilan",
        age: 35,
        gender: "Male"
    }
    res.send(user)
})
/*
// http://localhost:8080/login?username=mukilan&password=12345
app.get("/login", (req, res)=>{
    const username = req.query.username
    const password = req.query.password
    console.log(username, password)
    if(username === "admin" && password === "12345"){
        res.send("Login Success!")
    }
    res.send("Login Failed!")
})
*/
app.post("/login", (req, res)=>{
    const username = req.body.username
    const password = req.body.password
    console.log(username, password)
    if(username === "admin" && password === "12345"){
        res.send("Login Success!")
    }
    res.send("Login Failed!")
})
const users = [
    {
        id: 0,
        name: "Mukilan"
    },
    {
        id: 1,
        name: "Manu"
    },
    {
        id: 2,
        name: "Anbu"
    }
]
app.get("/getUser/:id",(req, res)=>{
    const id = req.params.id
    res.send(users[id])
})
//Make the server to watch the port
app.listen("8080", ()=>{
    console.log("Server Listening in port 8080...")
})
/*
http methods
    GET     => Default Method
    POST
    PUT
    DELETE
    PATCH
    OPTIONS
*/