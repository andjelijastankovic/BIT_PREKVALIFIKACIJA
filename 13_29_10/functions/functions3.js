/* 
    1. Write a program to insert a string within a string 
    at a particular position (default is 1, 
    beginning of a string).
    "My random string", "JS" -> "JS My random string";
    "My random string", "JS", 10 -> "My random JS string";
*/
function insert_string(string, inserting, position) {
    if (typeof (position) == 'undefined') {
        position = 0;
    } else if (typeof (inserting) == 'undefined') {
        inserting = '';
    }

    return string.slice(0, position) + inserting + string.slice(position);

}

console.log(insert_string('I learn Java Script', '(JS)', 15));

/* 
    2. Write a program to join all elements of the array 
    into a string skipping elements that are
    undefined, null, NaN or Infinity.
    [NaN, 0, 15, false, -22, "", undefined, 47, null]
*/

function join_array_into_string(arr) {
    var new_arr = [];

    for (var i = 0; i < arr.length; i++) {
        var number = parseInt(arr[i]);
        if (!isNaN(number)) {
            new_arr.push(number);
        }
    }

    return new_arr;
}

console.log(join_array_into_string([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/* 
    3. Write a program to filter out falsy values from the array.
    input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
    output: [15, -22, 47]  
*/
function falsy(arr) {
    var new_arr = [];

    for (var i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            new_arr.push(arr[i]);
        }
    }

    return new_arr;
}

console.log(falsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));


/* 
    4. Write a function that reverses a number. 
    The result must be a number.
    12345 -> 54321 // Output must be a number
*/

function reverse(number) {
    var digits = number.toString().split('');
    new_arr = [];
    for (var i = digits.length - 1; i >= 0; i--) {
        new_arr.push(digits[i]);
    }

    var num = Number(new_arr.join(''));
    return num;

}

console.log(reverse(1234567891));

/* 
    5. Write a function to get the last element of an array. 
    Passing a parameter 'n' will return the
    last 'n' elements of the array.
    [7, 9, 0, -2] -> -2
    [7, 9, 0, -2], 2 -> [0, -2]
*/

function last(arr, n) {
    if (arr == null) {
        return void 0;
    } else if (n == null) {
        return arr[arr.length - 1];
    } else {
        return arr.slice(Math.max(arr.length - n, 0));
    }

}

console.log(last([7, 9, 0, -2]));

/* 
    6. Write a function to create a specified number 
    of elements with pre-filled numeric value array.
    6, 0 -> [0, 0, 0, 0, 0, 0]
    2, "none" -> ["none", none"]
    2 -> [null, null]
*/

function pre_filled(n, val) {


    if (typeof (val) == 'number') {
        return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
    } else if (typeof (val) == 'string') {
        return Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
    }

}

console.log(pre_filled(4, 'hello'));

/* 
    7. Write a function that says whether a number is perfect.
    28 -> 28 is a perfect number.

    Note: According to Wikipedia: In number theory, a perfect 
    number is a positive integer that is equal to the sum
    of its proper positive divisors, that is, the sum of 
    its positive divisors excluding the number itself (also known
    as its aliquot sum). Equivalently, a perfect number 
    is a number that is half the sum of all of its positive 
    divisors (including itself).

    E.g.: The first perfect number is 6, because 1, 2 and 3 are 
    its proper positive divisors, and 1 + 2 + 3 = 6.

    Equivalently, the number 6 is equal to half the sum of all 
    its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
    perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is 
    followed by the perfect numbers 496 and 8128.
*/

function perfect_number(number) {
    var divisors = [];
    var message = '';
    //for petlja da nadjemo delioce broja 
    for (var i = 0; i <= number; i++) {
        if (number % i == 0) {
            divisors.push(i);
        }
    }

    //for petlja da saberemo delioce broja
    var sum = 0;
    for (var i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }

    if (sum / 2 == number) {
        message = 'This number is perfect';
        return message;
    } else {
        message = 'This number is not perfect';
        return message;
    }

}

console.log(perfect_number(33550336));

/* 
    8. Write a function to find a word within a string.
    'The quick brown fox', 'fox' -> "" 'fox' was found 1 times"
    ''aa bb cc dd aa', 'aa' -> " 'aa' was found 2 times"
*/

function search_word(text, word) {

    var x = 0, y = 0;

    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(search_word('Little brown fox', 'fox'));


function find(string, word) {
    var x = 0;
    var y = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (string[j] == word[j - i]) {
                    y++;
                }

                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(find('Little brown fox', 'fox'));


/* 
    9. Write a function to hide email address.
    "myemailaddress@bgit.rs"" -> "mye...@bgit.rs"
*/

function hide(mail) {
    var splitted_after_monkey = mail.split('@');

    var part1 = splitted_after_monkey[0];
    var part2 = splitted_after_monkey[1];

    avg = Math.floor(part1.length / 4 * 3);
    part1 = part1.substring(0, (part1.length - avg));
    return part1 + "...@" + part2;

}

console.log(hide("myemailaddress@bgit.rs"));

/* 
    10. Write a program to find the most frequent item of an array.
    [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function frequency(arr1) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }

    return item+" (" +mf +" times)";
}

console.log(frequency([3, 3, 3, 3, 3, 3, 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));