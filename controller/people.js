const peopleModel = require("../models/People");

exports.createPeople = (req, res, next) => {
    const createPeople = peopleModel.create(req.body);
    res.status(201).json(createPeople);
};
