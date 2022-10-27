/* 
    Write a program that checks if a given 
    element e is in the array a.
    Input: e = 3, a = [5, -4.2, 3, 7]
    Output: yes
*/

var e = 3;
var a = [5, -4.2, 3, 7];

//console.log se vrti do kraja, resenje ispod je bolje
for(var i = 0; i < a.length; i++) {
    if(a[i] == e) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

for(var i = 0; i < a.length; i++) {
    if(a[i] === e) {
        console.log('yes, and its index is ' + i);
        break;
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
var index = 0;
for(var i = 0; i < arr.length; i++) { 
    if(min > arr[i]) {
        min = arr[i];
        index = i;
    }
}

console.log(min + ', ' + arr.indexOf(min));
console.log(min + ', ' + index);

/* 
    Write a program that finds the first element 
    larger than minimum and prints out its value.
    Input array: [4, 2, 2, -1, 6]
    Output: 2
*/
var arr = [4, 2, 2, -1, 6];
var min = arr[0];
var sec = arr[0];

//nikolin nacin
for(var i = 0; i < arr.length; i++) { 
    if(min > arr[i]) {
        min = arr[i];
    }
}

for(var i = 0; i < arr.length; i++) {
    if(arr[i] < sec && sec && arr[i] > min) {
        sec = arr[i];
    }
}

console.log(min, sec); 

/* 
Andrijana Mladenovic - var min moze da se izbaci iz 
niza, i prodje opet kroz niz da se nadje novi minimum
 
var o = [4,2,2,-1,6]
var min = o[0]
for(i = 0 ; i < o.length ; i++){
  if (o[i] < min ) {
    min = o[i]
  }
}
console.log("min je" + min)

// ostali bez minimuma
var ostali = [];
for (var i = 0; i < o.length; i++) {
  if (o[i] !== min)
    ostali.push(o[i]);
}

// minimum od ostalih
var min2 = ostali[0]
for(i = 0 ; i < ostali.length ; i++){
  if (ostali[i] < min2 ) {
    min2 = ostali[i]
  }
}

console.log("broj je " + min2);

*/
//stvara se kvadratni problem jer se vrte dve petlje, koristiti nacin iznad
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
var result = false;
for(i = 0; i < first.length; i++) {
    if(first[i] == first[(first.length - 1) - i]) {
        result = true;
    } else {
        result = false;
        break;
    }
}

if(result) {
    console.log('The array is symmetric');
} else {
    console.log('The array isn\'t symmetric');
}

//nikolin nacin za simetrican niz
var j = first.length - 1;
//j ide s kraja, i ide od pocetka, zato se j smanjuje na kraju
for(var i = 0; i < first.length; i++) {
    if(i == j) {
        break;
    }
    if(first[i] == first[(first.length - 1) - i]) {
        result = true;
    } else {
        result = false;
        break;
    }

    j--;
}

//net
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

//bez push funkcije
var result = [];
var j = 0;
var z = 0;
for(var i = 0; i< one.length + two.length; i+=2) {
    j=i+1;
    result[i]=one[z];
    result[j]=two[z];
    z++;
}
console.log(c);

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

//sa splice funkcijom
a.splice(p, 0, e);
console.log(a);

//nikola - resenje
if(p > a.length) {
    console.log('position is greater than the array length');
} 

var result = [];
for(var i = 0; i < a.length; i++) {
    if(i == p) {
        result[i] = e;
    } else if(i < p) {
        result[i] = a[i];
    } else {
        result[i] = a[(i-1)];
    }
}

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
if(p <= a.length && p >= 0) {
    for(i = a.length; i > p; i--) {
        a[i] = a[i-1];
    }

    a[p] = e;


    console.log(a);
    /*
    ovo je samo za ispisivanje, moze console.log(a)
    for(i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    */

} else {
    console.log('error');
}

/* 
    Write a code to count all letters in a word and show that count on screen. 
    Example: Given word is "Eclip542se". Result should be something 
    like "There is 7 letters in this word".
*/

var word = 'Eclip542se';
var numberOfLetters = 0;
var int;
for(var i = 0; i < word.length; i++) {
    
    int = parseInt(word[i], 10);
    if(isNaN(int)) {
        numberOfLetters++;
    }
}
console.log('There is ' + numberOfLetters + ' letters in this word');

/* 
    Write a code to find on which index in array is letter "C" 
    and show that index on screen. 
    Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].
*/

var arr = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];
for(i = 0; i < arr.length; i++) {
    if(arr[i] == 'c' || arr[i] == 'C') {
        console.log(i);
    }
}


