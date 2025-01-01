import express from 'express';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Server is ready!")
});

app.post('/api/products', async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });

    }
    const newproducts = new Product(product);
    try {
        await newproducts.save();
        res.status(200).json({ success: true, message: 'Product created successfully', data: newproducts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});