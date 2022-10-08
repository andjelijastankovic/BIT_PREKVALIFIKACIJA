var a; //inicijalno ima undefined vrednost
console.log(a);

var b = !!a;
console.log(b);

var b = !a;
console.log(b);

a = 'Subota';
console.log(a);

b = !!a;
console.log(b);

console.log(true && 'something');
console.log('1' + 1);
console.log(true && undefined);

console.log(1 == '1');
console.log(2 === '2');

console.log(1 !== '1');
console.log(1 >= '1');

//foo;
//typeof foo;

//numbers

var n = 1;
console.log(typeof n); //typeof uvek vraca string vrednost

var nType = typeof n;
console.log(typeof nType);
console.log(typeof n == typeof a);

var octalNumber = 0377;
console.log(typeof octalNumber); //number
console.log(octalNumber); //255 - vrednost 0377 u dekadnom sistemu

var hexNumber = 0xAB;
console.log(typeof hexNumber);
console.log(hexNumber);

//exponent literals
//e - stepen broja 10
console.log(31e+2);
console.log(31e-2);

//NaN - not a number
var a = 10 * 'a';
console.log(a);
var b = 1 + a;
console.log(b);
//provera da li je neka vrednost NaN - funkcija isNaN koja vraca true ili false
console.log(isNaN(b));

//strings
//konkatenacija stringova
var s1 = 'web';
var s2 = "site";
var s = s1 + s2;
console.log(s);
console.log(s1 + s2);

//escape character - \
var s= 'I don\'t know';
var s = "I don't know";
console.log(s);

var s = 'I don\\\'t know'; //ukoliko zelimo da ostane \
console.log(s);

//specijalni stringovi 
// \n - kraj linije
// \t - dodaje tab
// \u - unicode

console.log(undefined == null);

var check = s == '1s';
if(check) {
    console.log(s);
}

console.log(s == '1s');

if(s == '1s') {
    console.log(s);
}




