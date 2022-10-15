/* 
    Check if a triangle is equilateral (jednakostranicni), 
    scalene (sve stranice razlicite) or 
    isosceles (jednakokraki), and print which triangle is yours.. 
    Example: sides  of triangle are 
    3, 4, 5. This is scalene triangle.
*/

var a = 10;
var b = 5;
var c = 3;


if(a == b && a == c && b == c) {
    console.log('Equiliteral triange');
} else if(a == b || a == c || b == c) {
    console.log('Isosceles triangle');
} else {
    console.log('Scalene triangle');
}

/* 
    Perform arithmetic operations on two numbers. 
    Operations are add, subtract, multiply, divide,
    modulus.
*/

var operation = '%';
var result;
if(operation === '+') {
    result = a + b;
    console.log(result);
} else if(operation === '-') {
    result = a - b;
    console.log(result);
} else if(operation === '*') {
    result = a * b;
    console.log(result);
} else if(operation === '/') {
    result = a / b;
    console.log(result);
} else if (operation === '%') {
    result = a % b;
    console.log(result);
}

/* 
    Find the grade for input marks (you should have at 
    least two input marks). Grades are:
    A (91-100), B (81-90), C (71-80), 
    D (61-70), E (51-60). 
    Optionally print if student has failed the exam.
*/

var marks = 64;
var grade = '';
if(marks >= 91 && marks <= 100) {
    grade = 'A';
    console.log('You passed! Your grade is ' + grade);
} else if(marks >= 81  && marks <= 90) {
    grade = 'B';
    console.log('You passed! Your grade is ' + grade);
} else if(marks >=71 && marks <= 80) {
    grade = 'C';
    console.log('You passed! Your grade is ' + grade);
} else if (marks >=61 && marks <= 70) {
    grade = 'D';
    console.log('You passed! Your grade is ' + grade);
} else if(marks >=51 && marks <= 60) {
    grade = 'E';
    console.log('You passed! Your grade is ' + grade);
} else {
    console.log('Sorry, you faield the exam...');
}

/* 
    Create two variables (or if you know how to do it - input fields). 
    One should be a number, other
    should be a noun. Print on screen the number and 
    pluralized form, like “5 cats” or “1 dog”. 
    Bonus: Make it handle a few collective nouns 
    like “sheep” and “geese”.
*/

