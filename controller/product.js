const productModel = require("../models/Product");
exports.creatProduct = async (req, res, next) => {
    try {
        const createProduct = await productModel.create(req.body);
        res.status(201).json(createProduct);
    } catch (error) {
        next(error);
    }
};

exports.getProducts = async (req, res, next) => {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
};

exports.hello = (_, res, next) => {
    res.send("hello world");
};
