//Try to use built-in object methods to solve some of the problems here

/* 
    1. Write a functional expression that duplicates each element of a given array.
    Input: [2, 4, 7, 11, -2, 1]
    Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
*/

function duplicateArrayItem(arr = []) {
    if (!arr || arr.length == 0) {
        return null;
    }

    var duplicate = [];
    for (var i = 0; i < arr.length; i++) {
        duplicate.push(arr[i], arr[i]);
    }

    return duplicate;
}
console.log(duplicateArrayItem([2, 4, 7, 11, -2, 1]));

/* 
    2. Write a functional expression that removes all 
    duplicates in a given array.
    Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
    Output: [1, 4, 8, 9, 12, 13]
*/

function deleteDuplicates(arr = []) {
    if (!arr || arr.length == 0) {
        return [];
    }
    var newArr = [... new Set(arr)];
    return newArr;
}
console.log(deleteDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/*
    3.
    a. Write a function that checks if a given array has odd 
    number of elements. (neparan broj)
    Input: [1, 2, 9, 2, 1]
    Output: true
*/

//3a
function checkArray(arr = []) {
    if (!arr || arr.length == 0) {
        return [];
    }

    if (arr.length % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkArray([1, 2, 9, 2, 1]));
/*
    3b. Write a function that counts the number of elements less 
    than the middle element. If the given array has an even number 
    of elements, print out an errormessage.
    Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
    Output: 4
*/
//3b
function countAndError(arr = []) {

    if (checkArray(arr) == false) {
        var ourError = new Error('Even number of elements in array');
        return ourError;
    } else if (checkArray(arr) == true) {
        var counter = 0;
        var middle = arr[(arr.length - 1) / 2];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < middle) {
                counter++;
            }
        }
    }

    return counter;
}
console.log(countAndError([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/* 
    4. Write a function that finds the smallest element of a given array. The function should
    return an object that contains the smallest value and its last position in the array.
    Input: [1, 4, -2, 11, 8, 1, -2, 3]
    Output: { minValue: -2, minLastIndex: 6 }
*/

function smallObj(arr = []) {
    if (!arr || arr.length == 0) {
        return [];
    }

    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        var minLastIndex = arr.lastIndexOf(min);
    }
    return { minValue: min, minLastIndex: minLastIndex };
}
console.log(smallObj([1, 4, -2, 11, 8, 1, -2, 3]));

/* 
    5. a. Write a function that finds all the elements in 
    a given array less than a given element.
    Input: [2, 3, 8, -2, 11, 4], 6
    Output: [2, 3, -2, 4]
*/
//5a
function findLessThanGiven(arr = [], given) {
    if (!arr || !given || arr.length == 0 || typeof given != 'number') {
        var err = new Error('You have an error somewhere.');
        return err;
    }

    var lessThan = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < given) {
            lessThan.push(arr[i]);
        }
    }

    return lessThan;
}
console.log(findLessThanGiven([2, 3, 8, -2, 11, 4], 6));


