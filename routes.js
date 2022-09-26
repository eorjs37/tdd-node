const express = require("express");
var router = express.Router();
const productController = require("./controller/product");
router.get("/one", productController.hello);

module.exports = router;
