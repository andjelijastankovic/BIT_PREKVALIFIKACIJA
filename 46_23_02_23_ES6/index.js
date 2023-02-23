function outer() {

    console.log('in outer');

}

{
    let inner = function () {
        console.log('in inner');
    }

    outer(); // works - globalno 
    inner(); // works - block scope 
}
outer(); // works - globalno
inner(); // throws ReferenceError, jer je definisana u bloku iznad kao let



// es5
var pizza = true;
pizza = false;
console.log(pizza); // false

// es6 (es2015)
const pizza = true;
pizza = false; // TypeError: Assignment to constant variable

const randObj = { random: 'test' };
randObj.random = 'test1';
console.log(randObj);

function logActivity(name = "Bla Bla", activity = "running") {
    console.log(`${name} loves ${activity}`)
}
logActivity() // Bla Bla loves running


//Enhanced Object Literals
const fruit = 'apple', number = 19;
const obj = {
    fruit, foo: 'bar', number, getData() {
        console.log(fruit, number);
    }
};
console.log(obj);
obj.getData();
//{fruit: 'apple', foo: 'bar', number: 19}

//Destructuring Assignment
const sandwich = {
    bread: "italian",
    meat: "tuna",
    cheese: "swiss",
}

let { bread, meat } = sandwich;

console.log(bread, meat); // italian tuna

sandwich.bread = 'French';
meat = 'beaf';
console.log(bread, meat);
console.log(sandwich);



function showName(personObject) {
    console.log(`${personObject.name}`)
}

const regularPerson = {
    name: "John", surname: "Snow"
}

//showName(regularPerson); // John

// function showNameDest({ name, surname }) {
//     console.log(`${name} ${surname}`);
// }

// showNameDest(regularPerson); // John Snow

const companies = ["Apple", "Microsoft", "Samsung"];
const [firstCompany, secondCompany, thirdCompany] = companies;
console.log(firstCompany, secondCompany, thirdCompany); // Apple Microsoft Samsung

const [, , lastCompany] = ["Apple", "Microsoft", "Samsung"];
console.log(lastCompany); // Samsung


//arrow functions

const showNameDest = ({ name, surname }) => {
    console.log(`${name} ${surname}`);
}

showNameDest(regularPerson);

const arr = [1, 2, 3, 4];
let sum = 0;

arr.forEach(element => {
    sum += element;
});

arr.forEach(function (element) {
    sum += element;
});

console.log(sum);

//spread operator
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];
console.log(tahoe.join(', '));
// Tallac, Ralston, Rose, Ward, Blackwood


//rest operator
const [first, ...rest] = peaks;
console.log(first);
console.log(rest);



const morning = {
    breakfast: "Ham and eggs",
    lunch: "Burger"
}

const dinner = "Fish";

const backpackingMeals = {
    ...morning,
    dinner
}

console.log(backpackingMeals)