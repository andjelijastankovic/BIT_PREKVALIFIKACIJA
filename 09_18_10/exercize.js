/* 
    Write an array of months in a year. Using console.log display June, 
    October and January from the array.
*/

var months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];

console.log(months[5]);
console.log(months[9]);
console.log(months[0]);

/* 
    Write an arrays of days in a week. Using console.log display Sunday from the array.
*/
var week = ['ponedeljak', 'utorak', 'sreda', 'cetvrtak', 'petak', 'subota', 'nedelja'];
console.log(week[6]);

/* 
    Print all negative elements from the array [2, -4, 5, -2, -11].
*/
var neg = [2, -4, 5, -2, -11];

console.log(neg[1]);
console.log(neg[3]);
console.log(neg[4]);

console.log('For loop:');
for(var i = 0; i < neg.length; i++) {
    if(neg[i] < 0) {
        console.log(neg[i]);
    }
}

/* 
    Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].
*/

var div = [5, 15, -5, 20, 12, 18, 72, 14, 9];

console.log(div[1]);
console.log(div[4]);
console.log(div[5]);
console.log(div[6]);
console.log(div[8]);

console.log('For loop:');

for(i = 0; i < div.length; i++) {
    if(div[i] % 3 == 0) {
        console.log(div[i]);
    }
}

/* 
    What is the index of number 24 in the following array?
    [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
    10, 26, 7]];
    Using console.log:
    ● Display the 3rd element of the array,
    ● Display the 2nd element of the 3rd element.
*/

var multi = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
    10, 26, 7]];

var index = multi[0][3];
console.log(index);

console.log(multi[2]);
console.log(multi[2][1]);
