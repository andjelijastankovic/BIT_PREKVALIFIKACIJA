// var a = 'Hello';

// first();

// function first() {
//     var b = 'Hi';
//     second();
//     function second() {
//         for(var i = 0; i < 2; i++) {
//             const c = 'Hey';
//             console.log(a, b, c);
//         }

//         console.log(a, b, c);
//     }
// }
//call, apply, bind
// var dudeObj = {
//     job: 'Ninja',
//     say: function (who) {
//         return 'Hey ' + who + ', I am a ' + this.job;
//     }
// };

// dudeObj.say('Dude'); // "Hey Dude, I am a Ninja"
// var programmerObj = { job: 'Scripting guru' };
// dudeObj.say.call(programmerObj, 'Dude');

function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand) {
    //Car.call(this, 'convertible', 'petrol');
    Car.apply(this, ['convertible', 'petrol']);
    this.brand = brand;

    console.log('Car details', this);
}

function DefinePrice(price) {
    Car.call(this, 'limo', 'diesel');
    this.price = price;

    console.log('Car details', this);
}

const newBrand = new setBrand('Opel');
const newPrice = new DefinePrice(20000);

//bind

var car = {
    model: 'Opel Astra', 
    year: 2007,
    getData: function() {
        return `${this.model} ${this.year}, I choose you`;
    }
}

var modelName = function() {
    console.log(this.getData());
}

var logCar = modelName.bind(car);
console.log(logCar);
logCar();

class CarTest {
    constructor(type, fuelType) {
        this.type = type;
        this.fuelType = fuelType;
    }

    getData() {
        return `${this.type} ${this.fuelType}`;
    }
}

var logCar = modelName.bind(new CarTest('limo, diesel'));
console.log(logCar);
logCar();

