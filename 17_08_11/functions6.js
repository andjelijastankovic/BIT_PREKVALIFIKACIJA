/*
    15. Write a function that takes a list of strings
    and prints them, one per line in a rectangular frame.

    For example the list ['Hello', 'world', 'in', 'a', 'frame']
    gets printed as:
        *********
        * Hello *
        * World *
        * in    *
        * a     *
        * frame *
        *********
*/

function addHeaderAndFooter(maxLength) {
    var result = '';
    for (var i = 0; i < maxLength; i++) {
        result += '*';
    }

    return result;
}

function addStars(str, maxLength) {
    var result = '* ' + str;


    for (var i = 0; i < maxLength - str.length - 4; i++) {
        result += ' ';
    }

    return result + ' *';
}

function addFrame(inputArray) {
    //provera da li je niz
    if (!inputArray || inputArray.length < 1) {
        return inputArray;
    }


    var maxLength = 0;

    for (var i = 0; i < inputArray.length; i++) {
        var wordLength = inputArray[i].length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
        }
    }

    maxLength += 4;

    var header = addHeaderAndFooter(maxLength);
    var result = header + '\n';

    for (var i = 0; i < inputArray.length; i++) {
        result += addStars(inputArray[i], maxLength) + '\n';
    }

    result += header;

    return result;

}
console.log(addFrame(['Hello', 'world', 'in', 'a', 'frame']));

/* 
    1. Write a function to count vowels in a provided string. 
    Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
*/

function vowels(string) {
    var string2 = string.toLowerCase().split(/\s/).join('');;
    var vowels = 0;
    for (var i = 0; i < string2.length; i++) {
        if (string2[i] == 'a' || string2[i] == 'e' || string2[i] == 'i' || string2[i] == 'o' || string2[i] == 'u') {
            vowels++;
        }
    }

    return vowels;
}
console.log(vowels('andja AndjA andja'));

/* 
    2. Write a function that combines two arrays by 
    alternatingly taking elements.
    [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

function combination(arr1, arr2) {
    var interwined = [];
    for (var i = 0; i < arr1.length; i++) {
        interwined.push(arr1[i], arr2[i]);
    }

    return interwined;
}
console.log(combination(['a', 'b', 'c'], [1, 2, 3]));

/* 
    3. Write a function that rotates a list by k elements.
    For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

//ne vrsi pos'o, vraca [ 4, 5, 6, 1, 2, 3 ]
function rotate(arr, k) {

    for (var i = 0; i <= k + 1; i++) {
        arr.unshift(arr.pop(arr[i]));
    }

    return arr;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));

/* 
    4. Write a function that takes a 
    number and returns array of its digits.
*/

function digits(number) {
    var string = number.toString();
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr.push(Number(string[i]));
    }

    return arr;
}
console.log(digits(12345));


/* 
    5. Write a program that prints a 
    multiplication table for numbers up to 12.
*/

function multipleTo12() {
    /*
    for(i = 1; i <= 12; i++) {
        console.log(12 + ' * ' + i + ' = ' + i*12);
    }
    */

    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            console.log(i + ' * ' + j + ' = ' + i * j);
        }
    }

}

multipleTo12();

/* 
    6. Write a function to input temperature in 
    Centigrade and convert to Fahrenheit.
*/
function cToF(c) {
    var f = (c * 9 / 5) + 32;
    return f;
}
console.log(cToF(26));
/* 
    7. Write a function to find the maximum element 
    in array of numbers. Filter out all non-number
    elements.
*/

array = ['string', false, 19, 4, 99, true, 'new string', null];

function max(arr) {
    only_num = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            only_num.push(arr[i]);
        }
    }

    var max = only_num[0];

    for (var i = 0; i < only_num.length; i++) {
        if (max < only_num[i]) {
            max = only_num[i];
        }
    }

    return max;
}
console.log(max(array));

/* 
    8. Write a function to find the maximum and minimum 
    elements. Function returns an array.
*/

function maxMin(arr) {
    var arrMaxMin = [];
    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        } else if (min > arr[i]) {
            min = arr[i];
        }

    }

    arrMaxMin.push(max, min);
    return arrMaxMin;
}
console.log(maxMin([99, 4, 1, 0, -10, 5, 197, 7, 3, 0, -55]));

