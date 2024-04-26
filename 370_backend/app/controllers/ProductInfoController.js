import { pool } from "../../config/database.js";

// Product Info controller
// Product Info controller
export const createProduct = async (shop_id, name, quantity, approval, price, review, image_url, product_description) => {
    console.log("Received parameters:", { shop_id, name, quantity, approval, price, review, image_url, product_description });

    // Check for undefined values and handle them appropriately
    if ([shop_id, name, quantity, approval, price, review, image_url, product_description].some(item => item === undefined)) {
        console.error("One or more parameters are undefined.");
        throw new Error("Input parameters must not be undefined.");
    }

    const [result] = await pool.execute(
        `INSERT INTO product_info (shop_id, name, quantity, approval, price, review, image_url, product_description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [shop_id, name, quantity, approval, price, review, image_url, product_description]
    );
    return result;
};



export const getProductById = async (product_id) => {
    const [rows] = await pool.execute(`
        SELECT pi.*, s.name AS shop_name
        FROM product_info pi
        INNER JOIN shop s ON pi.shop_id = s.shop_id
        WHERE pi.product_id = ?
    `, [product_id]);
    return rows;
};
export const getAllProducts = async () => {
    const [rows] = await pool.execute(`
        SELECT pi.*, s.name AS shop_name
        FROM product_info pi
        INNER JOIN shop s ON pi.shop_id = s.shop_id
    `);
    return rows;
}


export const getProductByShopId = async (shop_id) => {
    const [rows] = await pool.execute(` 
        SELECT pi.*, s.name AS shop_name
        FROM product_info pi
        INNER JOIN shop s ON pi.shop_id = s.shop_id
        WHERE pi.shop_id = ?
    `, [shop_id]);
    return rows;
}

export const getProductByShopName = async (shop_name) => {
    const [rows] = await pool.execute(` 
        SELECT pi.*, s.name AS shop_name
        FROM product_info pi
        INNER JOIN shop s ON pi.shop_id = s.shop_id
        WHERE s.name = ?
    `, [shop_name]);
    return rows;
}

export const updateProduct = async (product_id, shop_id, name, quantity, approval, price, review) => {
    const [result] = await pool.execute(`UPDATE product_info SET shop_id = ?, name = ?, quantity = ?, approval = ?, price = ?, review = ? WHERE product_id = ?`, [shop_id, name, quantity, approval, price, review, product_id]);
    return result;
};

export const deleteProduct = async (product_id) => {
    try {
        // Disable foreign key checks
        await pool.execute('SET FOREIGN_KEY_CHECKS=0;');
        
        // Delete the product
        const [result] = await pool.execute('DELETE FROM product_info WHERE product_id = ?', [product_id]);
        console.log("Product deleted successfully.");
        
        // Enable foreign key checks
        await pool.execute('SET FOREIGN_KEY_CHECKS=1;');
        
        return result;
    } catch (error) {
        console.error("Failed to delete product:", error);
        throw error; // Rethrow or handle as necessary
    }
};


