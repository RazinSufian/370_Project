import { pool } from "../../config/database.js";

// Seller controller

export const getAllSellers = async () => {
    const [rows] = await pool.execute('SELECT * FROM seller');
    return rows;
}
export const createSeller = async (name, email, pass) => {
    const [result] = await pool.execute(`INSERT INTO seller (name, email, pass) VALUES (?, ?, ?)`, [name, email, pass]);
    return result;
};

export const getSellerById = async (seller_id) => {
    const [rows] = await pool.execute(`SELECT * FROM seller WHERE seller_id = ?`, [seller_id]);
    return rows;
};

export const updateSeller = async (seller_id, name, email, pass) => {
    const [result] = await pool.execute(`UPDATE seller SET name = ?, email = ?, pass = ? WHERE seller_id = ?`, [name, email, pass, seller_id]);
    return result;
};

export const deleteSeller = async (seller_id) => {
    const [result] = await pool.execute(`DELETE FROM seller WHERE seller_id = ?`, [seller_id]);
    return result;
};
