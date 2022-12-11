/* 
    1. Create an object that represents your favourite coffee. Please include coffee name,
    strength, flavour, milk, sugar, … everything you like!
*/
var favorite = {
    name: 'turkish coffee',
    strength: 'strong',
    milk: 'with milk',
    sugar: 'no sugar'
}
console.log(favorite);

/* 
    2. Create an object that represents your favourite movie. Please include title, actors,
    director, genre, popularity.
*/
var movie = {
    title: 'Incendies',
    actors: [
        'Pera Peric',
        'Mika Mikic'
    ],
    director: 'Petar Petrovic',
    genre: 'drama',
    popularity: 'not so popular'
}
console.log(movie);

/*
    3. Write a function that creates an object that represents a project. Each project is
    described by: description, programming language, git repository, boolean status that
    says if the project is in development or not. Add a method that prints out the project's
    repository, a method that checks if the project is written in JavaScript as well as a
    method that checks if the project is in development or not.
*/

var project = {
    desc: 'Landing page for some company',
    pr_lan: 'JavaScript',
    git_repo: 'link to git repository',
    dev_status: 1,
    methodRepo: function (git_repo) {
        return git_repo;
    },
    methodJsOrNot: function (pr_lan) {
        if (pr_lan == 'JavaScript') {
            return 'Project written in JS';
        } else {
            return 'Not written in JS';
        }
    },
    methodDevOrNot: function (dev_status) {
        if (dev_status == 1) {
            return 'active status';
        } else {
            return 'not in development';
        }
    }
}

console.log(project.methodRepo('link to git repo'));
console.log(project.methodJsOrNot('Java Script'));
console.log(project.methodDevOrNot(12));

/* 
    4. Write a function that creates an object that represents a culinary recipe. Each recipe is
    described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
    preparing time, preparing instruction.
    ○ Add a method that prints out all the ingredients necessary for the meal
    preparation.
    ○ Add a method that checks if a meal can be prepared in under 15 minutes.
    ○ Add a method that changes the type of cuisine to the given value.
    ○ Add a method that delete a given ingredient from the list of ingredients.
*/

function createObj(name, typeCuisine, complex, list, time, instruction) {

    var recipe = {
        name: name,
        typeCuisine: typeCuisine,
        complex: complex,
        list: list,
        time: time,
        instruction: instruction,
        methodList: function () {
            return recipe.list;
        },
        methodMinutes: function () {
            if (time < 15) {
                return 'less than 15 minutes';
            } else {
                return 'more than 15 minutes';
            }
        },
        methodType: function (newName) {
            recipe.typeCuisine = newName;
            return recipe.name + '\n' + recipe.typeCuisine + '\n' + recipe.complex + '\n' + recipe.list + '\n' + recipe.time + '\n' + recipe.instruction;
        },
        methodDelete: function (listItemToDelete) {
            for (var i = 0; i < recipe.list.length; i++) {
                if (recipe.list[i] == listItemToDelete) {
                    recipe.list.splice(i, 1);
                }
            }

            return recipe.list;
        }

    }

    return recipe.methodList() + '\n' + recipe.methodMinutes() + '\n' + recipe.methodType('italian') + '\n' + recipe.methodDelete('oil');
}
console.log(createObj('rice', 'chinese', 3, ['rice', 'oil', 'onion', 'tomato sos'], 12, 'put it in the oven to bake'));

//zadaci 10.12.2022.
/*
    1. Create a function that takes an array of objects 
    (groceries) which calculates the total
    price and returns it as a number. A grocery object 
    has a product, a quantity and a price,
    for example:
    {
        "product": "Milk",
        "quantity": 1,
        "price": 1.50
    }
}
*/

function groceries(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].quantity * arr[i].price;
    }

    return sum;
}
console.log(groceries([{ product: "Milk", quantity: 3, price: 1.50 }, { product: "Milk", quantity: 1, price: 1.50 }, { product: "Milk", quantity: 1, price: 1.50 }]));
/*
    2. You go to a jewelry shop and try to find 
    the most expensive piece of jewelry. You write
    down the name of each piece of jewelry 
    and its price. Create a function that gets the
    name of the piece of jewelry with the highest 
    price and returns "The most expensive
    one is the {name of jewelry piece}".
    Example:
    mostExpensive([{name:’DiamondEarings’, price: 980}, 
    {name:’Gold watch’, price:250},…])
    - The most expensive one is the diamond Ring.
*/
function mostExpensive(arr) {
    var highestPrice = 0;
    var highestName;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price > highestPrice) {
            highestPrice = arr[i].price;
            highestName = arr[i].name;
        }
    }

    return 'The most expensive one is the ' + highestName;
}
console.log(mostExpensive([{ name: 'DiamondEarings', price: 980 }, { name: 'Gold watch', price: 250 }]));

/* 
    3. Given a word, create an object that stores 
    the indexes of each letter in an array. Make
    sure the letters are the keys. Make sure 
    the letters are symbols. Make sure the indexes
    are stored in an array and those arrays are values.
    Examples:
    mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
    mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
    mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
*/

function mapLetters(word) {
    var object = {};

    for (var i = 0; i < word.length; i++) {
        if (object[word[i]]) {
            continue;
        }
        var arr = [i];
        for (var j = 0; j < word.length; j++) {
            if (word[i] == word[j] && i != j) {
                arr.push(j);
            }
        }
        object[word[i]] = arr;
    }

    return object;
}
console.log(mapLetters('hello'));

