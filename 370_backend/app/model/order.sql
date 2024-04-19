-- Active: 1713204719140@@127.0.0.1@3306@370_project
-- Order Table
CREATE TABLE IF NOT EXISTS `order` (
    `order_id` BIGINT NOT NULL AUTO_INCREMENT,
    `customer_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    `shop_id` BIGINT NOT NULL,
    `payment_method` VARCHAR(255) NOT NULL,
    `billing_address` VARCHAR(255) NOT NULL,
    `delivery_time` DATETIME NOT NULL,
    `payment_status` VARCHAR(255) NOT NULL,
    `shipment_status` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`order_id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`),
    FOREIGN KEY (`product_id`) REFERENCES `product_info`(`product_id`),
    FOREIGN KEY (`shop_id`) REFERENCES `product_info`(`shop_id`)
);
