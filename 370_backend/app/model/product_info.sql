-- Active: 1713204719140@@127.0.0.1@3306@370_project
-- Product_info Table
CREATE TABLE IF NOT EXISTS `product_info` (
    `product_id` BIGINT NOT NULL AUTO_INCREMENT,
    `shop_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `quantity` INT NOT NULL,
    `approval` BOOLEAN NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `review` TEXT,
    PRIMARY KEY (`product_id`),
    FOREIGN KEY (`shop_id`) REFERENCES `shop`(`shop_id`)
);
