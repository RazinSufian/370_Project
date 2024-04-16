import mysql from "mysql2"

// Create a connection pool to the database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: "",
  database: '370_project',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

// Function to get all admins
const getAllAdmins = async () => {
  const [rows] = await pool.query('SELECT * FROM admin');
  return rows;
};

// Function to get all customers
const getAllCustomers = async () => {
  const [rows] = await pool.query('SELECT * FROM customer');
  return rows;
};

// Function to get all sellers
const getAllSellers = async () => {
  const [rows] = await pool.query('SELECT * FROM seller');
  return rows;
};

// Function to get all shops
const getAllShops = async () => {
  const [rows] = await pool.query('SELECT * FROM shop');
  return rows;
};

// Function to get all product info
const getAllProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM product_info');
  return rows;
};

// Function to get all orders
const getAllOrders = async () => {
  const [rows] = await pool.query('SELECT * FROM `order`');
  return rows;
};

// Function to get all selecting_products_cart entries
const getAllCartEntries = async () => {
  const [rows] = await pool.query('SELECT * FROM selecting_products_cart');
  return rows;
};

export {
    getAllAdmins,
    getAllCustomers,
    getAllSellers,
    getAllShops,
    getAllProducts,
    getAllOrders,
    getAllCartEntries
  };