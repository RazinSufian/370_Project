import { pool } from "../../config/database.js";
import { comparePassword, generateToken, hashPassword } from "../middle_ware/authHelper.js";

// Admin Signup
export const adminSignup = async (name, role, pass) => {
    const hashedPassword = await hashPassword(pass);
    const [result] = await pool.execute(`INSERT INTO admin (name, role, pass) VALUES (?, ?, ?)`, [name, role, hashedPassword]);
    return result;
};

// Admin Login
export const adminLogin = async (name, pass) => {
    const [rows] = await pool.execute(`SELECT * FROM admin WHERE name = ?`, [name]);
    if (rows.length === 0) {
        throw new Error('Admin not found');
    }
    const isValid = await comparePassword(pass, rows[0].pass);
    if (!isValid) {
        throw new Error('Invalid password');
    }
    return generateToken({ id: rows[0].id, name: rows[0].name, role: rows[0].role });
};

// Customer Signup
export const customerSignup = async (name, phone, email, pass, division, house_no, city) => {
    const hashedPassword = await hashPassword(pass);
    const [result] = await pool.execute(`INSERT INTO customer (name, phone, email, pass, division, house_no, city) VALUES (?, ?, ?, ?, ?, ?, ?)`, [name, phone, email, hashedPassword, division, house_no, city]);
    return result;
};

// Customer Login
export const customerLogin = async (email, pass) => {
    const [rows] = await pool.execute(`SELECT * FROM customer WHERE email = ?`, [email]);
    if (rows.length === 0) {
        throw new Error('Customer not found');
    }
    const isValid = await comparePassword(pass, rows[0].pass);
    if (!isValid) {
        throw new Error('Invalid password');
    }
    return generateToken({ customer_id: rows[0].customer_id, name: rows[0].name, email: rows[0].email });
};

// Seller Signup
export const sellerSignup = async (name, email, pass) => {
    const hashedPassword = await hashPassword(pass);
    const [result] = await pool.execute(`INSERT INTO seller (name, email, pass) VALUES (?, ?, ?)`, [name, email, hashedPassword]);
    return result;
};

// Seller Login
export const sellerLogin = async (email, pass) => {
    const [rows] = await pool.execute(`SELECT * FROM seller WHERE email = ?`, [email]);
    if (rows.length === 0) {
        throw new Error('Seller not found');
    }
    const isValid = await comparePassword(pass, rows[0].pass);
    if (!isValid) {
        throw new Error('Invalid password');
    }
    return generateToken({ seller_id: rows[0].seller_id, name: rows[0].name, email: rows[0].email });
};
