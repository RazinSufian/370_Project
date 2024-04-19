import express from 'express';

import { getTopProducts, getTopSellers } from '../controllers/homepaga_data.js';



const router = express.Router();


router.get('/top-products', async (req, res) => {
    try {
        const products = await getTopProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching top products:', error);
        res.status(500).send('Server error');
    }
});


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
