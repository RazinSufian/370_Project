import { pool } from "../../config/database.js";

// Order controller
export const createOrder = async (customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status) => {
    const [result] = await pool.execute(`INSERT INTO \`order\` (customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status]);
    return result;
};

export const getOrderById = async (order_id) => {
    const [rows] = await pool.execute(`SELECT * FROM \`order\` WHERE order_id = ?`, [order_id]);
    return rows;
};

export const getAllOrders = async () => {
    const [rows] = await pool.execute(`SELECT * FROM \`order\``);
    return rows;
};

export const getOrdersByCustomerId = async (customer_id) => {
    const [rows] = await pool.execute(`SELECT * FROM \`order\` WHERE customer_id = ?`, [customer_id]);
    return rows;
};

export const getOrdersByProductId = async (product_id) => {
    const [rows] = await pool.execute(`SELECT * FROM \`order\` WHERE product_id = ?`, [product_id]);
    return rows;
};

export const getOrdersByShopId = async (shop_id) => {
    const [rows] = await pool.execute(`SELECT * FROM \`order\` WHERE shop_id = ?`, [shop_id]);
    return rows;
};

export const updateOrder = async (order_id, customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status) => {
    const [result] = await pool.execute(`UPDATE \`order\` SET customer_id = ?, product_id = ?, shop_id = ?, payment_method = ?, billing_address = ?, delivery_time = ?, payment_status = ?, shipment_status = ? WHERE order_id = ?`, [customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status, order_id]);
    return result;
};

export const deleteOrder = async (order_id) => {
    const [result] = await pool.execute(`DELETE FROM \`order\` WHERE order_id = ?`, [order_id]);
    return result;
};
