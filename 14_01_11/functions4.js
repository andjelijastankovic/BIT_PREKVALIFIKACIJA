/* 
    Write a program that checks if a given element e is in the array a.
    Input: e = 3, a = [5, -4.2, 3, 7]
    Output: yes
    Input: e = 3, a = [5, -4.2, 18, 7]
    Output: no
*/

function check(arr, e) {
    var hasValue = arr.includes(e);

    if (hasValue) {
        return 'yes';
    } else {
        return 'no';
    }
}
a = [5, -4.2, 3, 7];
console.log(check(a, 9));

/* 
    Write a program that multiplies every positive 
    element of a given array by 2.
    Input array: [-3, 11, 5, 3.4, -8]
    Output array: [-3, 22, 10, 6.8, -8]
*/

function multiplies_positive(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= 2;
        }
    }

    return arr;
}

console.log(multiplies_positive([-3, 11, 5, 3.4, -8]));

/* 
    Write a program that finds the minimum of a given 
    array and prints out its value and index.
    Input array: [4, 2, 2, -1, 6]
    Output: -1, 3
*/

function findMin(arr) {
    var min = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }

    return min + ', index: ' + index;
}

console.log(findMin([4, 2, 2, -1, 6]));

/* 
    Write a program that finds the second smallest 
    number and prints out its value.
    Input array: [4, 2, 2, -1, 6]
    Output: 2
*/

function findSecond(arr) {
    var min = arr[0];
    var sec = arr[0];

    //nikolin nacin
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < sec && sec && arr[i] > min) {
            sec = arr[i];
        }
    }

    return sec;
}

console.log(findSecond([4, 2, 2, -1, 6]));

/* 
    Write a program that calculates the sum of 
    positive elements in the array.
    Input array: [3, 11, -5, -3, 2]
    Output: 16
*/

function sum_positive(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(sum_positive([3, 11, -5, -3, 2]));

/* 
    Write a program that checks if a given array is symmetric. 
    An array is symmetric if it can be read the same way both 
    from the left and the right hand side.
    Input array: [2, 4, -2, 7, -2, 4, 2]
    Output: The array is symmetric.
*/

function symmetric(arr) {
    var j = arr.length - 1;
    var result = false;
    var message = '';
    //j ide s kraja, i ide od pocetka, zato se j smanjuje na kraju
    for (var i = 0; i < arr.length; i++) {
        if (i == j) {
            break;
        }
        if (arr[i] == arr[(arr.length - 1) - i]) {
            result = true;
            message = 'the array is symmetric';
        } else {
            result = false;
            message = 'the array is not symmetric';
            break;
        }

        j--;
    }

    return message;
}

console.log(symmetric([2, 4, -2, 7, -2, 4, 2, 5]));

/* 
    Write a program that intertwines two arrays. You can 
    assume the arrays are of the same length.
    Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwineTwoArrays(arr1, arr2) {
    var interwined = [];
    for (var i = 0; i < arr1.length; i++) {
        interwined.push(arr1[i], arr2[i]);
    }

    return interwined;
}

console.log(intertwineTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));

/* 
    Write a program that concatenates two arrays.
    Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concat(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    return arr1;
}

console.log(concat([4, 5, 6, 2], [3, 8, 11, 9]));

/* 
    Write a program that deletes a given element e from the array a.
    Input: e = 2, a = [4, 6, 2, 8, 2, 2]
    Output array: [4, 6, 8]
*/

function annihilation(arr, e) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == e) {
            arr.splice(i--, 1);
        }
    }

    return arr;
}

console.log(annihilation([4, 6, 2, 8, 2, 2], 2));

/* 
    Write a program that inserts a given element e 
    on the given position p in the array a. If
    the value of the position is greater than the 
    array length, print the error message.
    Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
    Output: [2, -2, 33, 78, 12, 5, 8]
*/

function injecting(arr, e, p) {

    if (p <= arr.length || p >= 0) {
        for(i = arr.length; i > p; i--) {
            arr[i] = arr[i-1];
        }
        arr[p] = e;

        return arr;
    } else {
        return 'error';
    }

    
}

console.log(injecting([2, -2, 33, 12, 5, 8], 78, 3));

