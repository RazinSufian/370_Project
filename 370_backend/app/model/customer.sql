-- Active: 1713204719140@@127.0.0.1@3306@370_project
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