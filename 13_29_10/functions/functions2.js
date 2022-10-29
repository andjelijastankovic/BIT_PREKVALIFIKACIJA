/* 
    1. Write a function to check whether the `input` is a string or not.
    "My random string" -> true
    12 -> false
*/

function stringOrNot(input) {
    if(typeof input == 'string') {
        return true;
    } else {
        return false;
    }
}

var result = stringOrNot('my random string');
console.log(result);

/* 
    2. Write a function to check whether a string is blank or not.
    "My random string" -> false
    " " -> true
    12 -> false
    false -> false
*/

function stringBlankOrNot(string) {
    if(string.length === 0) {
        return true;
    } else {
        return false;
    }
}

var result = stringBlankOrNot('maadaw');
console.log(result);

/* 
    3. Write a function that concatenates a given 
    string n times (default is 1).
    "Ha" -> "Ha"
    "Ha", 3 -> "HaHaHa"
*/

/*
//funkcija ne radi ukoliko nije definisan broj n
function concatenates(string, n) {
    var repeat = '';
    
    while (n >= 1) {
        repeat += string;
        n--;
    }

    return repeat;
}
*/

//net
function repeat(str, count) {
    if(typeof(count) == "undefined") {
        count =1;
    }
    return count < 1 ? '' : new Array(count + 1).join(str);
}

console.log(repeat('Ha', -6));

var result = concatenates('Ha', 14);
console.log(result);

/* 
    4. Write a function to count the number of letter occurrences in a string.
    "My random string", "n" -> 2
*/

function numberOfLetterOccurrences(string, letter) {
    var occurrence = 0;

    for(var i = 0; i < string.length; i++) {
        if(string[i] == letter) {
            occurrence++;
        }
    }

    return occurrence;
}

var result = numberOfLetterOccurrences("My random string", "n");
console.log(result);

/* 
    5. Write a function to find the position of the first 
    occurrence of a character in a string. The
    result should be the position of character. 
    If there are no occurrences of the character, the
    function should return -1.
*/

function findPosition(string, character) {
    var first_position = 0;

    for(var i = 0; i < string.length; i++) {
        first_position = string.indexOf(character);
    }
    
    return first_position;
}

var result = findPosition("My random string", "š");
console.log(result);

/* 
    6. Write a function to find the position of the last 
    occurrence of a character in a string. The
    result should be in human numeration form. 
    If there are no occurrences of the character,
    function should return -1.
*/

function lastPosition(string, character) {
    var last_position = 0;

    for(var i = 0; i < string.length; i++) {
        last_position = string.lastIndexOf(character);
    }
    
    return last_position;
}

var result = lastPosition("My random string", "n");
console.log(result);

/* 
    7. Write a function to convert string into an array. 
    Space in a string should be represented as
    “null” in new array.

    "My random string" -> [""M";, "y", null, "r", "a"]
    "Random" -> ["R", "a", "n", "d", "o", "m"]
*/

function stringToArray(string) {
    var arr = string.split("");

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === '' || arr[i] === ' ') {
            arr[i] = null;
        }

    }

    return arr;
}

var result = stringToArray("My random string");
console.log(result);

/* 
    8. Write a function that accepts a number as a parameter 
    and checks if the number is prime or not.
    Note: A prime number (or a prime) is a natural number 
    greater than 1 that has no positive divisors 
    other than 1 and itself.
*/

function primeOrNot(number) {
    var numberOfDivisors = 0;
    var divisors = [];
    var k = 0;
    for(var i = 1; i <= number; i++) {
        if(number % i == 0) {
            numberOfDivisors++;
            divisors.push(i);
        }
    }
    
    if(numberOfDivisors == 2) {
        return true;
    } else {
        return false;
    }

}

var result = primeOrNot(17);
console.log(result);

/* 
    9. Write a function that replaces spaces in a string with 
    provided separator. If separator is not
    provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string";
    "My random string", "+"" -> "My+random+string"&quot";
    "My random string" -> "My-random-string";
*/

function spaceReplace(string, separator) {
    var arr = string.split("");

    //ako separator nije definisan, funkcija samo spaja string u jedan
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == '' || arr[i] == ' ') {
            arr[i] = separator;
        }
    }

    arr = arr.join('');
    return arr;
}

var result = spaceReplace('eee uuuu');
console.log(result);



/* 
    10. Write a function to get the first n characters and add 
    “...” at the end of newly created string.
*/
function dots(string, n) {
    //bez petlji i niza
    var n_part = string.substring(0, n);
    var rest = string.substring(n, string.length);
    
    var new_string = rest + '...';
    return new_string;
}

var result = dots('abcdefgh', 4);
console.log(result);

/* 
    Write a function that converts an array of strings 
    into an array of numbers. Filter out all
    non-numeric values.
    ["1", "21", undefined, "42", "1e+3", Infinity] -> 
    [1, 21, 42, 1000]
*/

function filterNonNumeric(arr){
    var new_arr = [];
    
    for(var i = 0; i < arr.length; i++) {
        var number = parseInt(Number(arr[i]));
        if(!isNaN(number)) {
            new_arr.push(parseInt(Number(arr[i])));
        }
    }
    
    return new_arr;
}

var result = filterNonNumeric(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);

/* 
    12. Write a function to calculate how many years there 
    are left until retirement based on the
    year of birth. Retirement for men is at age of 
    65 and for women at age of 60. If someone is
    already retired, a proper message should be displayed.
*/

/* 
    13. Write a function to humanize a number (formats a number 
    to a human-readable string) with
    the correct suffix such as 1st, 2nd, 3rd or 4th.
    1 -> 1st
    11 -> 11th
*/