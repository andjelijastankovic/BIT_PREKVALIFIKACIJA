/* 
    1. Write a function that converts an array of 
    strings into an array of numbers. Filter
    out all non-numeric values.
    Input: ["1", "21", undefined, "42", "1e+3", Infinity]
    Output: [1, 21, 42, 1000]
*/

function convert(arr) {
    var new_arr = [];
    
    for(var i = 0; i < arr.length; i++) {
        var number = parseInt(Number(arr[i]));
        if(!isNaN(number)) {
            new_arr.push(parseInt(Number(arr[i])));
        }
    }
    
    return new_arr;
}
console.log(convert(["1", "21", undefined, "42", "1e+3", Infinity]));

/* 
    2. Write a program to join all elements of the array 
    into a string skipping elements
    that are undefined, null, NaN or Infinity.

    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: “015false-2247”
*/

function join_string(arr) {
    var string = '';
    var new_arr = [];

    for (var i = 0; i < arr.length; i++) {

        if(!isNaN(parseInt(arr[i])) || typeof(arr[i]) === "boolean") {
            new_arr.push(arr[i]);
        }

    }

    string = new_arr.join('');
    return string;
}

console.log(join_string([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* 
    3. Write a program to filter out falsy values from the array.
    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: [15, -22, 47]
*/

function falsy_values_filter(arr) {
    var new_arr = [];

    for(var i = 0; i < arr.length; i++) {
        if(Number(arr[i])) {
            new_arr.push(arr[i]);
        }
    }

    return new_arr;
}
console.log(falsy_values_filter([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* 
    4. Write a program that calculates a number of integer 
    values in the array.
    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
    Output: 3
*/

function sumOfIntegers(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i])) {
            count++;
        }
    }

    return count;
}

console.log(sumOfIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/* 
    5. Write a program that calculates a number of float 
    values in the array.
    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
    Output: 2
*/

function isFloat(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        var number = Number(arr[i]);
        if(!Number.isInteger(number) && !isNaN(number)) {
            //new_arr.push(number);
            count++;
        }
    }

    return count;
}

console.log(isFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));