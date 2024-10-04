const express = require("express")
const router = express.Router()
const TagController = require("../controllers/TagController")

router.post("/tag/insert", TagController.insert)
router.get("/tag/list", TagController.list)

module.exports = router