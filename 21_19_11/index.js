function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

var anonymousLetter = function(str) {
    return isLetter(str);
}

console.log(anonymousLetter('b'));

var b = function(p) {
    return p;
}
console.log(b(4));

function test(b){
    return b(5);
}
console.log(test(b));

var sum = function (a, b) {
    return a + b;
}

var add = sum;

console.log(typeof add);