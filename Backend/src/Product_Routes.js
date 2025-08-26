const express =require("express")
const Router=express.Router();
const{createProduct,getAllProducts}=require("./Product_Controller")
Router.post("/products",createProduct);
Router.get("/products/Vikas-Kurmi17560",getAllProducts);
module.exports=Router;