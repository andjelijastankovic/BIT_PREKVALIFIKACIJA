'use strict';

/*
    Create an anonymous immediately-invoking function 
    that will hold the main execution of all
    program calls. Writing a simple command console.log('Hi') 
    inside this function and running
    the code should output 'Hi' in the console.
*/

(function() {

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
        this.price = Number(price.toFixed(2));
        this.expiration = new Date(expiration);
        this.getInfo = function () {
            return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase() + 
            this.id + ', ' + this.name + ', ' + this.price;
        }
    }
    
    var product1 = new Product('banana', 242.57698, '2023/07/26');
    var product2 = new Product('oranges', 156.8745, '2023/07/27');
    /*
        Add addProduct method to ShoppingBag. It should receive 
        a Product and add it to the product list. You can add a product 
        to the list only if it has a valid expiration date.

        Add a method to ShoppingBag that calculates the average product 
        price of products in your product list and prints out this value
        with the precision of three decimals.
        
        Add getMostExpensive method that finds the most expensive 
        product and prints out its info.
        
        Add calculateTotalPrice method to ShoppingBag that calculates 
        the total price of products in the shopping bag list.
    */
    
    function ShoppingBag() {
        this.addProduct = function() {
            var productList = [];
            var today = new Date();
            var args = arguments;

            for(var i = 0; i < args.length; i++) {
                var expDate = args[i + ''].expiration;
                
                if(today.getTime() < Date.parse(expDate)) {
                    productList.push(args[i + '']);
                }
            }

            return productList;
        }

        this.averagePrice = function () {
            var productList = [];
            var args = arguments;
            var sum = 0;

            for(var i = 0; i < args.length; i++) {
                var price = args[i + ''].price;
                sum += price;
            }

            var avg = (sum / args.length).toFixed(3);
            return avg;
        }

        this.getMostExpensive = function() {
            var productList = [];
            var args = arguments;
            var mostExpensive = 0;

            for(var i = 0; i < args.length; i++) {
                var price = args[i + ''].price;
                if(price > mostExpensive) {
                    mostExpensive = price;
                }
            }

            return mostExpensive;
        }

        this.calculateTotalPrice = function() {
            var productList = [];
            var args = arguments;
            var sum = 0;

            for(var i = 0; i < args.length; i++) {
                var price = args[i + ''].price;
                sum += price;
            }

            return sum.toFixed(2);
        }
    }
    
    var sh = new ShoppingBag();
    console.log(sh.addProduct(product1, product2));
    console.log(sh.averagePrice(product1, product2));
    console.log(sh.getMostExpensive(product1, product2));
    console.log(sh.calculateTotalPrice(product1, product2));
    
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
    function PaymentCard(balance, status, validDate) {
        this.balance = Number(balance.toFixed(2));
        this.status = status;
        this.validDate = new Date(validDate);
    }

    var payment1 = new PaymentCard(2000, 1, '2030/06/06');
    
    function checkoutAndBuy(bag, card) {
        var message = '';
        if(card.balance >= bag) {
            message = 'Purchase successful!';
        } else {
            message = `You are missing ${Math.abs(Math.ceil(card.balance - bag))}$ to complete your purchase...`;
        }

        return message;
    }
    var product3 = new Product('product3', 2500, '2023/08/08');
    console.log(checkoutAndBuy(sh.calculateTotalPrice(product1, product2, product3), payment1));

})()