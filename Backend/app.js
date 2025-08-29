const express = require("express");
const cors = require("cors"); // <-- Add this line
const app = express();

app.use(cors()); // <-- Enable CORS for all routes
app.use(express.json());

const Product_Routes = require("./src/Product_Routes");

// Use /products as the endpoint for product routes
app.use("/", Product_Routes);

module.exports = app;