'use strict';

/*
    Create an anonymous immediately-invoking function 
    that will hold the main execution of all
    program calls. Writing a simple command console.log('Hi') 
    inside this function and running
    the code should output 'Hi' in the console.
*/
(function() {
    console.log('hi');
})()

/*
    Create constructor functions with properties representing 
    the following “things”:
    ● Product - product id (random number of 5 digits generated 
    on every product creation), name, price (with 2 decimal 
    places), expiration date
    ● ShoppingBag - a list of products (initially empty; function 
    constructor does not have any input parameters)


    Add getInfo method to Product. It should return a formatted 
    string containing product code(the first and last letter of
    the name together with the product id), name and price.
    "Banana" -> BA32784, Banana, 129.31
*/

function Product(name, price, expiration) {
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.name = name;
    this.price = price.toFixed(2);
    this.expiration = new Date(expiration);
    this.getInfo = function () {
        return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase() + 
        this.id + ', ' + this.name + ', ' + this.price;
    }
}

var product1 = new Product('banana', 242.57698, '2021/07/26');
//console.log(product1);
//console.log(product1.getInfo());

/*
    Add addProduct method to ShoppingBag. It should receive 
    a Product and add it to the product list. You can add a product 
    to the list only if it has a valid expiration date.
*/
function ShoppingBag() {
    this.addProduct = function(product = {}) {
        var productList = [];
        var today = new Date();
        
        if(today.getTime() < Date.parse(product.expiration)) {
            try {
                productList.push(product);
                return productList;
            } catch (error) {
                return error;
            }
        } else {
            throw new Error('Invalid expiration data');
        }
    }
}

var sh = new ShoppingBag();
console.log(sh.addProduct(product1));

/*
    Add a method to ShoppingBag that calculates the average product 
    price of products in your product list and prints out this value
    with the precision of three decimals.
    
    Add getMostExpensive method that finds the most expensive 
    product and prints out its info.
    
    Add calculateTotalPrice method to ShoppingBag that calculates 
    the total price of products in the shopping bag list.
*/

/*
    Create a constructor function with properties
    representing the following:
    ● PaymentCard - account balance (number with 2 decimal places), 
    active or inactive status, valid until date
    
    Create checkoutAndBuy function which receives shopping bag and 
    payment card and prints if the purchase is successful or not. 
    Purchase is successful only if the amount on the card is 
    greater or equal to the total price of products in the shopping 
    bag. If there is not enough money, print out
    the amount that is missing to complete the purchase.
*/