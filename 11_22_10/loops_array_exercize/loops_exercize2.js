/* 
    Write a program that checks if a given 
    element e is in the array a.
    Input: e = 3, a = [5, -4.2, 3, 7]
    Output: yes
*/

var e = 3;
var a = [5, -4.2, 3, 7];

for(var i = 0; i < a.length; i++) {
    if(a[i] == e) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

/* 
    Write a program that multiplies every positive 
    element of a given array by 2.
    Input array: [-3, 11, 5, 3.4, -8]
    Output array: [-3, 22, 10, 6.8, -8]
*/

var arr = [-3, 11, 5, 3.4, -8];

for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        arr[i] = arr[i] * 2;
    }
}

console.log(arr);

/* 
    Write a program that finds the minimum of a 
    given array and prints out its value and
    index.
    Input array: [4, 2, 2, -1, 6]
    Output: -1, 3
*/

var arr = [4, 2, 2, -1, 6];
var min = arr[0];
for(var i = 0; i < arr.length; i++) { 
    if(min > arr[i]) {
        min = arr[i];
    }
}

console.log(min + ', ' + arr.indexOf(min));

/* 
    Write a program that finds the first element 
    larger than minimum and prints out its value.
    Input array: [4, 2, 2, -1, 6]
    Output: 2
*/
var arr = [4, 2, 2, -1, 6];
var min = arr[0];

for(i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
    }

    for(j = 0; j < arr.length; j++) {
        if(arr[j] > min && arr[j] < arr[i]) {
            sec = arr[j];
        }
    }
}

console.log(sec);

/* 
    Write a program that calculates the sum 
    of positive elements in the array.
    Input array: [3, 11, -5, -3, 2]
    Output: 16
*/

var as = [3, 11, -5, -3, 2];
var sum = 0;
for(var i = 0; i < as.length; i++) {
    if(as[i] > 0) {
        sum += as[i];
    }
}

console.log(sum);

/* 
    Write a program that checks if a given 
    array is symmetric. An array is symmetric if it can
    be read the same way both from 
    the left and the right hand side.
    Input array: [2, 4, -2, 7, -2, 4, 2]
    Output: The array is symmetric.
*/

var first = [2, 4, -2, 7, -2, 4, 2];
var sec = 0;
for(var i = 0; i < first.length / 2; i++) {
    if(first[i] != first[first.length - i -1]) {
        console.log('The array isn\'t symmetric');
        break;
    } else {
        console.log('The array is symmetric');
        break;
    }
}

/* 
    Write a program that deletes a given element e from the array a.
    Input: e = 2, a = [4, 6, 2, 8, 2, 2]
    Output array: [4, 6, 8]
*/

var e = 2;
var a = [4, 6, 2, 8, 2, 2];

for(var i = 0; i < a.length; i++) {
    if(a[i] == e) {
        a.splice(i--, 1);
    }
}
console.log(a);

/* 
    Write a program that intertwines two arrays. 
    You can assume the arrays are of the same length.
    Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
var one = [4, 5, 6, 2];
var two = [3, 8, 11, 9];
var c = [];

for(i = 0; i < one.length; i++) {
    c.push(one[i], two[i]);
}
console.log(c);


/* 
    Write a program that concatenates two arrays.
    Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
var one = [4, 5, 6, 2];
var two = [3, 8, 11, 9];

for(i = 0; i < two.length; i++) {
    one.push(two[i]);
}

console.log(one);

/* 
    Write a program that inserts a given element 
    e on the given position p in the array a. If
    the value of the position is greater 
    than the array length, print the error message.
    Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
    Output: [2, -2, 33, 78, 12, 5, 8]
*/

//console.log - [ 2, -2, 33 ] using splice function
var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];

if(p <= a.length && p >= 0) {
    for(i = a.length; i > p; i--) {
        a[i] = a[i-1];
    }

    a[p] = e;

    for(i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
} else {
    console.log('error');
}