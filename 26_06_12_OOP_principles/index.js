/*
    json - javascript object notation 
    "The black cat sleeps on the mat"
    * cat (noun) - object
    * black (adjective) - value of the color property
    * sleep (verb) - action, or a method
*/

/* 
    CLASSES

    drugi naziv za objekat - instanca (klase)

    - enkapsulacija
    - agregacija (kompozicija)
*/
//primer agregacije
var book = {
    name: 'Bogovi Starih Slovena',
    authors: [
        {
            name: 'Aleksandra Bajic'
        }
    ]
}

//inheritance (reusability) (nasledjivanje) - objekti nasledjuju od drugih objekata
//polymorphism

//FROM ARRAYS TO OBJECTS
var myarr = ['red', 'blue', 'yellow', 'purple'];
console.log(myarr);
console.log(myarr[0]);
console.log(myarr[3]);

//how to write objects
var hero = {
    name: 'Leonardo',
    kind: 'Turtle',
    occupation: 'Ninja'
};

var dog = {
    name: 'Rex',
    //ova funkcija se naziva metodom unutar objekta
    talk: function () {
        console.log('woof woof!');
    }
}

//associative array (hash, dictionary) - keys are strings

//accessing an object's properties
console.log(hero);
console.log(hero.name); //1. nacin
console.log(hero['name']); //2. nacin

function readProperty(propertyName) {
    return hero[propertyName];
}

console.log(readProperty('name')); //Leonardo
console.log(readProperty('kind')); //Turtle
console.log(readProperty('occupation')); //Ninja
console.log(readProperty('lastname')); //returns undefined
console.log(hero.lastname); //ne vraca gresku, vec undefined, jer pozivamo property koji ne postoji

var book = {
    name: 'Na Drini Cuprija',
    published: 1945,
    author: {
        firstname: 'Ivo',
        lastname: 'Andric'
    }
};

console.log(book.author.firstname); //ovo je najbolje koristiti
console.log(book['author']['firstname']);
console.log(book['author'].firstname);

var hero = {
    name: 'Leonardo',
    kind: 'Turtle',
    occupation: 'Ninja',
    say: function (params) {
        return 'I am ' + params;
    }
};
console.log(hero.say('Ninja'));
console.log(hero['say']('programmer'));

//VALUE VS REFERENCE
/* 
    JavaScript has 5 data types that are passed 
    by value:
    - Boolean, null, undefined, String and Number.
    We’ll call these primitive types.

    JavaScript has 3 data types that 
    are passed by reference:
    - Array, Function and Object.

    These are all technically Objects, so we’ll 
    refer to them collectively
    as reference types or Objects.
*/

/*
var x = 10;
var y = 'abc';
var z = null;
var a = x;
var b = y;
console.log(x, y, a, b); //10, 'abc', 10, 'abc'
x = 9;
console.log(x, y, a, b); //9 abc 10 abc
*/
var bookA = book;
console.log(book);
console.log(bookA);
book.author = 'asdf';
console.log(book);
console.log(bookA);

console.log(book === bookA);

var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(arr1 == arr2); //false jer poredi memorijske lokacije koje nisu iste
//kako to zaobići?
console.log(JSON.stringify(arr1));
console.log(JSON.stringify(arr1) == JSON.stringify(arr2));

var a = 10;
function changeNumber(param) {
    param = param + 2;
    console.log(param);
}

changeNumber(a);
console.log(a);

var person = {
    name: 'Ivo Andric'
}

function changePerson(param) {
    param.name = 'Mesa Selimovic';
}

changePerson(person);
console.log(person);
//promenilo je ime objekta person jer se direktno pristupilo hip memoriji
//objekat je referentni tip, vrednost moze da mu se promeni

//pure funkcija, vraca novi objekat
function changePersonB(param) {
    var name = param.name;
    return {
        name: name
    }
}

var arr = [1,2,3];
var arrB = arr.filter(function(item) {
    return item == 1;
});

console.log(arr);
console.log(arrB);