-- Active: 1713204719140@@127.0.0.1@3306@370_project

-- Seller Table
CREATE TABLE IF NOT EXISTS `seller` (
    `seller_id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `pass` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`seller_id`)
);
