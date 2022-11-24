/* 
    1. Write a function named tellFortune that:
     takes 4 arguments: number of children, partner's 
    name, geographic location, job title.
     outputs your fortune to the screen like so: 
    "You will be a X in Y, and married to Z with N kids."
    Call that function 3 times with 3 different values for 
    the arguments.
*/

function tellFortune(children, partner, location, job) {
    return ('You will be a ' + job + ' in ' + location + ', and married to ' + partner + ' with ' + children + ' kids.');
}
console.log(tellFortune(2, 'Jeff', 'Istanbul', 'web developer'));
console.log(tellFortune(5, 'Marco', 'New York', 'barmen'));
console.log(tellFortune(1, 'Helen', 'Belgrade', 'construction worker'));

/* 
    2. Write a function named calculateDogAge that:
     takes 1 argument: your puppy's age.
     calculates your dog's age based on the conversion 
    rate of 1 human year to 7 dog years.
     outputs the result to the screen like so: 
    "Your doggie is NN years old in dog years!"
    Call the function three times with different 
    sets of values.

    Bonus: Add an additional argument to the function 
    that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age, human_age) {

    if (typeof (age) != 'number' || typeof (human_age) != 'number') {
        return 'Not valid';
    } else {
        var age = 7 * age;
        var human_age = Math.floor(age / 7);
        var message = 'Your doggie is ' + age + ' old in dog years!' + '\n' + 'You are ' + human_age + ' years old!';
        return message;
    }

}
console.log(calculateDogAge(4, 8));
console.log(calculateDogAge(7, 15));
console.log(calculateDogAge(12, 45));
console.log(calculateDogAge('sa', 4));

/* 
    3. Write a function named calculateSupply that:
     takes 2 arguments: age, amount per day.
     calculates the amount consumed for rest of the life 
    (based on a constant max age).
     outputs the result to the screen like so: 
    "You will need NN to last you until the ripe old age of X"
    Call that function three times, passing in different values
    each time.
    Bonus: Accept floating point values for amount per day, 
    and round the result to a round number.
*/

function calculateSupply(age, amount) {
    const max_age = 100;

    var total = Math.floor((amount * 365) * (max_age - age));

    return ('You will need ' + total + ' to last you until the ripe old age of ' + max_age);

}
console.log(calculateSupply(12, 34.7873233223323232));
console.log(calculateSupply(45, 123));
console.log(calculateSupply(32, 48));

/* 
    4. Create a function called celsiusToFahrenheit:
     Store a celsius temperature into a variable.
     Convert it to fahrenheit and output 'NN°C is NN°F'.

    Create a function called fahrenheitToCelsius:
     Now store a fahrenheit temperature into a variable.
     Convert it to celsius and output 'NN°F is NN°C'
    *NN is actual temperature you need to convert
*/
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 1.8 + 32).toFixed(1);
    var message = celsius + '°C' + ' is ' + fahrenheit + '°F';
    return message;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (5 / 9 * (fahrenheit - 32)).toFixed(1);
    var message = fahrenheit + '°F' + ' is ' + celsius + '°C';
    return message;
}

console.log(celsiusToFahrenheit(30));
console.log(celsiusToFahrenheit(-12));
console.log(fahrenheitToCelsius(88));
console.log(fahrenheitToCelsius(0));

/* 
    5. Create a function that validates a password to conform to 
    the following rules:
    - Length between 6 and 24 characters,
    - At least one uppercase letter (A-Z).
    - At least one lowercase letter (a-z).
    - At least one digit (0-9).
    - Maximum of 2 repeated characters ('aa' is OK, 'aaa' is NOT).
    - Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
    - Examples: validatePassword('P1zz@') ➞ false // Too short.
    - validatePassword('iLoveYou') ➞ false // Missing a number.
    - validatePassword('Fhg93@') ➞ true // OK!
*/

//ne radi kako treba
function validatePassword(pass) {
    var check = true;
    var countLetters = 0;
    for (var i = 0; i < pass.length; i++) {
        if (pass.length >= 6 && pass.length <= 24) {
            check = 'Good length';
        } else {
            check = 'Too short or too big.';
        }

        if (pass.toLowerCase() === pass) {
            check = 'Must have upper and lowercase.';
        }

        var numbers = Number(pass[i]);

        if (isNaN(numbers)) {
            check = 'Missing a number.';
        }

        if (pass.match(/(.)\1\1/)) {
            check = 'Maximum of 2 repeated characters.';
        } else {
            check = 'Not more than 3 repeated characters';
        }

    }

    return check;
}

console.log(validatePassword('P1zz@'));

//Nikolino resenje
function checkLetter(pass, letterCase) {
    var result = false;

    for (var i = 0; i < pass.length; i++) {
        if (isLetter(pass[i])) {
            if (letterCase && pass[i] === pass[i].toUpperCase()) {
                return true;
            } else if (!letterCase && pass[i] === pass[i].toLowerCase()) {
                return true;
            }
        }
    }

    return false;
}

function checkIfContainsNumber(pass) {
    for (var i = 0; i < pass.length; i++) {
        var parsed = Number(pass[i]);

        if (!isNaN(parsed)) {
            return true;
        }
    }
    return false;
}

