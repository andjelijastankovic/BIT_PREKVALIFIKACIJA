/* 
    Task 1. Write a conditional statement to find 
    the sign of product of three numbers. Display the
    result in the console with the specified sign.
    Sample numbers: 3, -7, 2
    Output: The sign is -
*/

// var a = 3;
// var b = -7;
// var c = 2;
// var product = a * b * c;
// if(product < 0) {
//     console.log('-');
// } else if(product > 0) {
//     console.log('+')
// } else {
//     console.log('0');
// }

/* 
    Task 2. Write a conditional statement to 
    find the largest of five numbers. 
    Display the result in the
    console.
    Sample numbers: -5, -2, -6, 0, -1
    Output: 0
*/

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if(a > b && a > c && a > d && a > e) {
    console.log(a + ' is the greatest number');
} else if(b > a && b > c && b > d && b > e) {
    console.log(b + ' is the greatest number')
} else if(c > a && c > b && c > d && c > e) {
    console.log(c + ' is the greatest number');
} else if(d > a && d > b && d > c && d > e) {
    console.log(d + ' is the greatest number');
} else if(e > a && e > b && e > c && e > d) {
    console.log(e + ' is the greatest number');
} else {
    console.log('They are equal');
}

/* 
    Task 3. Write a conditional statement 
    to print three numbers as sorted number list.
    Sample numbers : 0, -1, 4
    Output : 4, 0, -1
*/

var x = 0;
var y = -1;
var z = 4;

if (x>y && x>z)
{
    if (y>z) {
        console.log(x + ", " + y + ", " +z);
    }
    else {
        console.log(x + ", " + z + ", " +y);
    }
}
else if (y>x && y >z) {
    if (x>z) {
        console.log(y + ", " + x + ", " +z);
    } else {
        console.log(y + ", " + z + ", " +x);
    }
} else if (z>x && z>y) {
    if (x>y) {
        console.log(z + ", " + x + ", " +y);
    } else {
        console.log(z + ", " + y + ", " +x);
    }
}  

/* 
    Task 4. Write a program to check if the variable 
    is a number and if it’s a number, check if it is
    divisible by 2. If it is, print the result, 
    if not, show “X”.
    Sample input: 10 Sample input: 7
    Output: 10 / 2 = 5 Output: X
*/

var number = 7;
var result = number / 2;
if(typeof number == 'number' && number % 2 == 0) {
    console.log(result);
} else {
    console.log('X');
}

/* 
    Task 5. Write a program that compares two numbers 
    and displays the larger. Display the result in
    the console.
*/

var number2 = 56;
if(number > number2) {
    console.log(number);
} else if(number < number2) {
    console.log(number2);
} else {
    console.log(number + ' and ' + number2 + ' are equal')
}

/* 
    Task 6. Write a JavaScript program to convert 
    temperatures to and from Celsius, Fahrenheit.
    Formula : F = (9*C/5) + 32 
    [ where c = temperature in Celsius and 
    f = temperature in Fahrenheit ]
    Sample Input: 60°C
    Output : 60°C is 140 °F
*/

var c = 60;
var f = 140;
var fahrenheitToCelsius = (9*c/5)+32;
var celsiusToFahrenheit = (f-32)*5/9;

console.log(fahrenheitToCelsius);
console.log(celsiusToFahrenheit);

/* 
    Task 7. Write a JavaScript program to get the 
    difference between a given number and 13, if
    the number is greater than 13 return double 
    difference between that number and 13.
    Sample Input: 11 Sample Input: 32
    Output : 2 Output : 38
*/

var someNumber = 32;
if(someNumber < 13) {
    console.log(13 - someNumber);
}
else if(someNumber > 13) {
    console.log((someNumber-13)*2);
}

/* 
    Task 8. Write a JavaScript program to compute 
    the sum of the two given integers. If the two
    values are same, then returns triple their sum.
    Sample Input: 12,5      Sample Input: 8,8
    Output : 17             Output : 48
*/
var a = 12;
var b = 12;
if(a != b) {
    console.log(a + b);
}
else if(a == b) {
    console.log(3*(a + b));
} 

/* 
    Task 9. Write a JavaScript program to check 
    two given numbers and print “true” if one of
    the number is 50 or if their sum is 50.
    Sample Input: 5,54      Output : -
    Sample Input: 6,50      Output : true
    Sample Input: 40,10     Output : true      
*/

var x = 45;
var y = 53;
var sum = x + y;

if(x == 50 || y == 50 || sum == 50) {
    console.log('true');
} else {
    console.log('-');
}

/* 
    Task 10. Write a JavaScript program to check 
    a given integer is within 20 of 100 or 400,
    and print range in which number belongs.
    Sample Input: 13    Output : - 
    Sample Input: 34    Output : 20 ⇔ 100
    Sample Input: 256   Output : 100 ⇔ 400
*/

if(x < 20) {
    console.log('-');
} else if(x >= 20 && x <= 100) {
    console.log('20 ⇔ 100');
} else if(x > 100 && x <= 400) {
    console.log('100 ⇔ 400');
}







