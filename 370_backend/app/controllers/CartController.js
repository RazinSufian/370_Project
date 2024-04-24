import { pool } from "../../config/database.js";

// Cart controller
export const addToCart = async (customer_id, product_id) => {
    const [result] = await pool.execute(`INSERT INTO selecting_products_cart (customer_id, product_id) VALUES (?, ?)`, [customer_id, product_id]);
    return result;
};

export const getCartByCustomerId = async (customer_id) => {
    const [rows] = await pool.execute(`SELECT * FROM selecting_products_cart WHERE customer_id = ?`, [customer_id]);
    return rows;
};

export const removeFromCart = async (customer_id, product_id) => {
    const [result] = await pool.execute(`DELETE FROM selecting_products_cart WHERE customer_id = ? AND product_id = ?`, [customer_id, product_id]);
    return result;
};
