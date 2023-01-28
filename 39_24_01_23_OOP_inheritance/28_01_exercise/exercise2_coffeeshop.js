/* 
    3.
    Write a class called CoffeeShop, which has three instance variables 
    and seven methods. Variables are:
    a) name : a string (basically, of the shop),
    b) menu : an array of items (of object type), with each item 
        containing the item (name of the item), type (whether food or a drink) and price,
    c) orders : an empty array.
*/
class CoffeeShop {
    constructor(name, menu, orders = []) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }

    /*
        Methods:
        IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

        a) addOrder: adds the name of the item to the end of the orders 
        array if it exists on the menu. 
        Otherwise, return "This item is currently unavailable!"
    */
    addOrder(order) {
        if(this.menu.some(menuItem => menuItem.item == order)) {
            this.orders.push(order);
            return 'Order added!';
        } else {
            return 'This item is currently unavailable!';
        }
    }

    /* 
        b) fulfillOrder: if the orders array is not empty, return 
        "The {item} is ready!". If the orders array is empty, 
        return "All orders have been fulfilled!"
    */

    fullfillOrder() {
        if (this.orders.length > 0) {
            return `The ${this.orders.shift()} is ready!`;
        } else {
            return `All orders have been fulfilled!`;
        }
    }

    // c) listOrders: returns the list of orders taken, otherwise, an empty array.
    listOrders() {
        if(this.orders.length > 0) {
            return this.orders;
        } else {
            return [];
        }
    }

    /* 
        d) dueAmount: returns the total amount due for the orders taken, 
        round off up to two decimal places.
    */
    dueAmount() {
        var sum = 0;
        for(var i = 0; i < this.menu.length; i++) {
            for(var j = 0; j < this.orders.length; j++) {
                if(this.menu[i].item == this.orders[j]) {
                    sum += this.menu[i].price;
                }
            }
        }

        return `${sum.toFixed(2)}RSD`;
    }
    //e) cheapestItem: returns the name of the cheapest item on the menu.
    cheapestItem() {
        var cheapest = this.menu[0].price;
        for(var i = 0; i < this.menu.length; i++) {
            if(this.menu[i].price < cheapest) {
                cheapest = this.menu[i].item;
            }
        }

        return cheapest;
    }

    //f) drinksOnly: returns only the item names of type drink from the menu.
    drinksOnly() {
        var listDrinks = [];

        for(var i = 0; i < this.menu.length; i++) {
            if(this.menu[i].type == 'drink') {
                listDrinks.push(this.menu[i].item);
            }
        }

        return listDrinks;
    }

    //g) foodOnly: returns only the item names of type food from the menu.
    foodOnly() {
        var listFood = [];

        for(var i = 0; i < this.menu.length; i++) {
            if(this.menu[i].type == 'food') {
                listFood.push(this.menu[i].item);
            }
        }

        return listFood;
    }
}
/*
    
    Examples:
    tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
    // Tesha's coffee shop does not sell hot cocoa
    tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
    // specifying the variant of "iced tea" will help the process

    tcs.addOrder("cinnamon roll") ➞  "Order added!"
    tcs.addOrder("iced coffee") ➞ "Order added!"
    tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
    // the list of all the items in the current order

    tcs.dueAmount() ➞ 2.17

    tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
    tcs.fulfillOrder() ➞ "The iced coffee is ready!"
    tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
    // all orders have been presumably served

    tcs.listOrders() ➞ []
    // an empty array is returned if all orders have been exhausted

    tcs.dueAmount() ➞ 0.0
    // no new orders taken, expect a zero payable

    tcs.cheapestItem() ➞ "lemonade"
    tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
    tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
*/

var menu = [
    { item: 'Coca-Cola', type: 'drink', price: 150 },
    { item: 'Espresso', type: 'drink', price: 120 },
    { item: 'Irish coffee', type: 'drink', price: 180 },
    { item: 'Lemon iced tea', type: 'drink', price: 100 },
    { item: 'Hot chocolate', type: 'drink', price: 200 },
    { item: 'Sandwich', type: 'food', price: 150 },
    { item: 'Bacon and egg', type: 'food', price: 200 },
    { item: 'Hamburger', type: 'food', price: 200 },
    { item: 'Cinnamon roll', type: 'food', price: 180 }
];

var mycof = new CoffeeShop('dsada', menu);
console.log(mycof.addOrder('Lemon iced tea'));
console.log(mycof.addOrder('bacon'));
console.log(mycof.addOrder('Hot chocolate'));
console.log(mycof.addOrder('Espresso'));
console.log(mycof.addOrder('Hamburger'));
console.log(mycof.listOrders());
console.log(mycof.dueAmount());
console.log(mycof.fullfillOrder());
console.log(mycof.dueAmount());
console.log(mycof.fullfillOrder());
console.log(mycof.dueAmount());
console.log(mycof.fullfillOrder());
console.log(mycof.dueAmount());
console.log(mycof.fullfillOrder());
console.log(mycof.dueAmount());
console.log(mycof.cheapestItem());
console.log(mycof.drinksOnly());
console.log(mycof.foodOnly());