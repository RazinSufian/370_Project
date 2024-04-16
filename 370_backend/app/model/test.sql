-- Active: 1713204719140@@127.0.0.1@3306@370_project
-- Inserting into the `admin` table
INSERT INTO `admin` (`name`, `role`, `pass`) VALUES
('Admin1', 'super', 'pass1'),
('Admin2', 'product', 'pass2'),
('Admin3', 'user', 'pass3'),
('Admin4', 'order', 'pass4'),
('Admin5', 'analytics', 'pass5');

-- Inserting into the `customer` table
INSERT INTO `customer` (`name`, `phone`, `email`, `pass`, `division`, `house_no`, `city`) VALUES
('Cust1', '000111', 'cust1@e.com', 'pass1', 'Div1', 'H1', 'City1'),
('Cust2', '001122', 'cust2@e.com', 'pass2', 'Div2', 'H2', 'City2'),
('Cust3', '002233', 'cust3@e.com', 'pass3', 'Div3', 'H3', 'City3'),
('Cust4', '003344', 'cust4@e.com', 'pass4', 'Div4', 'H4', 'City4'),
('Cust5', '004455', 'cust5@e.com', 'pass5', 'Div5', 'H5', 'City5');

-- Inserting into the `seller` table
INSERT INTO `seller` (`name`, `email`, `pass`) VALUES
('Seller1', 's1@e.com', 'pass1'),
('Seller2', 's2@e.com', 'pass2'),
('Seller3', 's3@e.com', 'pass3'),
('Seller4', 's4@e.com', 'pass4'),
('Seller5', 's5@e.com', 'pass5');

-- Inserting into the `shop` table
INSERT INTO `shop` (`seller_id`, `name`, `total_categories`, `phone`, `division`, `house`, `city`, `fb`, `insta`) VALUES
(1, 'Shop1', 5, '000000', 'DivA', 'HA', 'CityX', 'fb1', 'insta1'),
(2, 'Shop2', 3, '111111', 'DivB', 'HB', 'CityY', 'fb2', 'insta2'),
(3, 'Shop3', 7, '222222', 'DivC', 'HC', 'CityZ', 'fb3', 'insta3'),
(4, 'Shop4', 6, '333333', 'DivD', 'HD', 'CityW', 'fb4', 'insta4'),
(5, 'Shop5', 4, '444444', 'DivE', 'HE', 'CityV', 'fb5', 'insta5');

-- Inserting into the `product_info` table
INSERT INTO `product_info` (`shop_id`, `name`, `quantity`, `approval`, `price`) VALUES
(1, 'Prod1', 10, TRUE, 10.00),
(2, 'Prod2', 20, TRUE, 20.00),
(3, 'Prod3', 30, TRUE, 30.00),
(4, 'Prod4', 40, TRUE, 40.00),
(5, 'Prod5', 50, TRUE, 50.00);

-- Inserting into the `order` table
-- Assuming `customer_id` and `product_id` values are from 1 to 5
INSERT INTO `order` (`customer_id`, `product_id`, `shop_id`, `payment_method`, `billing_address`, `delivery_time`, `payment_status`, `shipment_status`) VALUES
(1, 1, 1, 'Card', '123 St', DATE_ADD(NOW(), INTERVAL 7 DAY), 'Paid', 'Shipped'),
(2, 2, 2, 'Card', '234 St', DATE_ADD(NOW(), INTERVAL 7 DAY), 'Paid', 'Shipped'),
(3, 3, 3, 'Card', '345 St', DATE_ADD(NOW(), INTERVAL 7 DAY), 'Paid', 'Shipped'),
(4, 4, 4, 'Card', '456 St', DATE_ADD(NOW(), INTERVAL 7 DAY), 'Paid', 'Shipped'),
(5, 5, 5, 'Card', '567 St', DATE_ADD(NOW(), INTERVAL 7 DAY), 'Paid', 'Shipped');

-- Inserting into the `selecting_products_cart` table
-- Assuming `customer_id` values are from 1 to 5 and `product_id` values are from 1 to 5
INSERT INTO `selecting_products_cart` (`customer_id`, `product_id`) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 1);

