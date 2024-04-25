import { pool } from "../../config/database.js";
import jwt from 'jsonwebtoken';

// Customer controller

export const getAllCustomers = async () => {
    const [rows] = await pool.execute('SELECT * FROM customer');
    return rows;
}

export const createCustomer = async (name, phone, email, pass, division, house_no, city) => {
    const [result] = await pool.execute(`INSERT INTO customer (name, phone, email, pass, division, house_no, city) VALUES (?, ?, ?, ?, ?, ?, ?)`, [name, phone, email, pass, division, house_no, city]);
    return result;
};

export const getCustomerById = async (customer_id) => {
    const [rows] = await pool.execute(`SELECT * FROM customer WHERE customer_id = ?`, [customer_id]);
    return rows;
};

export const getCustomerBytoken = async (token) => {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const [rows] = await pool.execute(`SELECT * FROM customer WHERE customer_id = ?`, [user.customer_id]);
    return rows;
};

export const updateCustomer = async (customer_id, name, phone, email, pass, division, house_no, city) => {
    const [result] = await pool.execute(`UPDATE customer SET name = ?, phone = ?, email = ?, pass = ?, division = ?, house_no = ?, city = ? WHERE customer_id = ?`, [name, phone, email, pass, division, house_no, city, customer_id]);
    return result;
};

export const deleteCustomer = async (customer_id) => {
    const [result] = await pool.execute(`DELETE FROM customer WHERE customer_id = ?`, [customer_id]);
    return result;
};
