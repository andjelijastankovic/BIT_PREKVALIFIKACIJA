var obj = {};
Object.defineProperty(obj, 'name', {value: 'Leonardo', writable: true, enumerable: false});
console.log(obj.name);

console.log(obj.hasOwnProperty('name')); //true
console.log(obj.hasOwnProperty('test')); //false

console.log(Object.isExtensible(obj)); //trenutno true
obj.date = 'today';
Object.preventExtensions(obj); //sprecava dodeljivanje novih propertyja
obj.date = 'asdf'; //ne sprecava menjanje propertyja
obj.test = 'test';
console.log(obj.date);
console.log(obj.test); //undefiner zbog preventExtensions

/*
    Object.seal(obj) and Object.isSealed(obj) does the same 
    as preventExtensions() and additionally makes 
    all existing properties non-configurable. This means 
    you can change the value of an existing property, 
    but you cannot delete it.

    Object.freeze(obj) and Object.isFrozen(obj) everything 
    that seal() does plus prevents changing the values of 
    properties.

    ako je neki objekat freeze, onda je sigurno i seal
*/

var newObj = {
    date: 'today'
}

Object.freeze(newObj);
console.log(Object.isFrozen(newObj)); //true
console.log(Object.isSealed(newObj)); //true
console.log(Object.isExtensible(newObj)); //false
console.log(Object.preventExtensions(newObj)); // {date: 'today'}

// var deadline = Object.freeze({
//     date: "yesterday"
//  });
//  deadline.date = "tomorrow";
//  deadline.excuse = "lazy";
//  deadline.date; 				// "yesterday"
//  deadline.excuse; 			// undefined
//  Object.isSealed(deadline); // true

//NUMBER PROPERTIES
/*
    Because functions are objects, they can also have 
    properties. 
    Number.MAX_VALUE;
    Number.MIN_VALUE
    Number.POSITIVE_INFINITY;
    Number.NEGATIVE_INFINITY;
    Number.NaN;

    The number objects provide three methods: 
    toFixed()
    toPrecision()
    toExponential() 

    Like all objects, number objects also provide the toString() method. When used with number objects, this method accepts an optional radix parameter (10 being the default)
    (255).toString(16) // “ff”
*/

var a = 3.23423423;
var toFixed = a.toFixed(2);
var toPrecised = a.toPrecision(2);
console.log(toFixed);
console.log(toPrecised);

//ARRAY
var array = new Array(1, 2, 3, 4, 5);
console.log(array);
var arrayB = new Array(5); //instancira niz sa 5 praznih mesta

var push = array.push(7); //vraca trenutnu dužinu niza
var pop = array.pop(); //vraca izbaceni element
console.log(push);
console.log(pop);

var joinedArray = array.join(', '); //1, 2, 3, 4, 5
console.log(joinedArray);
var slice = array.slice(1, 3); //2, 3
console.log(slice); 
var splice = array.splice(1, 5, 33, 55, 45); //modifikuje niz, brise i dodaje clanove
console.log(splice);
console.log(array); // [1, 33, 55, 45]


//STRING
Boolean("");                // false
Boolean(new String(""));    // true

// .toUpperCase() , .toLowerCase()
var str = new String('Potato head');
var upper = str.toUpperCase();
console.log(upper);
var lower = str.toLowerCase();
console.log(lower);

// str.charAt(0) = str[0]
console.log(str.charAt(0));
console.log(str[0]);

//indexOf, lastIndexOf
var indexO = str.indexOf('O'); //-1 jer je key sensitive
console.log(indexO);
var indexP = str.indexOf('P'); // 0
console.log(indexP);
var lastO = str.lastIndexOf('o'); //5
console.log(lastO);
var head = str.indexOf('head'); //7, vraca index polaznog karaktera
console.log(head);

//includes - vraca true ili false
var containes = str.includes('ea'); //true
console.log(containes);
var notCon = str.includes('zzz'); //false
console.log(notCon);

//slice, substring, split
var sliced = str.slice(1, -1); //otato hea //str.length - 1
var substringed = str.substring(1, 0); //P, uzima prvu vrednost
console.log(sliced);
console.log(substringed);

var str1 = new String('Potato head');
console.log(str1.split(' ')); //[ 'Potato', 'head' ]
console.log(str1.split('a')); // [ 'Pot', 'to he', 'd' ] - izbacice spliter i izbacice ostatak stringa
var splitted = str1.split('a');
var joined = splitted.join('a');
console.log(splitted); //[ 'Pot', 'to he', 'd' ]
console.log(joined); //Potato head

//concat
var concat = str1.concat('s');
console.log(str1); //[String: 'Potato head']
console.log(concat); //Potato heads
console.log('s'.concat(str1)); //sPotato head

//valueOf() - vraca pocetnu vrednost 
console.log(str1.valueOf()); //Potato head - nece biti u formi objekta

//search, match, replace
var replaced = str1.replace('a', 'S'); //PotSto head - menja prvo pojavljivanje
console.log(replaced);

/*
    When you want to know whether a pattern is found in a 
    string use search (similar to the regular expression 
    test method); for more information (but slower execution)
    use match (similar to the regular expression exec method).
*/

//MATH
var random = 10 * Math.random().toFixed(1);
console.log(random); //4, 2, 7, 8, 3... 

//floor -niza cifra, ceil - visa cifra, round - najbliza cifra
//min - minimalna vrednost, max - maksimalna vrednost

var min = Math.min(-4, 6, 2, -100);
console.log(min);

//Math.pow() - stepenovanje
//Math.sqrt() - korenovanje
var pow = Math.pow(2, 10); //1024
console.log(pow);
var root = Math.sqrt(144); //12
console.log(root);


//DATE
var now = new Date();
console.log(now);
now.setMonth(10);
console.log(now.getDate(), now.getFullYear(), now.getHours());
