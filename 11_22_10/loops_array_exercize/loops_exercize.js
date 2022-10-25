/* 
    Write a for loop that will iterate from 0 to 15. 
    For each iteration, it will check if the current
    number is odd or even, and display a message to the screen.
*/

for(i = 0; i <=15; i++) {
    if(i == 0) {
        console.log('Zero');
    }
    else if(i % 2 == 0) {
        console.log('Even number ' + i);
    } else {
        console.log('Odd number ' + i);
    }
}

/* 
    Write a program to sum the multiples of 3 and 5 under 1000.
*/
var sum = 0;
for(i = 1; i < 1000; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}

console.log(sum);

/* 
    Write a program to compute the sum 
    and product of an array of integers.
*/

var array = [1, 2, 3, 4, 5];
var sum = 0;
var product = 1;
for(i = 0; i < array.length; i++) {
    sum += array[i];
    product *= array[i];
}

console.log(sum);
console.log(product);

/* 
    Write a program which prints the elements 
    of the following array as a single string:
*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
let newArr = [];
let separator = ' ';

for(let i = 0; i < x.length; i++) {
  newArr += x[i];
  if (i < x.length - 1) newArr += separator;
}

console.log(newArr);

/* 
    Write a program that prints the elements of the following array.
    var a = [
                [1, 2, 1, 24],
                [8, 11, 9, 4],
                [7, 0, 7, 27]
            ];
*/
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
/*
for(var i in a) {
    console.log("ROW:" + i);
    for(var j in a[i]) {
        console.log(' ' + a[i][j]);
    }
}
*/

for(var i = 0; i < a.length; i++) {
    console.log(a[i]);
    for(j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}

/* 
    Write a program that outputs 
    the sum of squares of the first 20 numbers.
*/
var sum = 0;
for(i = 0; i <=20; i++) {
    sum += i*i; //Math.pow(i, 2)
}

console.log(sum);

/* 
    Write a program that computes average marks of the following students. Then use this
    average to determine the corresponding grade.
*/

var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var avg_sum = 0;

for(var i = 0; i < students.length; i++) {
    avg_sum += students[i][1];
    var avg = avg_sum / students.length;
}
console.log("Average grade: " + avg);

if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}


/* 
    Write a program that uses console.log to print all the numbers from 1 to 100, with two
    exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
    divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
    program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
    &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).
*/

//ovde ne upada u fizzbuzz uslov
for(var i = 1; i <= 100; i++) {
    if(i % 3 == 0) {
        console.log('Fizz');
    } else if(i % 5 == 0 && i % 3 != 0) {
        console.log('Buzz');
    } else if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }
}

for(var i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 != 0) {
        console.log('fizz', i);
    } else if(i % 5 == 0 && i % 3 != 0) {
        console.log('buzz', i);
    } else if(i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz', i);
    } else {
        console.log(i);
    }
}