/*
    5b. Write a function that finds all the elements in a given array 
    that start with the “pro” substring. The function should be case 
    insensitive.
    Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
    Output: [’Programming’, ‘product’]
*/
//5b
function proSub(arr = [], word) {
    if (!arr || !word || arr.length == 0 || word.length == 0 || typeof word != 'string') {
        return null;
    }

    var newArr = [];
    var neWord = word.toLowerCase();

    for (var i = 0; i < arr.length; i++) {
        var lowerArrayItems = arr[i].toLowerCase();

        if (lowerArrayItems.startsWith(neWord)) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
console.log(proSub(['JavaScript', 'Programming', 'fun', 'product', 'concatenation'], 'con'));

/*
    5c. Write a function that expects an array and a callback function that filters out
    some of the elements. Use functions defined in a) or b) to test it.
*/
//5c
function callBack(arr) {
    //return findLessThanGiven(arr, 4);
    return proSub(arr, 'con');
}
//console.log(callBack([1, 4, 7, 3, 8, 2]));
console.log(callBack(['concat', 'continent', 'concatenation']));

/* 
    6.
    a. Write a list (array) of products you usually buy in the supermarket. Write a price
    and name for each product. For example,
    [
        {name: ‘apples’, price: 100},
        {name: ‘milk’, price: 80},
        {name:’bananas’, price: 150}
    ]

    b. Write a function that calculates the total price of your 
        shopping list.
    c. Write a function that calculates the average product 
        price of your shopping list.
        Print this value with the precision of three decimals.
    d. Write a function that prints out the name of the most expensive 
    product on your shopping list. Write the name in uppercase.
*/
//6a
/*
function makeObjectsInArray(item1 = {}, item2 = {}, item3 = {}) {
    if(!item1 || !item2 || !item3 ||
        item1.hasOwnProperty('name') == false ||
        item2.hasOwnProperty('name') == false ||
        item3.hasOwnProperty('name') == false ||
        item1.hasOwnProperty('price') == false ||
        item2.hasOwnProperty('price') == false ||
        item3.hasOwnProperty('price') == false
    ) {
      return null;  
    }
    var arr = [];
    arr.push(item1, item2, item3);
    return arr;
}

var object1 = { name: 'apples', price: 100 }
var object2 = { name: 'milk', price: 80 }
var object3 = { name: 'bananas', price: 150 }
//console.log(makeObjectsInArray(object1, object2, object3));
*/
var arrGroceries = [
    { name: 'apples', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
]
/*
    b. Write a function that calculates the total price of your 
    shopping list.
*/
//6b
function totalPrice(arr = []) {
    if (!arr || arr.length == 0) {
        return [];
    }

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var price = arr[i].price;
        sum += price;
    }
    return sum;
}
console.log(totalPrice(arrGroceries));

/*
    6c. Write a function that calculates the average product 
    price of your shopping list.
    Print this value with the precision of three decimals.
*/
//6c
function averageProductPrice(arr = []) {
    var sum = totalPrice(arr);
    var avg = (sum / arr.length).toFixed(3);
    return avg;
}
console.log(averageProductPrice(arrGroceries));

/*
    d. Write a function that prints out the name of the most expensive 
    product on your shopping list. Write the name in uppercase.
*/
//6d
function upperExpensive(arr = []) {
    if (!arr || arr.length == 0) {
        return [];
    }

    var highest = 0;
    var name;
    for (var i = 0; i < arr.length; i++) {
        var prices = arr[i].price;
        if (prices > highest) {
            highest = prices;
            name = arr[i].name.toUpperCase();
        }
    }

    return name;
}
console.log(upperExpensive(arrGroceries));
/* 
    7.
    a. Write a function that checks if a given string is written in all capitals.
    b. Write a function that checks if a given string contains any digits.
    c. Write a function that checks if a given string is a valid hexadecimal color.
    d. Write a function that checks if a given number belongs to the interval from 1900
    to 2018.
    e. Write a function named validator that returns an object with properties
    stringValidator, passwordValidator, colorValidator, and yearValidator referencing
    the functions from a) to d).
*/
function allCapitals(string = '') {
    if (!string || string.length == 0) {
        return '';
    }

    var capsLockOn = string.toUpperCase();
    if (string == capsLockOn) {
        return true;
    } else {
        return false;
    }
}
console.log(allCapitals('WWWW'));

function checkDigits(string = '') {
    if (!string || string.length == 0) {
        return '';
    }

    for (var i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(checkDigits('fereger'));

function isItHexadecimal(string = '') {

    if (!string || string.length == 0) {
        return '';
    }

    if (string[0] != '#') {
        return false;
    }

    if (!(string.length == 4 || string.length == 7)) {
        return false;
    }

    //var allowed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];
    var allow = '0123456789abcdefABCDEF';

    for (var i = 1; i < string.length; i++) {
        if (allow.includes(string[i])) {
            continue;
        }
        return false;
    }
    return true;
}
console.log(isItHexadecimal('#1DFFa1'));

function yearCheck(year) {
    if (!year || isNaN(year)) {
        return false;
    }

    if (year < 1900 || year > 2022) {
        return false;
    }

    return true;
}
console.log(yearCheck(2024));
/*
    Write a function named validator that returns an object with properties
    stringValidator, passwordValidator, colorValidator, and yearValidator referencing
    the functions from a) to d).
*/
function validator(str) {
    var object = {
        stringValidator: allCapitals(str),
        digitsValidator: checkDigits(str),
        colorValidator: isItHexadecimal(str),
        yearValidator: yearCheck(str)
    }

    return object;
}
console.log(validator('213egrerDDDD'));

/*
    8. Write a function that calculates a number of days to your birthday.
    Input: 25 February
    Output: 5 days
*/

/* 
    9. Write a function that for a given departure and arrival time calculates the time the trip
    takes.
    Input: 8:22:13 11:43:22
    Output: 3 hours 21 minutes 9 seconds
*/

/* 
    10.
    a. Write a constructor function that creates points in space. Each point in space has
        its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
    b. Write a function that calculates the distance between two points in the space.
*/
function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
var one = new Point(3, 5, 1);
var two = new Point(7, 4, 1);

function distance(obj1 = {}, obj2 = {}) {
    if (!obj1 || !obj2) {
        return null;
    }

    var distX = Math.abs(obj1.x - obj2.x);
    var distY = Math.abs(obj1.y - obj2.y);
    var distZ = Math.abs(obj1.z - obj2.z);

    var distance = {
        x: distX,
        y: distY,
        z: distZ
    }

    return distance;
}
console.log(distance(one, two));

/*
    11.
    a. Write a function that generates a random integer value between 5 and 20.
    b. Write a function that generates a random integer value between 50 and 100.
    c. Write a function which expects a number and a callback generator function and
    returns an array of numbers produced by the generator function.
*/
function fromFiveToTwenty() {
    var min = Math.ceil(5);
    var max = Math.floor(20);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(fromFiveToTwenty());

function fromFiftyToHundred() {
    var min = Math.ceil(50);
    var max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(fromFiftyToHundred());

/*
    c. Write a function which expects a number and a callback generator function and
    returns an array of numbers produced by the generator function.
*/
function expectsNumber(num) {
    if (!num || isNaN(num)) {
        return false;
    }

    function generator() {
        var arr = [];
        var min = 0;
        var max = Math.floor(num);
        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        for (var i = 0; i < num; i++) {
            arr.push((Math.floor(Math.random() * (max - min + 1) + min)));
        }
        return arr;
    }

    return generator(num);
}
console.log(expectsNumber(24));

/*
    12. Write a function that shuffles the elements of a given array.
    Input: [3, 6, 11, 2, 9, 1]
    Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)
*/
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
function shuffleArrayElements(arr = []) {
    if (!arr || arr.length == 0) {
        return [];
    }

    var shuffledArray = arr.sort((a, b) => 0.5 - Math.random());
    return shuffledArray;
}
console.log(shuffleArrayElements([3, 6, 11, 2, 9, 1]));

// https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(shuffleArray([3, 6, 11, 2, 9, 1]));