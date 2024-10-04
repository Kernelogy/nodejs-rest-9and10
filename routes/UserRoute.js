const express = require("express")
const router = express.Router()

const UserController = require("../controllers/UserController")  

router.post("/user/insert", UserController.insert) 
router.post("/user/insertWithAddress", UserController.insertWithAddress) 
router.post("/user/insertWithContacts", UserController.insertWithContacts) 
router.get("/user/list", UserController.list)
router.get("/user/listPage", UserController.listPage)
router.post("/user/login", UserController.login)
router.delete("/user/delete/:id", UserController.delete)


module.exports = router
