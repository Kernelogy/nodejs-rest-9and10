const ProductController = require("../controllers/ProductController")
const AuthMiddleware = require("../middleware/AuthMiddleware")

const express = require("express")
const router = express.Router()

router.post("/product/insert", ProductController.insert)
router.get("/product/list", AuthMiddleware.verifyToken, ProductController.list)
router.get("/product/findGreaterByPrice/:price", ProductController.findGreaterByPrice)
router.get("/product/findLesserByPrice/:price", ProductController.findLesserByPrice)
router.get("/product/findRangeByPrice/:start/:end", ProductController.findRangeByPrice)

module.exports = router