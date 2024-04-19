import { pool } from '../../config/database.js'; // Ensure correct path

// Function to get top products
const getTopProducts = async () => {
    const [rows] = await pool.query(`
        SELECT 
            oi.product_id,
            SUM(1) AS quantity_sold
        FROM 
            \`order\` o
        INNER JOIN 
            \`product_info\` oi ON o.product_id = oi.product_id
        GROUP BY 
            oi.product_id
        ORDER BY 
            quantity_sold DESC
        LIMIT 15;
    `);
    return rows;
};

// Function to get top sellers
const getTopSellers = async () => {
    const [rows] = await pool.query(`
        SELECT 
            s.seller_id,
            s.name AS seller_name,
            COUNT(DISTINCT o.order_id) AS total_sales,
            COUNT(DISTINCT spc.product_id) AS products_added_to_cart
        FROM 
            \`order\` o
        INNER JOIN 
            \`shop\` sh ON o.shop_id = sh.shop_id
        INNER JOIN 
            \`seller\` s ON sh.seller_id = s.seller_id
        LEFT JOIN 
            \`selecting_products_cart\` spc ON o.product_id = spc.product_id
        GROUP BY 
            s.seller_id, s.name
        ORDER BY 
            total_sales DESC, products_added_to_cart DESC;
    `);
    return rows;
};

export { getTopProducts, getTopSellers };
