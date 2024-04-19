import express from 'express';
import { body, validationResult } from 'express-validator';
import { adminLogin, adminSignup, customerLogin, customerSignup, sellerLogin, sellerSignup } from '../controllers/AuthControllers.js';

const router = express.Router();

// POST /api/signup/admin
router.post('/signup/admin', [
    body('name').notEmpty(),
    body('role').notEmpty(),
    body('pass').isLength({ min: 6 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const result = await adminSignup(req.body.name, req.body.role, req.body.pass);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// POST /api/login/admin
router.post('/login/admin', async (req, res) => {
    try {
        const token = await adminLogin(req.body.name, req.body.pass);
        res.json({ token });
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

// Customer Signup
router.post('/signup/customer', [
    body('name').notEmpty().withMessage('Name is required'),
    body('phone').isMobilePhone().withMessage('Invalid phone number'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('pass').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('division').notEmpty().withMessage('Division is required'),
    body('house_no').notEmpty().withMessage('House number is required'),
    body('city').notEmpty().withMessage('City is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, phone, email, pass, division, house_no, city } = req.body;
        const result = await customerSignup(name, phone, email, pass, division, house_no, city);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Customer Login
router.post('/login/customer', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('pass').exists().withMessage('Password is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const token = await customerLogin(req.body.email, req.body.pass);
        res.json({ token });
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

// Seller Signup
router.post('/signup/seller', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('pass').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, pass } = req.body;
        const result = await sellerSignup(name, email, pass);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Seller Login
router.post('/login/seller', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('pass').exists().withMessage('Password is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const token = await sellerLogin(req.body.email, req.body.pass);
        res.json({ token });
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});
