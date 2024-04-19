-- Active: 1713204719140@@127.0.0.1@3306@370_project
-- selecting_products_cart Table
CREATE TABLE IF NOT EXISTS `selecting_products_cart` (
    `customer_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    PRIMARY KEY (`customer_id`, `product_id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`),
    FOREIGN KEY (`product_id`) REFERENCES `product_info`(`product_id`)
);
