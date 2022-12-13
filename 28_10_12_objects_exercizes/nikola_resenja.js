/*
    1. Create a function that takes an array of objects 
    (groceries) which calculates the total
    price and returns it as a number. A grocery object 
    has a product, a quantity and a price,
    for example:
    {
        "product": "Milk",
        "quantity": 1,
        "price": 1.50
    }
}
*/

function calculateTotalPrice(groceries = []) {
    if(!groceries || groceries.length == 0) {
        return 0;
    }

    var result = 0;
    for(var i = 0; i < groceries.length; i++) {
        var element = groceries[i];
        if(element && element.price || element.price > 0 && element.quantity && element.quantity > 0) {
            result += element.price * element.quantity;
        }
    }
    return result;
}
//ako se price ne dodeli negde, izbacice NaN jer sabira undefined i price
console.log(calculateTotalPrice([{"product": "Milk", "quantity": 1, "price": 1.50}, {"product": "Milk", "quantity": 5, "price": 3}]));

/*
    2. You go to a jewelry shop and try to find 
    the most expensive piece of jewelry. You write
    down the name of each piece of jewelry 
    and its price. Create a function that gets the
    name of the piece of jewelry with the highest 
    price and returns "The most expensive
    one is the {name of jewelry piece}".
    Example:
    mostExpensive([{name:’DiamondEarings’, price: 980}, 
    {name:’Gold watch’, price:250},…])
    - The most expensive one is the diamond Ring.
*/

function mostExpensive(jewelry = []) {
    if(!jewelry || jewelry.length == 0) {
        return 'Empty';
    }

    var name = '';
    var maxPrice = 0;

    for(var i = 0; i < jewelry.length; i++) {
        var element = jewelry[i];

        if(element.price > maxPrice) {
            maxPrice = element.price;
            name = element.name;
        }
    }

    return name;
}
console.log(mostExpensive([{ name: 'DiamondEarings', price: 980 }, { name: 'Gold watch', price: 250 }]));

/* 
    3. Given a word, create an object that stores 
    the indexes of each letter in an array. Make
    sure the letters are the keys. Make sure 
    the letters are symbols. Make sure the indexes
    are stored in an array and those arrays are values.
    Examples:
    mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
    mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
    mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
*/

function mapLetters(str = '') {
    if(!str || str.length == 0) {
        return '';
    }

    var result = {};
    for(var i = 0; i < str.length; i++) {
        var letter = str[i];
        if(result[''+letter]) {
            continue;
        }

        var newArray = [i];

        for(var j = 0; j < str.length; j++) {
            if(letter == str[j] && i != j) {
                newArray.push(j);
            }
        }

        result[''+letter] = newArray;
    }

    return result;
}
console.log(mapLetters('hello'));

function mapLetters2(str = '') {
    if(!str || str.length == 0) {
        return '';
    }

    var result = {};
    for(var i = 0; i < str.length; i++) { 
        var letter = str[i];
        if(result[''+letter]) {
            result[''+letter].push(i);
        } else {
            var newArray = [i];
            result[''+letter] = newArray;
        }
    }

    return result;
}
console.log(mapLetters2('dodo'));