/* 
    4. And who cursed the most in the fight between 
    you and your spouse? Given an object
    with three rounds, with nested objects as your 
    scores per round, return a string of who
    cursed the most: If you, return "ME!" 
    If your spouse, return "SPOUSE!" If a draw, return
    "DRAW!"
    Examples:
    determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 },
    { me: 0, spouse: 10, }]) ➞ "DRAW!"
    determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,
    spouse: 10}]) ➞ "ME!"
    determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9, spouse: 44 }, { me: 10,
    spouse: 55}]) ➞ "SPOUSE!"
*/

function determineWhoCursedTheMost(arr) {
    var sum_me = 0;
    var sum_spouse = 0;
    for (var i = 0; i < arr.length; i++) {
        sum_me += arr[i].me;
        sum_spouse += arr[i].spouse;
    }

    if (sum_me > sum_spouse) {
        return "ME";
    } else if (sum_spouse > sum_me) {
        return "SPOUSE";
    } else {
        return "DRAW";
    }
}
console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 5, spouse: 10 }, { me: 10, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 40, spouse: 5 }, { me: 9, spouse: 10 }, { me: 9, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 9, spouse: 44 }, { me: 10, spouse: 55 }]));

/* 
    5. Create a function that converts color in RGB format to Hex format.
    Examples:
    rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0"
*/

function rgbToHex(object) {
    var hex = '';

    var red = object.red.toString(16);
    var green = object.green.toString(16);
    var blue = object.blue.toString(16);

    hex = '#' + red + green + blue;
    return hex;
}
console.log(rgbToHex({ red: 0, green: 128, blue: 192 }));

/* 
    6. Create a function that takes an amount of 
    monetary change (e.g. 47 cents) and breaks
    down the most efficient way that change can be 
    made using USD quarters, dimes,
    nickels and pennies. Your function should return an object.
    Examples:
    makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
    makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
    makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
    penny - 1
    nickel - 5
    dime - 10
    quarter - 25
*/

function makeChange(number) {
    var quarter = 0; //25
    var dime = 0; //10
    var nickel = 0; //5
    var penny = 0; //1
    var remainingChange = number;

    while (remainingChange >= 25) {
        remainingChange -= 25;
        quarter++;
    }
    while (remainingChange >= 10) {
        remainingChange -= 10;
        dime++;
    }
    while (remainingChange >= 5) {
        remainingChange -= 5;
        nickel++;
    }
    while (remainingChange > 0) {
        remainingChange -= 1;
        penny++;
    }

    var obj = {
        q: quarter,
        d: dime,
        n: nickel,
        p: penny
    }

    return obj;

}
console.log(makeChange(13));
console.log(makeChange(24));
console.log(makeChange(92));

/*
    7. Create a function that takes an array of objects 
    like { name: "John", notes: [3, 5, 4]} and
    returns an array of objects like 
    { name: "John", avg Note: 4 }. 
    If student has no notes (an empty array) then 
    let's assume avg Note: 0.
    Examples:
    [
        { name: "John", notes: [3, 5, 4]}
    ]
    ➞
    [
    { name: "John", avgNote: 4 }
    ]
*/
function avg(arr) {

    var obj = {}
    var avgNote = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        var brojOcena = arr[i].notes.length;
        var ocene = arr[i].notes;
        var ime = arr[i].name;

        for (var j = 0; j < ocene.length; j++) {
            sum += ocene[j];
            avgNote = (sum) / brojOcena;
        }
    }

    obj = {
        name: ime,
        avgNote: avgNote
    }
    return obj;
}
console.log(avg([{ name: "John", notes: [3, 5, 4] }]));

/* 
    8. Given an object with students and the 
    grades that they made on the tests that they
    took, determine which student has the 
    best Test Average. The key will be the student's
    name and the value will be an array of their grades. 
    You will only have to return the student's name. 
    You do not need to return their Test Average.
    getBestStudent([{ name: ‘John’, grades: [100, 90, 80]}, 
    {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" 
    // John's avg = 90 // Bob's avg = 83.33
*/

function getBestStudent(arr) {
    var avg = 0;
    var sum = 0;
    var arr_obj = [];
    var sum_arrays = [];
    for(var i = 0; i < arr.length; i++) {
        var gradesLength = arr[i].grades.length;
        var grades = arr[i].grades;
        
        for (var j = 0; j < gradesLength; j++) {
            sum += grades[j];
            avg = sum / gradesLength;  
        }
        //creating new object with name, grades and average of grades
        var obj = {
            name: arr[i].name,
            grades: arr[i].grades,
            avg: avg
        }
        arr_obj.push(obj); //making new array of objects
        //reseting sum and avg
        sum = 0;
        avg = 0;
    }

    for(var i = 0; i < arr_obj.length; i++) {
        var biggestAverageName = '';
        var biggestAverage = arr_obj[0].avg;
        var averages = arr_obj[i].avg;
        var averagesLength = arr_obj[i].avg.length;
        if(arr_obj[i].avg > biggestAverage) {
            biggestAverage = arr_obj[i].avg;
            biggestAverageName = arr_obj[i].name;
        }
        
    }

    return biggestAverageName + ' ' + biggestAverage;
}
console.log(getBestStudent([{ name: 'John', grades: [100, 90, 80]}, {name: 'Bob', grades: [100, 70, 80]}, {name: 'Andja', grades: [10000]}]));