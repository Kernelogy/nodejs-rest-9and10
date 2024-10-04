const express = require("express")
const router = express.Router()
const AuthController = require("../controllers/AuthController")

router.post("/user/register", AuthController.register)
router.post("/user/signin", AuthController.signin)

module.exports = router