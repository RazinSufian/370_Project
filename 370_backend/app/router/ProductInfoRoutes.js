import express from 'express';
import { createProduct, deleteProduct, getProductById, updateProduct } from '../controllers/ProductInfoController';
const router = express.Router();

// Product Info routes
router.post('/product_info', (req, res) => {
    const { shop_id, name, quantity, approval, price, review } = req.body;
    createProduct(shop_id, name, quantity, approval, price, review)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/product_info/:product_id', (req, res) => {
    getProductById(req.params.product_id)
        .then(product => res.send(product))
        .catch(error => res.status(404).send(error.message));
});

router.put('/product_info/:product_id', (req, res) => {
    const { shop_id, name, quantity, approval, price, review } = req.body;
    updateProduct(req.params.product_id, shop_id, name, quantity, approval, price, review)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/product_info/:product_id', (req, res) => {
    deleteProduct(req.params.product_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});
export default router;