const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json
    } catch (error) {

    }
}