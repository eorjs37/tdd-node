const express = require("express");
require("module-alias/register");
//Constants
const PORT = 5000;
const HOST = "127.0.0.1";

//App
const app = express();

//Routes
const productRoutes = require("./routes");

//Mongoose
const mongoose = require("mongoose");

//body-parser
const bodyParser = require("body-parser");

mongoose
    .connect("mongodb+srv://maxgunchoi:chleorjs12~@cluster1.drtpwyu.mongodb.net/products?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    })
    .then(() => console.log(`MongoDb Connected`))
    .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello Wordsdsld");
});
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;
