import { pool } from "../../config/database";

// Product Info controller
export const createProduct = async (shop_id, name, quantity, approval, price, review) => {
    const [result] = await pool.execute(`INSERT INTO product_info (shop_id, name, quantity, approval, price, review) VALUES (?, ?, ?, ?, ?, ?)`, [shop_id, name, quantity, approval, price, review]);
    return result;
};

export const getProductById = async (product_id) => {
    const [rows] = await pool.execute(`SELECT * FROM product_info WHERE product_id = ?`, [product_id]);
    return rows;
};

export const updateProduct = async (product_id, shop_id, name, quantity, approval, price, review) => {
    const [result] = await pool.execute(`UPDATE product_info SET shop_id = ?, name = ?, quantity = ?, approval = ?, price = ?, review = ? WHERE product_id = ?`, [shop_id, name, quantity, approval, price, review, product_id]);
    return result;
};

export const deleteProduct = async (product_id) => {
    const [result] = await pool.execute(`DELETE FROM product_info WHERE product_id = ?`, [product_id]);
    return result;
};