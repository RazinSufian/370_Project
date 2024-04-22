import { pool } from "../../config/database.js";

// Admin controller
export const createAdmin = async (name, role, pass) => {
    const [result] = await pool.execute(`INSERT INTO admin (name, role, pass) VALUES (?, ?, ?)`, [name, role, pass]);
    return result;
};

export const getAdminById = async (id) => {
    const [rows] = await pool.execute(`SELECT * FROM admin WHERE id = ?`, [id]);
    return rows;
};

export const updateAdmin = async (id, name, role, pass) => {
    const [result] = await pool.execute(`UPDATE admin SET name = ?, role = ?, pass = ? WHERE id = ?`, [name, role, pass, id]);
    return result;
};

export const deleteAdmin = async (id) => {
    const [result] = await pool.execute(`DELETE FROM admin WHERE id = ?`, [id]);
    return result;
};
