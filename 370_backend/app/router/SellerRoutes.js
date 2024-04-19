import express from 'express';
import { createSeller, deleteSeller, getSellerById, updateSeller } from '../controllers/SellerController';
const router = express.Router();

// Seller routes
router.post('/seller', (req, res) => {
    const { name, email, pass } = req.body;
    createSeller(name, email, pass)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/seller/:seller_id', (req, res) => {
    getSellerById(req.params.seller_id)
        .then(seller => res.send(seller))
        .catch(error => res.status(404).send(error.message));
});

router.put('/seller/:seller_id', (req, res) => {
    const { name, email, pass } = req.body;
    updateSeller(req.params.seller_id, name, email, pass)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/seller/:seller_id', (req, res) => {
    deleteSeller(req.params.seller_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;
