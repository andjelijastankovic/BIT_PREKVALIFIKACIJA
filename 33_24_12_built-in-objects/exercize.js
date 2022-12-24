/*
    Try to solve all assignments on a separate branch. 
    Keep in mind that you should try to use built-in
    objects and their methods, solo or combined. 
    You should use loops only for the 4 and 9 assignment, 
    all others can be solved using built-in object methods.
*/

/*
    1. Write a JavaScript function that reverses a number. typeof result of the function should
    be 'number'.
    12345 -> 54321
*/

function reverseNumber(num) {
    var num = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    return num;
}
console.log(reverseNumber(-12345));

/*
    2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
    Note: Assume punctuation, numbers and symbols are not included in the passed string.
    'Webmaster' -> 'abeemrstw'
*/

function alphabeticalOrder(str) {
    var str = str.split('');
    var res = str.sort().join('');
    return res.toLowerCase();
}
console.log(alphabeticalOrder('Webmaster'));

/*
    3. Write a function to alphabetize words of a given string. Alphabetizing a string means
    rearranging the letters so they are sorted from A to Z.
    'Republic Of Serbia'-> 'Rbceilpu Of Sabeir'
*/

function alphabetizing(str = '') {
    if(!str || str.length == 0) {
        return '';
    }

    var splitted = str.split(' ');
    var arr = [];
    for(var i = 0; i < splitted.length; i++) {
        arr.push(splitted[i].substring(1, 0) + splitted[i].slice(1).split('').sort().join(''));
    }

    return arr.join(' ');
}
console.log(alphabetizing('Andjelija Stankovic'));

/*
    4. Write a function to split a string and convert it into an array of words.
    'John Snow' -> [ 'John', 'Snow' ]
*/

function splitString(str = '') {
    if(!str || str.length == 0) {
        return '';
    }

    return str.split(' ');
}
console.log(splitString('John Snow'));

/*
    5. Write a function to convert a string to its abbreviated form.
    'John Snow' -> 'John S.'
*/

function abbreviated(str) {
    var split_names = str.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
}
console.log(abbreviated('John Snow'));

/*
    6. Write a function that adds string to the left or right of string, by replacing it’s characters.
    '0000',     '123',  'l'      ->   '0123'
    '00000000', '123',  'r'      ->   '12300000'
*/

function leftOrRight(string = '', replacement = '', side = '') {
    if(!string || !replacement || !side || string.length == 0 || replacement.length == 0) {
        return 'error';
    }

    for(var i = 0; i < string.length; i++) {
        if(side === 'r') {
            string = string.replace(string.substring(0, replacement.length), replacement);
            return string;
        } else if(side === 'l') {
            var chunk = string.slice(replacement.length);
            string = chunk.concat(replacement);
            return string;
        }
    }
}
console.log(leftOrRight('0000', '123', 'r'));
/*
    7. Write a function to capitalize the first letter of a string and returns modified string.
    'js string exercises' -> 'Js string exercises'
*/
function capitalizeFirst(string = '') {
    if (!string || string.length == 0) {
        return '';
    }

    var first = string.charAt(0).toUpperCase();
    var restOfString = string.substring(1);
    return first.concat(restOfString);
}
console.log(capitalizeFirst('js string exercizes'));

/*
    8. Write a function to hide email addresses to protect them from unauthorized users.
    'somerandomaddress@example.com' -> 'somerand...@example.com'
*/
function hideMail(mail = '') {
    if (!mail || mail.length == 0) {
        return 'error';
    }

    var splitted = mail.split('@');
    var firstPart = splitted[0];
    firstPart = firstPart.substring(0, (firstPart.length - firstPart.length / 2));
    var secondPart = splitted[1];

    return firstPart.concat('...@', secondPart);
}
console.log(hideMail('somerandomaddress@example.com'));

/*
    9. Write a program that accepts a string as input and swaps the case of each character. For
    example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    'The Quick Brown Fox' -> 'tHE qUICK bROWN fOX'
*/

function swapCase(string = '') {
    if (!string || string.length == 0) {
        return '';
    }
    var result = [];
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < string.length; i++) {
        if (UPPER.indexOf(string[i]) !== -1) {
            result.push(string[i].toLowerCase());
        }
        else if(LOWER.indexOf(string[i]) !== -1) {
            result.push(string[i].toUpperCase());
        }
        else {
            result.push(string[i]);
        }
    }

    return result.join('');
}
console.log(swapCase('The Quick Brown Fox'));