const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
