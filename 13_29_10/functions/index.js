function sum(a, b) {
    //console.log(arguments); - ispisuje argumente funkcije, tj. 3 i 4
    var c = a + b;
    return c;
    //return a + b; <- isto kao 2+3 linija koda
}

var result = sum(3, 4);
console.log(result);

result = sum(4, 5);
console.log(result);

function sumUpdate() {
    var args = arguments;
    var result = 0;
    for(var i = 0; i < args.length; i++) {
        var value = args[i +'']; //u pitanju je string u objektu args
        console.log(value);
        result += value;
    }

    return result;
}

var sumA = sumUpdate(6, -5, 3, 4, 5);
console.log(sumA);

