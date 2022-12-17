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

/* 
    4. And who cursed the most in the fight between 
    you and your spouse? Given an object
    with three rounds, with nested objects as your 
    scores per round, return a string of who
    cursed the most: If you, return "ME!" 
    If your spouse, return "SPOUSE!" If a draw, return
    "DRAW!"
    Examples:
    determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 },
    { me: 0, spouse: 10, }]) ➞ "DRAW!"
    determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,
    spouse: 10}]) ➞ "ME!"
    determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9, spouse: 44 }, { me: 10,
    spouse: 55}]) ➞ "SPOUSE!"
*/

function determineWhoCursedTheMost(input = []) {
    if(!input || input.length == 0) {
        return '';
    }

    var sumA = 0;
    var sumB = 0;

    for(var i = 0; i < input.length; i++) {
        sumA += input[i].me;
        sumB += input[i].spouse;
    }

    if(sumA > sumB) {
        return 'Me';
    } else if(sumA < sumB) {
        return 'Spouse';
    } 

    return 'Draw';
}

console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 5, spouse: 10 }, { me: 10, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 40, spouse: 5 }, { me: 9, spouse: 10 }, { me: 9, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 9, spouse: 44 }, { me: 10, spouse: 55 }]));


/* 
    5. Create a function that converts color in RGB format to Hex format.
    Examples:
    rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0"
*/
function checkColor(color = 0) {
    //dovoljan uslov da izadje iz funkcije ukoliko je ispod 0 ili iznad 255
    return color < 0 || color > 255;
}
function rgbToHex(color = {}) {
    if(!color || checkColor(color.red) || checkColor(color.green) || checkColor(color.blue)) {
        return 'Invalid';
    }

    var red = color.red.toString(16).padStart(2, '0');
    var green = color.green.toString(16).padStart(2, '0');
    var blue = color.blue.toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}

function hexToRgb(str = '') {
    if(!str || !str.startsWith('#') || str.length != 7) {
        return null;
    }

    var colorString = str.split('#')[1];
    var red = parseInt(colorString.substring(0,2), 16);
    var green = parseInt(colorString.substring(2,4), 16);
    var blue = parseInt(colorString.substring(4), 16);

    return {red, green, blue};
}

var hex = rgbToHex({red: 0, green: 128, blue: 192});
console.log(hex);
console.log(hexToRgb(hex));

/* 
    6. Create a function that takes an amount of 
    monetary change (e.g. 47 cents) and breaks
    down the most efficient way that change can be 
    made using USD quarters, dimes,
    nickels and pennies. Your function should return an object.
    Examples:
    makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
    makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
    makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
    penny - 1
    nickel - 5
    dime - 10
    quarter - 25
*/

function makeChange(change = 0) {
    if(!change || change < 0) {
        return null;
    }

    var map = {};
    
    var mod_q = change % 25;
    map['q'] = (change - mod_q) / 25;

    var mod_d = mod_q % 10;
    map['d'] = (mod_q - mod_d) / 10;

    var mod_n = mod_d % 5;
    map['n'] = (mod_d - mod_n) / 5;
    map['p'] = mod_n;

    return map;
}
console.log(makeChange(51));
console.log(makeChange(24));
console.log(makeChange(92));

/*

    7. Create a function that takes an array of objects 
    like { name: "John", notes: [3, 5, 4]} and
    returns an array of objects like 
    { name: "John", avg Note: 4 }. 
    If student has no notes (an empty array) then 
    let's assume avg Note: 0.
    Examples:
    [
        { name: "John", notes: [3, 5, 4]}
    ]
    ➞
    [
    { name: "John", avgNote: 4 }
    ]
*/
function avgNotes(input = []) {
    if(!input || input.length == 0) {
        return null;
    }

    var result = {};

    for(var i = 0; i < input.length; i++) {
        var item = input[i];
        var newObject = {
            name: item.name
        }

        var sum = 0;

        for(var j = 0; j < item.notes.length; j++) {
            sum += item.notes[j];
        }

        var avg = parseFloat(sum / item.notes.length).toFixed(2);
        newObject['avgNote'] = avg;
        result.push(newObject);
    }

    return result;
}
console.log(avg([{ name: "John", notes: [3, 5, 4] }]));

/* 
    8. Given an object with students and the 
    grades that they made on the tests that they
    took, determine which student has the 
    best Test Average. The key will be the student's
    name and the value will be an array of their grades. 
    You will only have to return the student's name. 
    You do not need to return their Test Average.
    getBestStudent([{ name: ‘John’, grades: [100, 90, 80]}, 
    {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" 
    // John's avg = 90 // Bob's avg = 83.33
*/

function getBestStudent(input = []) {
    if(!input || input.length == 0) {
        return null;
    }

    var maxAverage = 0;
    var name;

    for(var i = 0; i < input.length; i++) {
        var item = input[i];
        var avgGrade = 0;
        var sum = 0;

        for(var j = 0; j < item.grades.length; j++) {
            sum += item.grades[i];
        }

        avgGrade = parseFloat(sum / item.grades.length).toFixed(2);
        if(avgGrade > maxAverage) {
            maxAverage = avgGrade;
            name = item.name;
        }
    }

    return {name: name, averageGrade: maxAverage};
}
console.log(getBestStudent([{ name: 'John', grades: [100, 90, 80]}, {name: 'Mark', grades: [100, 70, 80]}, {name: 'Bob', grades: [100, 70, 8000]}]));