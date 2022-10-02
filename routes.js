const express = require("express");
var router = express.Router();
const productController = require("./controller/product");
const peopleController = require("@/controller/people");

router.post("/", productController.creatProduct);
router.get("/people", peopleController.createPeople);

module.exports = router;
