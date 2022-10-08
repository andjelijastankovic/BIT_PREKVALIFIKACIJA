var mood = 'happy';
console.log(mood);

console.log(3-2-31);
console.log(3*5-7/3);
console.log(4/2-1.14*3);

var bananasWeightKilogram = 1.2;
var grams = 1000*bananasWeightKilogram;
console.log('1.2kg of bananas grams weight is ' + grams + 'g');

var annaMin = 5;
var TomMin = 30;
console.log('Anna is being late for 5 minutes, or ' + annaMin*60 + ' seconds. Tom is being late for ' + TomMin*60 + ' seconds (half an hour).'); 

var gb = 4;
var gbToMb = gb * 1024;
var kb = 98;
var gbToKb = gb * Math.pow(2, 20);
var articles = Math.floor(gbToKb / 98);
console.log('If we buy 4GB USB stick, we have ' + gbToMb + 'MB additional memory and there can fit ' + articles + ' articles each in 98KB size.');

var _name = 'Andja';
var age = 27;
var $cat = true;

console.log(_name);
console.log(age);
console.log($cat);
console.log('Check which type are these values:');

console.log(typeof 'number');
console.log(typeof true);
console.log(typeof null);
console.log(typeof 'false');
console.log(typeof 56);

console.log('boolean equivalent');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


if(age < 0) {
    console.log(age + ' is a negative value');
} else if(age > 120) {
    console.log(age + ' is greater than 120');
} else {
    console.log(age + ' is between 0 and 120');
}

speed = 36;
if(speed > 60 && speed < 120) {
    console.log(true);
} else {
    console.log(false);
}

(age > speed) ? console.log('da') : console.log('ne');