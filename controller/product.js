const productModel = require("../models/Product");
exports.creatProduct = () => {
    productModel.create();
};
