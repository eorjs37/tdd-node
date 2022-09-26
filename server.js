const { application } = require("express");
const express = require("express");

//Constants
const PORT = 5000;
const HOST = "127.0.0.1";

//App
const app = express();

//Routes
const productRoutes = require("./routes");
app.use("/api/products", productRoutes);
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello Wordsdsld");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