function validatePass(pass) {
    if (pass.length < 6 || pass.length > 24) {
        console.log('Password must be between 6 and 24');
        return false;
    }

    var containsUpper = checkLetter(pass, true);

    if (!containsUpper) {
        console.log('Password must contain al least one capital letter');
        return false;
    }

    var containsLower = checkLetter(pass, false);
    if (!containsLower) {
        console.log('Password must contain al least one lower letter');
        return false;
    }

    var containsDigit = checkIfContainsNumber(pass);
    if (!containsDigit) {
        console.log('Password must contain al least one number');
        return false;
    }

    var specialChars = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " \' ? < > , .';
    var usesSpecial = false;
    for (var i = 0; i < pass.length; i++) {
        if (!isLetter(pass[i]) && isNaN(pass[i]) && !specialChars.includes(pass[i])) {
            usesSpecial = true;
            break;
        }
    }

    if (usesNotAllowedSpecials) {
        console.log('Password can only contain permitted characters');
        return false;
    }

    if (threeInRow) {
        console.log('pass cannot have 3 repeated characters');
        return false;
    }

    var threeInRow = false;
    for (letter in pass) {
        if (pass[letter] === pass[parseInt(letter) + i] && pass[letter] === pass[parseInt(letter) + 2]) {
            threeInRow = true;
            break;
        }
    }
}

// 5. Solution one:
function lengthOK(password) {
    var lengthMessage = "Password must be between 6 and 24 characters long!";
    if (password.length >= 6 && password.length <= 24) {
        return true;
    } else {
        console.log(lengthMessage);
        return false;
    }
}
function atLeastOneUppercase(password) {
    var hasUppercaseMessage = "Password has NO uppercase letters!";
    var containsUppercase = !!/[A-Z]+/.test(password);
    if (containsUppercase) {
        return true;
    } else {
        console.log(hasUppercaseMessage);
        return false;
    }
}
function atLeastOneLowercase(password) {
    var hasLowercaseMessage = "Password has NO lowercase letters!";
    var containsLowercase = !!/[a-z]+/.test(password);
    if (containsLowercase) {
        return true;
    } else {
        console.log(hasLowercaseMessage);
        return false;
    }
}
function atLeastOneDigit(password) {
    hasAtLeastOneDigitMessage = "Password has NO numbers!";
    var containsNumber = !!/[0-9]+/.exec(password);
    if (containsNumber) {
        return true;
    } else {
        console.log(hasAtLeastOneDigitMessage);
        return false;
    }
}
function noTwoOrMore(password) {

    // var threeInRow = false;
    // for(letter in password) {
    //     if(password[letter] === password[parseInt(letter) + 1] && password[letter] === password[parseInt(letter) + 2]) {
    //         threeInRow = true
    //     }
    // }

    // if(threeInRow) {
    //     console.log('password cannot have three repeated characters')
    //     return false;
    // }

    if (!!/(.)\1{2,}/.exec(password)) {
        console.log("Contains three characters in a row!");
        return false;
    }

    return true;
}
function filterSpecialCharacters(password) {
    var usesNotAllowedSpecials = false;
    var specialChars = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .';
    for (letter in password) {
        if (!specialChars.includes(password[letter]) && !password[letter].match(/[a-z]/i) && isNaN(parseInt(password[letter]))) {
            usesNotAllowedSpecials = true;
        }
    }

    if (usesNotAllowedSpecials) {
        console.log('Password can only contain permitted characters!');
        return false;
    }

    return true;
}
function validatePassword(password) {
    return lengthOK(password) &&
        atLeastOneUppercase(password) &&
        atLeastOneLowercase(password) &&
        atLeastOneDigit(password) &&
        noTwoOrMore(password) &&
        filterSpecialCharacters(password)
}



/* 
    6. Create a function that finds how many prime 
    numbers there are, up to the given integer.
    Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
    primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
    primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
*/

function primeNumbers(n) {
    var counter = 0;
    var primes = [];

    for (let i = 1; i <= n; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            counter++;
            primes.push(i);
        }
    }
    return 'There are ' + counter + ' prime numbers between 0 and ' + n + ' and they are ' + primes;
}
console.log(primeNumbers(20));

//Nikolino resenje
function prost(num) {
    var result = [];

    for (var i = 2; i <= num; i++) {
        var notPrime = false;

        for (var j = 2; j <= i; j++) {
            if (i % j === 0 && i != j) {
                notPrime = true;
                break;
            }
        }

        if (!notPrime) {
            result.push(i);
        }
    }

    console.log(`There are ${result.length} prime numbers: ` + result);
}
prost(10);
/* 
    7. Create a function that returns an array that expands 
    by 1 from 1 to the value of the input, and then
    reduces back to 1. Items in the arrays will be the 
    same as the length of the arrays.

    Examples:
    diamondArrays(1) ➞ [1],
    diamondArrays(2) ➞ [1, 2, 2, 1]
    diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]
*/

function diamondArrays(n) {
    if (n === 1) { return 1; }
    var arr = [];


    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            arr.push(i);
        }
    }

    //reversed loop
    var rev = arr.slice().reverse();

    const filteredNumbers = rev.filter(number => number !== n);

    arr.push(...filteredNumbers);

    return arr;
}
console.log(diamondArrays(7));

//nikolino resenje

function fillArr(result, i) {
    for (var j = 1; j <= i; j++) {
        result.push(i);
    }
}
function diamond(num) {
    var result = [];

    for (var i = 1; i <= num; i++) {
        // for(var j = 1; j <= i; j++) {
        //     result.push(i);
        // }
        fillArr(result, i);
    }

    for (var i = num - 1; i >= 1; i--) {
        // for(var j = 1; j <= i; j++) {
        //     result.push(i);
        // }
        fillArr(result, i);
    }

    return result;

}
console.log(diamond(5));