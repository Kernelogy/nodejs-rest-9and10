const express = require("express")
const router = express.Router()
const PostController = require("../controllers/PostController")

router.get("/post/list", PostController.list)
router.post("/post/insert", PostController.insert)
router.post("/post/insertWithTag", PostController.insertWithTag)

module.exports = router