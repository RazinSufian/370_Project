// server.js
import express from 'express';
import cors from 'cors';

import {
  getAllAdmins,
  getAllCustomers,
  getAllSellers,
  getAllShops,
  getAllProducts,
  getAllOrders,
  getAllCartEntries
} from './config/database.js';
//Ensure the path to your database.js is correct


const app = express();
const port = 3000;

// Apply middleware
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses incoming JSON requests

// Endpoint to retrieve all admins
app.get('/admins', async (req, res) => {
  try {
    const admins = await getAllAdmins();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Endpoint to retrieve all customers
app.get('/customers', async (req, res) => {
  try {
    const customers = await getAllCustomers();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Endpoint to retrieve all sellers
app.get('/sellers', async (req, res) => {
  try {
    const sellers = await getAllSellers();
    res.json(sellers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Endpoint to retrieve all shops
app.get('/shops', async (req, res) => {
  try {
    const shops = await getAllShops();
    res.json(shops);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Endpoint to retrieve all products
app.get('/products', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Endpoint to retrieve all orders
app.get('/orders', async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Endpoint to retrieve all cart entries
app.get('/carts', async (req, res) => {
  try {
    const cartEntries = await getAllCartEntries();
    res.json(cartEntries);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
