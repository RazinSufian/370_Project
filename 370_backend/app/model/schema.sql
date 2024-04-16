-- Active: 1713204719140@@127.0.0.1@3306@370_project
-- Admin Table
CREATE TABLE IF NOT EXISTS `admin` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `pass` VARCHAR(255) NOT NULL, -- This should be hashed
    PRIMARY KEY (`id`)
);

-- Customer Table
CREATE TABLE IF NOT EXISTS `customer` (
    `customer_id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `pass` VARCHAR(255) NOT NULL,
    `division` VARCHAR(255) NOT NULL,
    `house_no` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`customer_id`)
);

-- Seller Table
CREATE TABLE IF NOT EXISTS `seller` (
    `seller_id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `pass` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`seller_id`)
);

-- Shop Table
CREATE TABLE IF NOT EXISTS `shop` (
    `shop_id` BIGINT NOT NULL AUTO_INCREMENT,
    `seller_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `total_categories` INT NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `division` VARCHAR(255) NOT NULL,
    `house` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `fb` VARCHAR(255),
    `insta` VARCHAR(255),
    PRIMARY KEY (`shop_id`),
    FOREIGN KEY (`seller_id`) REFERENCES `seller`(`seller_id`)
);

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

-- selecting_products_cart Table
CREATE TABLE IF NOT EXISTS `selecting_products_cart` (
    `customer_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    PRIMARY KEY (`customer_id`, `product_id`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`),
    FOREIGN KEY (`product_id`) REFERENCES `product_info`(`product_id`)
);

