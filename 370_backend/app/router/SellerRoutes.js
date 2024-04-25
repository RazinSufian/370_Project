import express from 'express';
import { createSeller, deleteSeller, getAllSellers, getSellerById, getSellerByToken, updateSeller } from '../controllers/SellerController.js';
const router = express.Router();

// Seller routes
router.get('/', (req, res) => {
    getAllSellers()
        .then(sellers => res.send(sellers))
        .catch(error => res.status(500).send(error.message));
})

router.post('/', (req, res) => {
    const { name, email, pass } = req.body;
    createSeller(name, email, pass)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/:seller_id', (req, res) => {
    getSellerById(req.params.seller_id)
        .then(seller => res.send(seller))
        .catch(error => res.status(404).send(error.message));
});

router.get('/token/:token', (req, res) => {
    // console.log(req.params.token);
    getSellerByToken(req.params.token)
        .then(seller => res.send(seller))
        .catch(error => {
            console.log(error);
            res.status(404).send(error.message)});
    })
router.put('/:seller_id', (req, res) => {
    const { name, email, pass } = req.body;
    updateSeller(req.params.seller_id, name, email, pass)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/:seller_id', (req, res) => {
    deleteSeller(req.params.seller_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;
