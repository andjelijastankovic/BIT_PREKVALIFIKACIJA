/* 
    The following exercises needs to be done on 2 ways: 
    1) using classes, 2) using constructor functions.

    1.  a) Create a Car class with properties (brand, model, motion) 
    and methods (check motion, accelerate, break).
    Check motion method should check the speed and returns if the car 
    are in move or not (speed is greater than zero). 
    Accelerate method should increase the speed for some number we provide.
    Break method should decrease the speed for the number we 
    provided (pay attention if the speed is negative number after decreasing).
        
    b) Add the status method that displays all current data for the car 
    (model, brand, motion state, speed => something like 
    "Ford Mondeo is running at 150km/h, car is moving").
    
    c) Add a new method to stop the car immediately 
    (set the speed to 0). It doesn't need parameters.
        
    d) Create a 3 car objects and test it!
*/

class Car {
    constructor(brand, model, motion) {
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }

    checkMotion() {
        if(this.motion > 0) {
            return 'car is moving';
        } else {
            return 'car is not moving';
        }
    }

    accelerate(speed) {
        this.motion = this.motion + speed;
    }

    break(speed) {
        this.motion = this.motion - speed;
        if(this.motion < 0) {
            this.motion = 0;
        } else if(this.motion > 0) {
            this.motion = this.motion;
        }
    }
    
    status() {
        return `${this.brand} ${this.model} is running at ${this.motion}km/h, ${this.checkMotion()}.`;
    }

    stop() {
        this.motion = 0;
    }

}

var car1 = new Car('Hyundai', 'Atos', 50);
var car2 = new Car('Seat', 'Leon', 100);
var car3 = new Car('Skoda', 'Fabia', 70);
//console.log(car1.checkMotion());
// car1.accelerate(10);
// console.log(car1.status());
// car1.break(20);
// console.log(car1.status());
// car1.stop();
// console.log(car1.status());
//console.log(car2.checkMotion());
// car3.accelerate(30);
// console.log(car3.status());
// car2.stop();
// console.log(car2.status());
// car2.accelerate(70);
// console.log(car2.status());
// console.log(car2.checkMotion());

//all tested - works great!!!

/* 
    2.
    done - a) Create a TV class with properties like brand, 
    channel and volume. Specify brand in a constructor parameter.
    Channel should be 1 by default. Volume should be 50 by default.

    done - b) Add methods to increase and decrease volume. Volume can't 
    never be below 0 or above 100.
    
    done - c) Add a method to set the channel. Let's say the TV has only
    50 channels so if you try to set channel 60 the TV will 
    stay at the current channel.
    
    done - d) Add a method to reset TV so it goes back to channel 1 
    and volume 50. (Hint: consider using it from the constructor).
    done - e) It's useful to write a status, that returns info about 
    the TV status like: "Panasonic at channel 8, volume 75".
    done - f) Create a TV object and test it!
*/
class Tv {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    increase(volumeUp) {
        this.volume += volumeUp;
        if(this.volume > 100) {
            this.volume = 100;
        }
    }

    
    decrease(volumeDown) {
        this.volume -= volumeDown;
        if(this.volume < 0) {
            this.volume = 0;
        }
    }
    
    setChannel(channelNumber) {
        
        if(channelNumber > 50) {
            this.channel = this.channel;
        } else {
            this.channel = channelNumber;
        }
    }

    reset() {
        this.channel = 1;
        this.volume = 50;
    }

    status() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

var tv1 = new Tv('Tesla', 40, 40);
tv1.increase(40);
tv1.setChannel(13);
console.log(tv1.status());
tv1.increase(90);
console.log(tv1.status());
tv1.reset();
console.log(tv1.status());
tv1.decrease(10);
tv1.setChannel(45);
console.log(tv1.status());
