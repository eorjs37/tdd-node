const express = require("express");
var router = express.Router();
const productController = require("./controller/product");
const peopleController = require("@/controller/people");

router.get("/one", productController.hello);
router.get("/people", peopleController.createPeople);

module.exports = router;
