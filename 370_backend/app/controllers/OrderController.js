import { pool } from "../../config/database";

// Order controller
export const createOrder = async (customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status) => {
    const [result] = await pool.execute(`INSERT INTO order (customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status]);
    return result;
};

export const getOrderById = async (order_id) => {
    const [rows] = await pool.execute(`SELECT * FROM order WHERE order_id = ?`, [order_id]);
    return rows;
};

export const updateOrder = async (order_id, customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status) => {
    const [result] = await pool.execute(`UPDATE order SET customer_id = ?, product_id = ?, shop_id = ?, payment_method = ?, billing_address = ?, delivery_time = ?, payment_status = ?, shipment_status = ? WHERE order_id = ?`, [customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status, order_id]);
    return result;
};

export const deleteOrder = async (order_id) => {
    const [result] = await pool.execute(`DELETE FROM order WHERE order_id = ?`, [order_id]);
    return result;
};
