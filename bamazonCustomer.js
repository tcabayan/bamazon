var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    start();
})

var start = function () {
    connection.query('SELECT * FROM bamazon_DB.products', function (err, res) {
        if (err) throw err;
        console.log("**************************");
        console.log("Welcome to Bamazon!");
        console.log("**************************");
        console.log("What would you like to buy?");
        console.log("**************************");
        for (var i = 0; i < res.length; i++) {
            console.log(
                res[i].item_id + " " +
                "PRODUCT: " + res[i].product_name + ", " +
                "DEPARTMENT: " + res[i].department_name + ", " +
                "PRICE: $" + res[i].price + " U.S. Dollars" + ", " +
                "QUANTITY AVAILABLE: " + res[i].stock_quantity + "\n"
            );
        }
        askQuestion(res);
    })
}

//need a function that ask the user to select one of these options and purchase it
var askQuestion = function (res) {
    inquirer.prompt([{
        type: "input",
        name: "item",
        message: "Please type in the product id number you would like to order:"
    }]).then(function (answer) {
        var correct = false;
        for (var i = 0; i < res.length; i++) {
            if (res[i].item_id == answer.item) {
                correct = true;
                var product = answer.item;
                var id = i;
                inquirer.prompt({
                    type: "input",
                    name: "quantity",
                    message: "How many units of this item would you like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }).then(function (answer) {
                    if ((res[id].stock_quantity - answer.quantity) > 0) {
                        connection.query("UPDATE bamazon_db.products SET stock_quantity='" + (res[id].stock_quantity - answer.quantity) + "' WHERE product_name'" + product + "'", function (err, response) {
                            console.log("--------------------------");
                            console.log("**************************");
                            console.log("You successfully bought the product!");
                            console.log("**************************");
                            console.log("--------------------------");
                            start();
                        })
                    } else {
                        console.log("Insufficient Quantity! Please select a lower quantity of this item or select another item.");
                        askQuestion(res);
                    }
                })
            }
        }
    })
}

