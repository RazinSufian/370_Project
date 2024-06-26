import express from 'express';
import { createShop, deleteShop, getAllShops, getShopById, getShopByName, getShopBySellerId, updateShop } from '../controllers/ShopController.js';
const router = express.Router();

// Shop routes
router.post('/', (req, res) => {
    const { seller_id, name, total_categories, phone, division, house, city, fb, insta } = req.body;
    console.log(req.body);
    createShop(seller_id, name, total_categories, phone, division, house, city, fb, insta)
        .then(result => res.status(201).send(result))
        .catch(error => {
            console.log(error);
            res.status(500).send(error.message)});
});

router.get('/:shop_id', (req, res) => {
    getShopById(req.params.shop_id)
        .then(shop => res.send(shop))
        .catch(error => res.status(404).send(error.message));
});

router.get('/shop', (req, res) => {
    getAllShops()
        .then(shop => res.send(shop))
        .catch(error => res.status(500).send(error.message));
});

router.get('/seller/:seller_id', (req, res) => {
    getShopBySellerId(req.params.seller_id)
        .then(shop => res.send(shop))
        .catch(error => res.status(404).send(error.message));
});

router.get('/shop/:name', (req, res) => {
    getShopByName(req.params.name)
        .then(shop => res.send(shop))
        .catch(error => res.status(404).send(error.message));
});

router.put('/:shop_id', (req, res) => {
    const { seller_id, name, total_categories, phone, division, house, city, fb, insta } = req.body;
    updateShop(req.params.shop_id, seller_id, name, total_categories, phone, division, house, city, fb, insta)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/:shop_id', (req, res) => {
    deleteShop(req.params.shop_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;