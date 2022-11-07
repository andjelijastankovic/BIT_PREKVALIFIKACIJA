/* 
    Find the min and max element in the following 
    array and switch their places. Print out the
    modified array in the console.
    Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
    Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switch_places(arr) {
    var max = arr[0];
    var index_max = 0;
    var min = arr[0];
    var index_min = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index_min = i;
        }

        if (arr[i] > max) {
            max = arr[i];
            index_max = i;
        }
    }

    min[i] = min[index_max];
    max[i] = max[index_min];

    return arr;

}

console.log(switch_places([3, 500, 12, 149, 53, 414, 1, 19]));

/* 
    Use the following array to make a new one 
    by dividing its values by two and adding 5. 
    If a given element's value is 0, change it to 20.
    Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
    Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/
function divide_add(arr) {
    var arr_new = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] / 2 + 5;

        if (arr[i] == 0) {
            arr[i] = 20;
        }
    }

    return arr;
}

console.log(divide_add([3, 500, -10, 149, 53, 414, 1, 19]));

/* 
    Initialize two arrays. The first one should contain 
    student names, the second one the number of points for 
    each student. Display students' names with their corresponding
    grade. Use the following ranges:
    51-60 -> 6,
    61-70 -> 7,
    71-80 -> 8,
    81-90 -> 9,
    91-100 -> 10.
    
    Input:
    ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], 
    [50, 39, 63, 72, 99, 51, 83, 59]
    Output:
    Bill acquired 59 points and earned 6. 
    Micahel acquired 50 points and failed to complete
    the exam.
*/

//nije gotovo, pokusaj
function grades(students, grades) {
    var grade = 0;
    var students_grades = [];
    for(var i = 0; i < grades.length; i++) { 
        if(grades[i] >= 51 && grades[i] <= 60) {
            grade = ' and earned 6';
        } else if(grades[i] >= 61 && grades[i] <= 70) {
            grade = ' and earned 7';
        } else if(grades[i] >= 71 && grades[i] <= 80) {
            grade = ' and earned 8';
        } else if(grades[i] >= 81 && grades[i] <= 90) {
            grade = ' and earned 9';
        } else if(grades[i] >= 91 && grades[i] <= 100) {
            grade = ' and earned 10';
        } else {
            grade = ' and failed to complete the exam';
        }
    }

    var message = '';
    for(var j = 0; j < students.length; j++) {
        message = students[j] + ' acquired ' + grades[j] + grade;
        students_grades.push(message);
    }
    //return students_grades;

    var message = students_grades.join('\n');
    return message;
    
}
console.log(grades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/* 
    Sort a previously defined array. Place its sorted values 
    into a new array whose values are equivalent to the 
    first array's values multiplied by 2.
    Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

function sort_array(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                //zasto se ovde koristi pomocna promenljiva temp? -> pitanje
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }

    return arr;

}

console.log(sort_array([13, 11, 15, 5, 6, 1, 8, 12]));

/* 
    Sort a previously defined array in a descending order 
    and display it in the console.
    Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

function sort_descending(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(sort_descending([13, 11, 15, 5, 6, 1, 8, 12]));

/* 
    6. Write a program that uses a loop to add all the even numbers 
    from 1 to 1000 and subtracts all the odd numbers 1 to 500 
    from the calculated sum. The result should then
    be multiplied by 12.5 and displayed in console.
    Output: 2350000
*/

function loop_even_substract_odd() {
    var sum = 0;
    var result;

    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }

    for (var i = 1; i <= 500; i++) {
        if (i % 2 != 0) {
            sum -= i;
        }
    }


    result = sum * 12.5;
    return result;

}

console.log(loop_even_substract_odd());

/* 
    Define a 10 element array. Take the first two letters from 
    every string (that has at least 2 letters) in the array and 
    create a new string from them. Print it out in the console.
    Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", 
    "Mark", true, "A"]
    Output: AnStJoJoDaMa
*/
function substring(arr) {
    var new_string = '';
    var new_arr = [];

    //ovom petljom se dobija novi niz stringova cija je duzina veca od 2 karaktera
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string' && arr[i].length >= 2) {
            new_arr.push(arr[i]);
        }
    }

    //ovom petljom se po dva karaktera guraju u novi niz
    var strings_substrings = [];
    for (var i = 0; i < new_arr.length; i++) {
        strings_substrings.push(new_arr[i].substring(0, 2));
    }

    new_string = strings_substrings.join('');

    return new_string;

}

console.log(substring(["M", "Anne", 12, "Steve", "Joe", "John", "David",
    "Mark", true, "A"]));

/* 
    Write a program that takes a string and prints 
    its characters out in reversed order in the console.
    Input: Belgrade Institute of Technology
    Output: ygolonhceT fo etutitsnI edargleB
*/

function reversed_string(string) {
    var splitted = string.split('');
    var reversed_string = '';
    for (var i = splitted.length - 1; i >= 0; i--) {
        reversed_string += splitted[i];
    }

    return reversed_string;

}
console.log(reversed_string('Belgrade Institute of Technology'));

/* 
    Write a program that checks if the entered number is a 
    prime number (i.e. divisible only by 1 and by itself).
    Input: 17 | 15
    Output: true | false
*/

function primeOrNot(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(primeOrNot(18));

/* 
    Check if a given string is a palindrome (spaces are ignored).
    Input: eye | Geek | a nut for a jar of tuna
    Output: true | false | true
*/

function palindrome(str) {
    /* remove special characters, spaces and make lowercase*/
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');

    /* Check to see if str is a Palindrome*/
    if (removeChar === checkPalindrome) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('geek'));

/* 
    Write a program that displays all the combinations of 
    two numbers between 1 and 7.
    Don't display two of the same numbers at the same time. 
    Display the number of possible combinations, as well. 
    (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/
//ovo ne vrsi pos'o
function combinations() {
    var combinations = [];
    var count = 0;
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            if(i != j) {
                combinations.push(i + '.' + j);
            }
        }
    }
    return combinations;
}
console.log(combinations());

/* 
    Write a program that calculates the greatest common divisor 
    of two integers. Note: The greatest common divisor of 
    two non-zero integers is the greatest positive number that
    divides both numbers with no remainder.
    Input: 192 42 | 81 9
    Output: 6     | 9
*/

function greatestCommonDivisor(n1, n2) {
    divisorsN1 = [];
    divisorsN2 = [];

    for(i = 1; i <= n1; i++) {
        if(n1 % i == 0) {
            divisorsN1.push(i);
        }
    }

    for(i = 1; i <= n2; i++) {
        if(n2 % i == 0) {
            divisorsN2.push(i);
        }
    }

    var common = [];
    for(var j = 0; j < divisorsN1.length; j++) {
        for(var k = 0; k < divisorsN2.length; k++) {
            if(divisorsN1[j] == divisorsN2[k]) {
                common.push(divisorsN2[k]);
            }
        }
    }

    var greatest = common[common.length-1];
    return greatest;
}
console.log(greatestCommonDivisor(192, 42));