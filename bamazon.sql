DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE Products (
item_id INTEGER (50) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (100) NOT NULL,
price DECIMAL (10,2) NOT NULL,
stock_quantity INTEGER (50) NOT NULL,
PRIMARY KEY(item_id)
);

SELECT * FROM Products;
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Echo", "electronics", 99.99, 500);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Ring Doorbell", "electronics", 249.99, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Jenga", "toys", 10.27, 90);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Leggings", "clothing", 30.00, 250);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Weighted Blanket", "home goods", 46.90, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Waffle Maker", "home goods", 9.99, 85);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Play-Doh", "toys", 24.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Facial Toner", "beauty", 25.00, 250);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mini Instant Camera", "electronics", 55.93, 190);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Wine Stopper", "misc", 8.50, 25);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';