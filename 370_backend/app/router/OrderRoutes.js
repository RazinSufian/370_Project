import express from 'express';
import { createOrder, deleteOrder, getOrderById, updateOrder } from '../controllers/OrderController';
const router = express.Router();
// Order routes
router.post('/order', (req, res) => {
    const { customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status } = req.body;
    createOrder(customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/order/:order_id', (req, res) => {
    getOrderById(req.params.order_id)
        .then(order => res.send(order))
        .catch(error => res.status(404).send(error.message));
});

router.put('/order/:order_id', (req, res) => {
    const { customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status } = req.body;
    updateOrder(req.params.order_id, customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/order/:order_id', (req, res) => {
    deleteOrder(req.params.order_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;