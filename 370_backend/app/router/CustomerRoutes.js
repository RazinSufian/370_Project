import express from 'express';
import { createCustomer, deleteCustomer, getCustomerById, updateCustomer } from '../controllers/CustomerController';
const router = express.Router();

// Customer routes
router.post('/customer', (req, res) => {
    const { name, phone, email, pass, division, house_no, city } = req.body;
    createCustomer(name, phone, email, pass, division, house_no, city)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/customer/:customer_id', (req, res) => {
    getCustomerById(req.params.customer_id)
        .then(customer => res.send(customer))
        .catch(error => res.status(404).send(error.message));
});

router.put('/customer/:customer_id', (req, res) => {
    const { name, phone, email, pass, division, house_no, city } = req.body;
    updateCustomer(req.params.customer_id, name, phone, email, pass, division, house_no, city)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/customer/:customer_id', (req, res) => {
    deleteCustomer(req.params.customer_id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;