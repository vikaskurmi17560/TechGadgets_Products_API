const express = require("express");
const app = express();

app.use(express.json());

app.get('/product', (req, res) => {
  console.log('Product here');
  res.send("Product route working!");
});

module.exports = app;
