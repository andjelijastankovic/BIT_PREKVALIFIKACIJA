//Write a program that calculates the maximum of two given numbers.
function maximum(a, b) {
    var maximum;
    if (a > b) {
        maximum = a;
    } else if (b > a) {
        maximum = b;
    }

    return maximum;
}

var result = maximum(8, 5);
console.log(result);

//Write a program that checks if a given number is odd.
function odd(number) {
    if (number % 2 == 1) {
        return 'Number is odd';
    } else {
        return 'Number is even';
    }
}
var result = odd(7);
console.log(result);

/*Write a program that checks if a 
given number is a three digit long number.*/

function threeDigit(number) {
    var arrayOfDigits = Array.from(String(number), Number);
    var length = arrayOfDigits.length;

    if (length == 3) {
        return true;
    } else {
        return false;
    }
}

var result = threeDigit(001);
console.log(result);

/* 
    Write a program that calculates an 
    arithmetic mean of four numbers.
*/

function arithmeticMean() {
    var args = arguments;
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        sum += value;
    }

    var mean = sum / args.length;
    return mean;

}

var result = arithmeticMean(9, 5, 7, 1, 6);
console.log(result);

/* 
    Write a program that draws a square of a 
    given size. For example, if the size of square
    is 5 the program should draw:
    *****
    *   *
    *   *
    *   *
    *****
*/

function square(size) {
    var string = "";

    for (var i = 0; i < size; i++) { // external loop
        for (var j = 0; j < size; j++) { // internal loop
            if (i === 0 || i === size - 1) {
                string += "*";
            } else {
                if (j === 0 || j === size - 1) {
                    string += "*";
                } else {
                    string += " ";
                }
            }
        }
        // newline after each row
        string += "\n";
    }

    return string;
}

var result = square(4);
console.log(result);

/* 
    Write a program that draws a horizontal chart 
    representing three given values. For
    example, if values are 5, 3, and 7, 
    the program should draw:
    * * * * *
    * * *
    * * * * * * *
*/
function chart(n1, n2, n3) {
    var arr = [n1, n2, n3];
    var string = '';
    /*
    for(var i = 0; i <= arr.length; i++) {
        for(var j = 0; j < i; j++) {
            string += '*';
        }

        string += '\n';
    }

    return string;
    */

}

var result = chart(4, 5, 6);
console.log(result);

//Write a program that calculates a number of digits of a given number.
//floor sprecava decimale, kad stignes uradi zadatak i sa decimalnim brojevima
function digits_count(number) {
    var count = 1;
    while (Math.floor(number / 10) >= 1) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;

}

var result = digits_count(11);
console.log(result);

/* 
    Write a program that calculates a number of 
    appearances of a given number in a given array.
    Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
    Result: 3
*/
function appearances(array, e) {
    var count = 0;
    /*
    for(numOfAppearances of array) {
        if(numOfAppearances == e) {
            count++;
        }
    }

    return count;
    */

    for (var i = 0; i < array.length; i++) {
        if (array[i] == e) {
            count++;
        }
    }

    return count;

}

var array = [2, 4, 7, 8, 7, 7, 1, 9, 8];
var result = appearances(array, 7);
console.log(result);

/* 
    Write a program that calculates 
    the sum of odd elements of a given array.
*/

function sumOfOdd(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            sum += array[i];
        }
    }

    return sum;
}

var arr = [2, 4, 7, 8, 9, 7, 7, 1, 9, 8];
var result = sumOfOdd(arr);
console.log(result);

/*
    Write a program that calculates the number 
    of appearances of a letter a in a given string.
    Modify the program so it calculates 
    the number of both letters a and A.
*/

function stringA(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'A') {
            count++;
        }
    }

    return count;
}

var result = stringA('AndjaAaAAA');
console.log(result);

/* 
    Write a program that concatenates a given 
    string given number of times. For example, if
    “abc” and 4 are given values, 
    the program prints out abcabcabcabc.
*/

function concatenates(string, number) {
    var repeat = '';
    while (number > 0) {
        repeat += string;
        number--;
    }
    return repeat;
}

var result = concatenates('abc', 5);
console.log(result);