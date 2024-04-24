import express from 'express';
const router = express.Router();
import { createAdmin, deleteAdmin, getAdminById, updateAdmin } from '../controllers/AdminController.js';



// Admin routes
router.post('/', (req, res) => {
    const { name, role, pass } = req.body;
    createAdmin(name, role, pass)
        .then(result => res.status(201).send(result))
        .catch(error => res.status(500).send(error.message));
});

router.get('/:id', (req, res) => {
    getAdminById(req.params.id)
        .then(admin => res.send(admin))
        .catch(error => res.status(404).send(error.message));
});

router.put('/:id', (req, res) => {
    const { name, role, pass } = req.body;
    updateAdmin(req.params.id, name, role, pass)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

router.delete('/:id', (req, res) => {
    deleteAdmin(req.params.id)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error.message));
});

export default router;

