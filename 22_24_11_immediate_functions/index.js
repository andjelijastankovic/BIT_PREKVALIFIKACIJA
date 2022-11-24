//mana - ne može ponovo da se upotrebljava funkcija 

var b = (
    function() {
        console.log('boo');
        return 1;
    }
) ();

console.log(b);

var c = (
    function (mood) {
        console.log('Feeling ' + mood + '!');
        return mood;
    }
)('sad');

console.log(c);

//inner (private) functions
function outer(c) {
    function inner(a) {
        return a + 1;
    }

    return c + inner(2);
}

var resultInner = inner(3);
console.log(resultInner); //nece da radi, puca jer je funkcija unutar funkcije

var result = outer(3);
console.log(result);


function outer(c) {
    return function inner(b) {
        return c + b + 1;
    };
}

var result = outer(0); // c = 0
//console.log(result(3));
console.log(result);
//var result = outer(3)(3); 
var resultB = result(3); // b = 3
console.log(resultB);
//console.log(typeof result); //function
//ako hoces da dobijes vrednost unutrasnje funkcije, moras dva puta da je pozoves


//CALLBACK FUNCTIONS
function one() {
    return 1;
}

function two() {
    return 2;
}

function invokeAdd(a, b) {
    return a() + b();
}

console.log(invokeAdd(one, two));