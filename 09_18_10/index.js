var a = [];

console.log(a);

a = [1, 2, 3];

console.log(a);
console.log(a[1]);
var duz = a.lenght;
console.log(duz);

a[2] = 5;
a[3] = 6;
a.push(4);
console.log(a);

a[10] = 11;
console.log(a);

delete a[3];
console.log(a);

a.pop();
console.log(a);

var b = [3, 4, 5];
delete b[2];
console.log(b);

a[3] = b;
console.log(a);
console.log(a[3][0]);

var c = 'peti element';
console.log(c[3]);

console.log('Loops');

//while loop
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

//do-while petlja (proci ce prvi put iako uslov u while nije zadovoljen)
do{
    console.log(i);
    i++;
} while(i < 10);

//for petlja
for(a = 0; a < 5; a++) {
    console.log(a);

    for(i = 4; i > a; i--) {
        console.log('value of i is ' +i, ', and value of a is ' +a);
    }
}


//for-in petlja
var negativeNumbers = [2, 3, -5, -7, 19, -9, 0];
var n = 0;
var lenght = negativeNumbers.length;

for(var i = 0; i < lenght; i++) {
    var element = negativeNumbers[i];
    if(element < 0) {
        console.log('Negative number: ', element);
    }
}

console.log('foreach ili for-in petlja:');

//  for(var element in negativeNumbers) {
//  if(element < 0) {
        //console.log('For-in petlja sa negativnim brojevima', element);
//  }
//}


