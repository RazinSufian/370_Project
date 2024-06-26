import { pool } from "../../config/database.js";

// Shop controller
export const createShop = async (seller_id, name, total_categories, phone, division, house, city, fb, insta) => {
    const [result] = await pool.execute(`INSERT INTO shop (seller_id, name, total_categories, phone, division, house, city, fb, insta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [seller_id, name, total_categories, phone, division, house, city, fb, insta]);
    return result;
};

export const getShopById = async (shop_id) => {
    const [rows] = await pool.execute(`SELECT * FROM shop WHERE shop_id = ?`, [shop_id]);
    return rows;
};

export const getAllShops = async () => {
    const [rows] = await pool.execute(`SELECT * FROM shop`);
    return rows;
};

export const getShopBySellerId = async (seller_id) => {
    const [rows] = await pool.execute(`SELECT * FROM shop WHERE seller_id = ?`, [seller_id]);
    return rows;
};

export const getShopByName = async (name) => {
    const [rows] = await pool.execute(`SELECT * FROM shop WHERE name = ?`, [name]);
    return rows;
}
export const updateShop = async (shop_id, seller_id, name, total_categories, phone, division, house, city, fb, insta) => {
    const [result] = await pool.execute(`UPDATE shop SET seller_id = ?, name = ?, total_categories = ?, phone = ?, division = ?, house = ?, city = ?, fb = ?, insta = ? WHERE shop_id = ?`, [seller_id, name, total_categories, phone, division, house, city, fb, insta, shop_id]);
    return result;
};

export const deleteShop = async (shop_id) => {
    const [result] = await pool.execute(`DELETE FROM shop WHERE shop_id = ?`, [shop_id]);
    return result;
};
