const express = require("express");
var router = express.Router();
const productController = require("./controller/product");
const peopleController = require("./controller/people");

router.post("/", productController.creatProduct);
router.get("/", productController.getProducts);
router.post("/people", peopleController.createPeople);
router.get("/:productId", productController.getProductById);
router.put("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);

module.exports = router;
