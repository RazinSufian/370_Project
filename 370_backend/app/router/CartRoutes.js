import express from 'express';
import { addToCart, getCartByCustomerId, removeFromCart } from '../controllers/CartController.js';
const router = express.Router();
// Cart routes
router.post('/cart', (req, res) => {
    const { customer_id, product_id } = req.body;
    addToCart(customer_id, product_id)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/cart', (req, res) => {
    const { customer_id } = req.body;
    getCartByCustomerId(customer_id)
        .then(cart => res.send(cart))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/cart', (req, res) => {
    const { customer_id, product_id } = req.body;
    removeFromCart(customer_id, product_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;