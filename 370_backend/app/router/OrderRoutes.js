import express from 'express';
import { createOrder, deleteOrder, getAllOrders, getOrderById, getOrdersByCustomerId, getOrdersByProductId, getOrdersByShopId, updateOrder } from '../controllers/OrderController.js';
const router = express.Router();
// Order routes
router.post('/', (req, res) => {
    const { customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status } = req.body;
    console.log(req.body);
    createOrder(customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status)
        .then(result => res.status(201).send(result))
        .catch(error => {
            console.log(error);
            res.status(500).send(error.message)});
});

router.get('/:order_id', (req, res) => {
    getOrderById(req.params.order_id)
        .then(order => res.send(order))
        .catch(error => res.status(404).send(error.message));
});

router.get('/order', (req, res) => {
    getAllOrders()
        .then(order => res.send(order))
        .catch(error => res.status(500).send(error.message));
});

router.get('/customer/:customer_id', (req, res) => {
    getOrdersByCustomerId(req.params.customer_id)
        .then(order => res.send(order))
        .catch(error => res.status(404).send(error.message));
});

router.get('/product/:product_id', (req, res) => {
    getOrdersByProductId(req.params.product_id)
        .then(order => res.send(order))
        .catch(error => res.status(404).send(error.message));
});

router.get('/shop/:shop_id', (req, res) => {
    getOrdersByShopId(req.params.shop_id)
        .then(order => res.send(order))
        .catch(error => res.status(404).send(error.message));
});

router.put('/:order_id', (req, res) => {
    const { customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status } = req.body;
    updateOrder(req.params.order_id, customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/:order_id', (req, res) => {
    deleteOrder(req.params.order_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;