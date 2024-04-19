import { pool } from "../../config/database";

// Cart controller
export const addToCart = async (customer_id, product_id) => {
    const [result] = await pool.execute(`INSERT INTO selecting_products_cart (customer_id, product_id) VALUES (?, ?)`, [customer_id, product_id]);
    return result;
};

export const removeFromCart = async (customer_id, product_id) => {
    const [result] = await pool.execute(`DELETE FROM selecting_products_cart WHERE customer_id = ? AND product_id = ?`, [customer_id, product_id]);
    return result;
};
