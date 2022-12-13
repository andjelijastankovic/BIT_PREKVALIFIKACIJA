//This and Constructor functions

var hero = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + hero.name;
    }
};

/* 
    In the previous example, the sayName() method
    used hero.name to access the name property of
    the hero object.

    When you're inside a method, there is another way
    to access the object the method belongs to:
    by using the special value this.

    So, when you say this, you're actually saying "this
    object" or "the current object".

*/

var hero = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + this.name;
    }
};

//CONSTRUCTOR FUNCTIONS
function Hero() {
    this.occupation = 'Ninja';
}

//new je komanda za kreiranje novog objekta
var hero = new Hero();
console.log(hero); //Hero {occupation: 'Ninja'};

function Hero(name, occupation) {
    this.name = name;
    this.occupation = occupation;

    this.whoAreYou = function () {
        return "I'm " + this.name + " and I'm a " + this.occupation;
    };
}

var heroOne = new Hero('Michelangelo', 'Ninja turtle');
var heroTwo = new Hero('Donatello', 'Ninja turtle');
console.log(heroOne);
console.log(heroTwo);
console.log(heroOne.whoAreYou()); // "I'm Michelangelo and I'm a Ninja"
console.log(heroTwo.whoAreYou()); //"I'm Donatello and I'm a Ninja"

//var hero3 = Hero('Leonardo', 'ninja turtle');
//console.log(typeof hero3); // "undefined"
//console.log(hero3.name); // "undefined"

/*
    this zavisi od scope-a u kojem se nalazi.
    Ukoliko se ne iskoristi new, this poziva globalni objekat (window) i 
    dodeljuje mu property koji smo pozvali
*/

//GLOBAL OBJECTS
/*
    We talked about global variables (and how you
    should avoid them) and you know that JS programs
    run inside a host environment (the browser for
    example).

    The host environment provides a global object and
    all global variables are accessible as properties of
    the global object.

    If your host environment is the web browser, the
    global object is called window.

    Way to access the global object (and this is also true in
    most other environments) is to use this outside a
    constructor function, for example in the global
    program code outside any function.
*/

var h2 = new Hero('Michelangelo');
typeof h2; //"object"
console.log(h2.name); // "Michelangelo"


//INSTANCEOF - vraća boolean
/*
    With the instanceof operator, you can test if an
    object was created with a specific constructor
    function

    Note that you don't put parentheses after the
    function name (you don't use hero instanceof
    Hero()).

    This is because you're not invoking this function,
    but just referring to it by name, as with any other
    variable.
*/

function Hero() { }

var hero = new Hero();

var obj = {};

console.log(hero instanceof Hero); // true
console.log(hero instanceof Object); // true
//Object je globalan built in objekat, zato vraća true
console.log(obj instanceof Object); // true


//FUNCTIONS THAT RETURNS OBJECTS
/*
    You can also use a normal function to create
    objects without new.

    You can have a function that does a bit of
    preparatory work and has an object as a return
    value.

    If you call the same constructor function using new,
    then a new object is returned and this refers to it
*/

function hero(name, occupation) {
    return {
        name: name,
        occupation: occupation,
        whoAreYou: function () {
            return 'I am ' + this.name;
        }
    }
}

var hero4 = hero('Rafaelo', 'Ninja');
console.log(hero4);
console.log(hero4 instanceof Hero);

function factory(name) {
    return {
        name: name
    };
}

var o = factory('one');

console.log(o.name); // "one"

//PASSING OBJECTS
/*
    When you assign an object to a different variable or
    pass it to a function, you only pass a reference to
    that object. Consequently, if you make a change to
    the reference, you're actually modifying the
    original object.

    Here's an example of how you can assign an object to another
    variable and then make a change to the copy.

    As a result, the original object is also changed:
*/

function changeName(obj) {
    obj.name = 'Splinter';
}

changeName(hero1);
console.log(hero1);

function changeString(str) {
    str = 'new string';
}

var a = 'old string';
changeString(a);
console.log(a);


var original = { 
    howmany: 1 
};

var mycopy = original;

mycopy.howmany; // 1

mycopy.howmany = 100; // 100

original.howmany; // 100

//The same thing applies when passing objects to functions
var original = { howmany: 100 };

var nullify = function (o) { o.howmany = 0; };

nullify(original);

original.howmany; // 0


//COMPARING OBJECTS
var john = { occupation: 'programmer' };
var mark = { occupation: 'programmer' };

// Comparing them returns false:

console.log(john === mark); // false
console.log(john == mark); // false


var coder = mark;
console.log(coder === mark); // true
console.log(coder == john); // false
