const Products = require("./Product_Model")

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Products.create(req.body);
        res.status(201).json({
            success: true,
            data: newProduct,
            message: "Product created successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json({
            success: true,
            data: products,
            message: "Products retrieved successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}