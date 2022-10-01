const productModel = require("../models/Product");
exports.creatProduct = (req, res, next) => {
    const createProduct = productModel.create(req.body);
    res.status(201).json(createProduct);
};

exports.hello = (_, res, next) => {
    res.send("hello world");
};
