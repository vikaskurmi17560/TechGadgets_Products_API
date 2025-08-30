const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); 
app.use(express.json());

const Product_Routes = require("./src/Product_Routes");

app.use("/api", Product_Routes);

module.exports = app;