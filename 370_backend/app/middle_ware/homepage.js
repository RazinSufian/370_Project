import express from 'express';
// This goes up two levels from middle_ware to 370_backend, then into the config directory
// Adjust this import statement
import { getTopProducts, getTopSellers } from '../../config/homepaga_data.js';



const router = express.Router();

// Route to get top products
router.get('/top-products', async (req, res) => {
    try {
        const products = await getTopProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching top products:', error);
        res.status(500).send('Server error');
    }
});

// Route to get top sellers
router.get('/top-sellers', async (req, res) => {
    try {
        const sellers = await getTopSellers();
        res.json(sellers);
    } catch (error) {
        console.error('Error fetching top sellers:', error);
        res.status(500).send('Server error');
    }
});

export default router;
