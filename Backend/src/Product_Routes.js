require("dotenv").config(); 
const express = require("express");
const Router = express.Router();
const { createProduct, getAllProducts } = require("./Product_Controller");
Router.post(process.env.ROUTE_PREFIX + "/create", createProduct);
Router.get("/", getAllProducts);
module.exports = Router;