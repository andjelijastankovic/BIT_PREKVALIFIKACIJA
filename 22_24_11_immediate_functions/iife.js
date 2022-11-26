/* 
    1. Write IIFE that replaces the first and the last 
    element of the given array and prints out its
    elements.
    Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]
*/

var array = (
    function replace(arr) {
        var first = arr[0];
        var last = arr[arr.length - 1];

        arr[0] = last;
        arr[arr.length - 1] = first;

        return arr;
    }
)([4, 5, 11, 9]);

console.log(array);

/* 
    2. Write IIFE that calculates the surface area of the given 
    rectangle with sides a and b.
    Input: 4 5
    Output: 20
*/

var surface = (
    function sur(a, b) {
        return a * b;
    }
)(4, 5);

console.log(surface);

/* 
    3. Write IIFE that replaces all appearances of the 
    letters m or M with * and returns the
    number of replacements.
    Input: prograMming
    Output: progra**ing, 2
*/

var ems = (
    function letterM(string) {
        var number = 0;
        var string = string.toLowerCase();
        for (var i = 0; i < string.length; i++) {
            if (string[i] == 'm') {
                number++;
                string = string.replace('m', '*');
            }
        }

        return string + ', ' + number;
    }
)('prograMming');

console.log(ems);

//nikolino resenje
var transformed =
(
    function (sentence, letter, replacementCharacter) 
    {
        var counter = 0;
        var result = '';

        for (var i = 0; i < sentence.length; i++) 
        {
            if (sentence[i].toLowerCase() != letter.toLowerCase()) 
            {
                result += sentence[i];
                continue;
                /*
                    ispunjen je uslov, lepi slovo i idi dalje
                    zbog continue, ne izvrsava se 
                    result += replacementCharacter; counter++;
                */
            }

            result += replacementCharacter;
            counter++;
        }

        return `${result}, ${counter}`;
    }
)('programMing', 'm', '*');

console.log(transformed);

/*
    4. Write a function with parameters name and 
    surname that returns a function that
    suggests an email in the form name.surname@gmail.com.
    Input: pera peric
    Output: pera.peric@gmail.com
*/
function nameSurname(name, surname) {
    return function (mail) {
        return name + '.' + surname + '@gmail.com';
    }
}

var result = nameSurname('pera', 'peric');
//console.log(result);
var resultS = result('peric');
console.log(resultS);

/* 
    5. Write a function that returns a function that 
    calculates a decimal value of the given octal
    number.
    Input: 034
    Output: 28
*/

function octalNum(octal) {
    return function decimal(octal) {
        return parseInt(octal, 10);
    }
}
var result = octalNum();
var resultDec = result(067);
console.log(resultDec);

//nikolino resenje
var getNumberToDecimalConverter = function(base) {
    if(!base) {
        return 0;
    }

    function convert(number) {
        return parseInt(number, base);
    }

    return function(value) {
        return convert(value);
    }
}

var octalToDecimal = getNumberToDecimalConverter(8);
var num = octalToDecimal('034');
console.log(num);


/* 
    6. Write a function that checks if a given string is 
    valid password. The password is valid if it
    is at least 6 characters long and contains at least
    one digit. The function should receive
    two callbacks named successCallback and errorCallback 
    that should be called in case
    password is correct or invalid.
    Input: JSGuru
    Output: Your password is invalid!
    Input: JSGuru123
    Output: Your password is cool!
*/

function checkType( data, type) {
    if(!data || typeof data != 'type') {
        return false;
    }

    return true;
}
var passwordChecker = function(pass, success, error) {
    /*
        if(!success || typeof success != 'function') {
            return false;
        }

        if(!error || typeof error != 'function') {
            return false;
        }
    */
    
    if(!checkType(success, 'function') || checkType(error, 'function')) {
        return false;
    }

    function isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    function isPasswordValid(pass) {
        if(typeof pass != 'string' || pass.length < 6) {
            return false;
        }
        
        for(var i = 0; i < pass.length; i++) {
            if(isNumeric(pass[i])) {
                return true;
            }
        }

        return false;
    }

    var isValid = isPasswordValid(pass);
    if(isValid) {
        return success();
    }

    return error();
}

var success = function () {
    console.log('Your password is valid');
}

var error = function () {
    console.log('Your password is invalid');
}

passwordChecker('sdsdsa123', success, error);

/*
function successCallback(valid) {
    if(valid == 1) {
        console.log('Your password is cool!');
    }
}

function errorCallback(valid) {
    if(valid == 0) {
        console.log('Your password is invalid!');
    }
}

function isValid(pass) {
    var valid = 1;
    //password length
    
    if(pass.length >= 6) {
        valid = 1;
    } else {
        valid = 0;
    }
    
    //check if password contains digits
    var countDigits = 0;
    for(var i = 0; i < pass.length; i++) {
        if(!isNaN(pass[i])) {
            countDigits++;
            valid = 1;
        } 
    }
   
    successCallback(valid);
    errorCallback(valid);

    
}

//ne radi kako treba, pored poruke vraca i 'undefined'
console.log(isValid('JSGuru123'));
*/

/* 
    7. Write a function that filters elements of the given
    array so that they satisfy a condition
    given by the callback function.
    Input: [2, 8, 11, 4, 9, 3], callback function checks 
    if the number is odd
    Output: [11, 9, 3]
*/
function odd(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function arrOdd(arr) {
    return odd(arr);
}
console.log(arrOdd([2, 8, 11, 4, 9, 3]));

//nikolino resenje
function checkType( data, type) {
    if(!data || typeof data != type) {
        return false;
    }

    return true;
}

var filter = function(input, conditionChecker) {
    if(!checkType(conditionChecker, 'function') || !input || input.length == 0) {
        return input;
    }

    var result = [];

    for(var i = 0; i < input.length; i++) {
        if(!conditionChecker(input[i])) {
            continue;
        }

        result.push(input[i]);
    }

    return result;
}

function checkElement(element) {
    return element % 2 != 0;
    
}

console.log(filter([23, 7, 42, 12], checkElement));