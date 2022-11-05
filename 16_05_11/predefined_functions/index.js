//PREDEFINISANE FUNCKIJE
//parseInt, parseFloat, isNaN, isFinite, encodeURI, decodeURI, eval...

//parseInt 
/*
    ukoliko se ubaci obican string, vraća NaN
    ukoliko se ubaci vise brojeva, npr parseInt('40 30 20') vratice samo prvi broj
*/
var x = parseInt('15.8');
console.log(x);
var y = parseFloat('20.31');

var z = Number('20');
//Number() - vraca i integer i float vrednosti
console.log(z);

//isNaN - is not a number; true ako nije broj, false ako nije

function checkIfItIsNumber(input) {
    var parsed = Number(input);
    var result = isNaN(parsed);
    if(result) {
        return 'input is not a number';
    } else {
        return 'input is a number';
    }
}
console.log(checkIfItIsNumber('test test'));
//kada je broj u stringu, cita ga kao broj, ne proverava vrednost
console.log(checkIfItIsNumber('32332'));
console.log(checkIfItIsNumber(323));

console.log(isFinite(45)); //true - jer je konacan broj
console.log(isFinite(Infinity)); //false - nije konacan broj
console.log(isFinite(NaN)); //false - nije konacan broj
console.log(isFinite(undefined)); //false

var a = 10;
var b = 20;
//eval - vrsi evaluaciju onoga sto je poslato
var z = eval('a * b');
console.log(z);

function dynamicCalculation(a, b, operation) {
    var op = 'a' + operation + 'b';
    return eval(op);
}

console.log(dynamicCalculation(10, 20, '+'));