import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductByShopId, getProductByShopName, updateProduct } from '../controllers/ProductInfoController.js';
const router = express.Router();

router.post('/', (req, res) => {
    const { shop_id, name, quantity, approval, price, review, image_url, product_description } = req.body;
    createProduct(shop_id, name, quantity, approval, price, review, image_url, product_description)
        .then(result => res.status(201).send(result))
        .catch(error => {
            console.log(error);
            res.status(500).send(error.message);
        });
});

router.get('/', (req, res) => {
    getAllProducts()
        .then(products => res.send(products))
        .catch(error => res.status(500).send(error.message));
})

router.get('/:product_id', (req, res) => {
    getProductById(req.params.product_id)
        .then(product => res.send(product))
        .catch(error => res.status(404).send(error.message));
});
router.get('/shop/:shop_id', (req, res) => {
    getProductByShopId(req.params.shop_id)
        .then(product => res.send(product))
        .catch(error => res.status(404).send(error.message));
})

router.get('/shop/:name', (req, res) => {
    getProductByShopName(req.params.name)
        .then(product => res.send(product))
        .catch(error => res.status(404).send(error.message));
})
router.put('/:product_id', (req, res) => {
    const { shop_id, name, quantity, approval, price, review } = req.body;
    updateProduct(req.params.product_id, shop_id, name, quantity, approval, price, review)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/:product_id', (req, res) => {
    deleteProduct(req.params.product_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});
export default router;