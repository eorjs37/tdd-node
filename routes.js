const express = require("express");
var router = express.Router();
const productController = require("./controller/product");
const peopleController = require("./controller/people");

router.post("/", productController.creatProduct);
router.post("/people", peopleController.createPeople);

module.exports = router;
