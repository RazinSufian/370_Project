-- Active: 1713204719140@@127.0.0.1@3306@370_project
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
