const express = require("express");
const app = express();
app.use(express.json());
const Product_Routes = require("./src/Product_Routes");

app.use("/api/v1", Product_Routes)

module.exports = app;
