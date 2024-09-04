const ProductController = require("../controllers/ProductController")

const express = require("express")
const router = express.Router()

router.post("/product/insert", ProductController.insert)
router.get("/product/list", ProductController.list)

module.exports = router