import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  try {
    const productsPath = path.join(__dirname, '../data/products.json');
    const productsData = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(productsData);
    
    res.json({
      success: true,
      data: products
    });
  } catch (error) {
    console.error('Error reading products:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products'
    });
  }
});

// Get products by category
router.get('/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    const productsPath = path.join(__dirname, '../data/products.json');
    const productsData = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(productsData);
    
    const filteredProducts = {
      exports: products.exports?.filter((p: any) => 
        p.category.toLowerCase() === category.toLowerCase()
      ) || [],
      imports: products.imports?.filter((p: any) => 
        p.category.toLowerCase() === category.toLowerCase()
      ) || []
    };
    
    res.json({
      success: true,
      data: filteredProducts
    });
  } catch (error) {
    console.error('Error filtering products:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products by category'
    });
  }
});

export default router;