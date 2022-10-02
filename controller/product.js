const productModel = require("../models/Product");
exports.creatProduct = async (req, res, next) => {
    try {
        const createProduct = await productModel.create(req.body);
        res.status(201).json(createProduct);
    } catch (error) {
        next(error);
    }
};

exports.hello = (_, res, next) => {
    res.send("hello world");
};
