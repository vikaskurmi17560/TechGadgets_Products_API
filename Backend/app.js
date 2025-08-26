const express = require("express");
const app = express();
app.use(express.json());
const Product_Routes = require("./src/Product_Routes");

app.use("/", Product_Routes);

module.exports = app;
