/* 
    1. Write a function that checks if a given string contains 
    digit 5.
    Input: “1b895abd”
    Output: true
    
    Input: “1bser9re”
    Output: false
*/

function checkFives(string, num) {
    var result = false;
    if (!string || typeof string != 'string' || !num || typeof num != 'number') {
        return 0;
    }

    for (var i = 0; i < string.length; i++) {
        if (!isNaN(string[i]) && string[i] == num) {
            result = true;
        }
    }

    return result;
}

console.log(checkFives('uuuuu989898', 9));

/* 
    2. Write a function that in a given string 
    replaces all the appearances of the string ‘JS’ with
    ‘**’.
    Input: “Programmingin JS is super interesting!”
    Output: “Programming in ** is super interesting!”
*/

function changeJS(sentence, element, replacement) {
    /*
        if(!string || typeof string != 'string' || !search || !replace) {
            return 0;
        }

        return string.split(search).join(replace);

        //može i samo sa replace da se odradi
    */

    //nikolino resenje
    if (!sentence || sentence.length == 0 || !element || element.length == 0 || !replacement || replacement.length != 1) {
        return sentence;
    }

    var replacementString = '';
    for (var i = 0; i < element.length; i++) {
        replacementString += replacement;
    }

    var result = '';

    for (var i = 0; i < sentence.length; i++) {
        var z = i;
        var word = '';
        for (var j = 0; j < element.length; j++) {
            if (sentence[z]) {
                word += sentence[z];
                z++;
            }
        }

        if (word.toLowerCase() == element.toLowerCase()) {
            result += replacementString;
            i += (element.length - 1);
        } else {
            result += sentence[i];
        }
    }

    return result;
}
console.log(changeJS('Programming in JS is suJSJSJSper interestingJS!', 'JS', '*'));

/* 
    3. Write a function that inserts a given character 
    on a given position in the string.
    Input: “Goo morning”, 4, ‘d’
    Output: “Good morning”
*/

function addChar(string, position, char) {
    if (!string || !position || !char || typeof string != 'string') {
        return 0;
    }

    var arr = [];
    var index = position - 1;
    for (var i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }

    arr.splice(index, 0, char);
    arr = arr.join('');
    return arr;

}
console.log(addChar('Goo morning', 4, 'd'));

/* 
    4. Write a function that deletes a character from the 
    given position in the string.
    Input: “Goodd morning!”, 3
    Output: “Good morning!”
*/

function deleteChar(string, position) {

    if (!string || !position || typeof string != 'string' || typeof position != 'number') {
        return 0;
    }

    if (string.length <= 1 && (position > string.length || position < 0)) {
        return 'small size';
    }

    var sub = string.slice(0, position) + string.slice(position + 1, string.length);
    return sub;
}
console.log(deleteChar('good morning!', 4));

/* 
    5. Write a function that deletes every second element 
    of the given array.
    Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
    Output: [3, 1, 90, 23, 67]
*/

function deleteArrSec(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }

    return newArr;
}
console.log(deleteArrSec([3, 5, 1, 8, 90, -4, 23, 1, 67]));

/* 
    6. Write a function that replaces the elements of the 
    given array between two positions with
    their doubled values.
    Input:  [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
    Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/

function replace(arr, start, end) {

    if (!arr || !start || !end) {
        return 0;
    } else if (start > end) {
        return 'invalid start';
    } else if (end < start) {
        return 'invalid end';
    } else if (end > arr.length) {
        return 'small array';
    }

    for (var i = start; i <= end; i++) {
        arr[i] *= 2;
    }

    return arr;
}
console.log(replace([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 7));

/* 
    7. Write a function that checks if every element of the first 
    array is contained in the second
    array. Be careful with repetitions!
    Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
    Output: true
*/

function firstInSecond(arr1, arr2) {
    var result = false;
    var count = 0;
    for (var i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                count++;
                break;
            }
        }
    }

    if (count == arr1.length) {
        result = true;
    } else {
        result = false;
    }

    return result;
}
console.log(firstInSecond([3, 4, 1, 1, 1, 1], [8, 9, 3, 1, 11, 4, 3, 86, 1, 1, 1]));


/* 
    8. Write a function that sorts an array of strings by 
    the number of appearances of the letter
    ‘a’ or ‘A’.
    Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
    Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/

function sortArrayByInputLetter(input, letter) {
    /*
        var countA = 0;
    
        for(var i = 0; i < arr.length; i++) {
            for(var j = 0; j < arr[i].length; j++) {
                var lower = arr[i].toLowerCase();

            }
        }
    */

    //nikolino resenje
    if(!input || input.length == 0 || !letter || letter.length != 1) {
        return input;
    }

    var result = [];
    for(var i = 0; i < input.length; i++) {
        var counter = 0;
        for(var j = 0; j < input[i].length; j++) {
            var element = input[i][j];
            if(element == letter) {
                counter++;
            }
        }



        
        //ne radi kako treba
        if(result.length > 1) {
            var maxCount = 0;
            for(var z = 0; z < result.length; z++) {
                if(result[z][1] > maxCount) {
                    maxCount = result[z][1];
                }
            }

            if(maxCount < counter) {
                result = [input[i], counter].concat(result);
            } else {
                result.push([input[i], counter]);
            }
        } else {
            result.push([input[i], counter]);
        }
        
    }

    return result;


}
console.log(sortArrayByInputLetter(['apple', 'tea', 'amazing', 'morning', 'JavaScript'], 'a'));

/* 
    9. Write a function that prints out the date of the next day.
    Output: 25. 10. 2018.
*/

/* 
    10. Write a function that prints out the date of the 
    previous day.
    Output: 23. 10. 2018.
*/

/* 
    11. Write a function that prints out an array of the 
    numbers aligned from the right side.
    Input: [78, 111, 4, 4321]
    Output:
        78
        111
        4
        4321
*/