-- Active: 1713204719140@@127.0.0.1@3306@370_project
-- Admin Table
CREATE TABLE IF NOT EXISTS `admin` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `pass` VARCHAR(255) NOT NULL, -- This should be hashed
    PRIMARY KEY (`id`)
);
