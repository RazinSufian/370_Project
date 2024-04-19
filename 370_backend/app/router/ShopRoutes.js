import express from 'express';
import { createShop, deleteShop, getShopById, updateShop } from '../controllers/ShopController';
const router = express.Router();

// Shop routes
router.post('/shop', (req, res) => {
    const { seller_id, name, total_categories, phone, division, house, city, fb, insta } = req.body;
    createShop(seller_id, name, total_categories, phone, division, house, city, fb, insta)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/shop/:shop_id', (req, res) => {
    getShopById(req.params.shop_id)
        .then(shop => res.send(shop))
        .catch(error => res.status(404).send(error.message));
});

router.put('/shop/:shop_id', (req, res) => {
    const { seller_id, name, total_categories, phone, division, house, city, fb, insta } = req.body;
    updateShop(req.params.shop_id, seller_id, name, total_categories, phone, division, house, city, fb, insta)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/shop/:shop_id', (req, res) => {
    deleteShop(req.params.shop_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;