/* 
    9. Write a function to find the median element of array.
*/

function findMedian(arr) {
    //numbers from lowest to greatest
    
    if(arr.length > 1) {
        arr.sort((a, b) => a-b);
    }
    
    // for (var i = 0; i < arr.length; i++) {
    //     for (var j = i + 1; j < arr.length; j++) {
    //         if (arr[i] > arr[j]) {
    //             temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }
    
    var mid = Math.floor(arr.length/2);
    if(arr.length % 2 == 0) {
        return arr[mid];
    } 
    else {
        return ((arr[mid-1] + arr[mid]) / 2.0);
    }
    
    


}
console.log(findMedian([6, 5, 4, 3, 2, 1, 9]));

/* 
    10. Write a function to find the element 
    that occurs most frequently.
*/
function frequently(arr) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr[i];
            }
        }
        m = 0;
    }

    return item;
}
console.log(frequently([1, 1, 5, 4, 1, 9, 1, 5]));

/* 
    11. Write a function to find and return the first, middle 
    and last element of an array if the array
    has odd number of elements. If number of elements is even, 
    return just the first and the last. In other cases (empty 
    array), input array should be returned.
*/

function returnArrayElements(arr) {
    if(arr.length < 1) {
        return arr;
    }

    if(arr.length % 2 == 0) {
        return ('First: ' + arr[0] + ', Last: ' + arr[arr.length-1]);
    } else {
        var mid = Math.floor(arr.length/2);
        return ('First: ' + arr[0] + ', Middle: ' + arr[mid] + ', Last: ' + arr[arr.length-1]);
    }
}
console.log(returnArrayElements([99, 4, 1, 0, -10, 5, 197, 7, 3, 0, 1]));

/* 
    12. Write a function to find the average of N elements. 
    Make the function flexible to receive dynamic number or 
    parameters.
*/

function avg() {
    var args = arguments;
    var sum = 0;
    for(var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        sum += value;
    }

    var mean = sum / args.length;
    return mean;
}
console.log(avg(1, 2, 3, 4, 5, 6, 99));

/* 
    13. Write a function to find all the numbers 
    greater than the average.
*/

function greaterThanAvg() {
    var args = arguments;
    var arrGreater = [];

    var sum = 0;
    for(var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        sum += value;
    }

    var mean = sum / args.length;

    
    for(var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        if(value > mean) {
            arrGreater.push(value);
        }
    }

    return arrGreater;
}
console.log(greaterThanAvg(1, 5, 8, 99, 6, 1888, 1889, 1900));

/* 
    14. The body mass index (BMI) is the ratio of the weight 
    of a person (in kilograms) to the square of the height (in 
    meters). Write a function that takes two parameters, 
    weight and height, computes the BMI, and prints the 
    corresponding BMI category:
    ● Starvation: less than 15
    ● Anorexic: less than 17.5
    ● Underweight: less than 18.5
    ● Ideal: greater than or equal to 18.5 but less than 25
    ● Overweight: greater than or equal to 25 but less than 30
    ● Obese: greater than or equal to 30 but less than 40
    ● Morbidly obese: greater than or equal to 40
*/

function BMI(weight, height) {
    var bmi = (weight / Math.pow(height, 2)).toFixed(1);
    
    if(bmi > 0 && bmi < 15) {
        return 'Starvation, bmi index ' + bmi;
    } else if(bmi > 15 && bmi < 17.5) {
        return 'Anorexic, bmi index ' + bmi;
    } else if(bmi > 17.5 && bmi < 18.5) {
        return 'Underweight, bmi index ' + bmi;
    } else if(bmi >= 18.5 && bmi < 25) {
        return 'Ideal, bmi index ' + bmi;
    } else if(bmi >=25 && bmi < 30) {
        return 'Overweight, bmi index ' + bmi;
    } else if(bmi >= 40) {
        return 'Morbidly obese, bmi index ' + bmi;
    }

}
console.log(BMI(67, 1.62));
