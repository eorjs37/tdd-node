const peopleModel = require("../models/People");

exports.createPeople = async (req, res, next) => {
    try {
        const createPeople = await peopleModel.create(req.body);
        res.status(201).json(createPeople);
    } catch (error) {
        next(error);
    }
};
