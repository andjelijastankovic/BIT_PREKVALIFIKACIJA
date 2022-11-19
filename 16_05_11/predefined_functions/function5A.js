/* 
    1. Napisati funkciju u JavaScript-u koja na osnovu 
    niza 6 različitih citata i autora,
    ispisuje na stranici po jedan citat, ali tako da se 
    citat promeni kada se program pokrene.
*/

function quotations(arr) {
    var number = Math.floor(Math.random() * 10 + 2);
    var quot = '';
    var autor = '';
    for (var i = 0; i < arr.length; i++) {
        if (number % 2 == 0) {
            quot = arr[number];
            autor = arr[number + 1];
        } else if (number % 2 == 1) {
            autor = arr[number];
            quot = arr[number - 1];
        }
    }

    return quot + '\n' + autor;
}

var quotation = [
    "You cannot do kindness too soon, for you never know how soon it will be too late.",
    "Ralph Waldo Emerson",
    "Be kind whenever possible. It is always possible.",
    "Dalai Lama",
    "A part of kindness consists in loving people more than they deserve.",
    "Joseph Joubert",
    "Remember, there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    "Scott Adams",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "Mother Teresa",
    "Kindness can become its own motive. We are made kind by being kind.",
    "Eric Hoffer"
];
console.log(quotations(quotation));

/* 
    2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) 
    proverava da li je prestupna. Godina je prestupna ako je deljiva 
    sa 4 i nije godina veka (znači ako nije deljiva sa 100 - 1900. nije
    bila prestupna). Od toga odstupa svaka četvrta godina veka 
    (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. 
    je prestupna).
*/

function prestupnaGodina(int) {
    var year = parseInt(int);
    if (year % 4 == 0 && year % 100 != 0) {
        return 'prestupna';
    } else if (year % 400 == 0) {
        return 'prestupna';
    } else {
        return 'nije prestupna';
    }
}

console.log(prestupnaGodina(1400));

/* 
    3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
    samoglasnika i koliko suglasnika.
*/


//Nikolino resenje
/* https://stackoverflow.com/questions/10940137/regex-test-v-s-string-match-to-know-if-a-string-matches-a-regular-expression */

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function isVowel(str) {
    return str.length === 1 && str.match(/[aeiou]/i);
}

function countVowelsAndConsonants(word) {
    if(!word || word.length == 0) {
        return [];
    }

    var consonants = 0;
    var vowels = 0;
    for(var i = 0; i < word.length; i++) {
        if(isLetter(word[i])) {
            if(isVowel(word[i])) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return [vowels, consonants];
}
var result = countVowelsAndConsonants('danas je subota');
console.log('Broj samoglasnika: ' + result[0] + ' Broj samoglasnika: ' + result[1]);

function sugSam(string2) {
    var string = string2.toLowerCase().split(/\s/).join('');;
    var samoglasnici = 0;
    var suglasnici = 0;


    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            samoglasnici++;
        } else {
            suglasnici++;
        }
    }


    return 'U reci ' + '\'' + string2 + '\'' + ' ima ' + samoglasnici + ' samoglasnika i ' + suglasnici + ' samoglasnika';

}

console.log(sugSam('andja andja andja'));

/*
    4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje 
    niz koji sadrži tipove podataka pojedinačnih elemenata ulaznog niza.
*/

function types(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = typeof (arr[i]);
    }

    return arr;
}

console.log(types([1, 3, null, "ssasass", 6, undefined, 0]));

/*
    5. Kreirati funkciju koja prihvata niz stringova kao ulazni parametar,
    a na izlazu ispisuje samo stringove koji u sebi ne sadrže brojeve.
    Primer: ulazni niz ['12bb', 'pp', 'as23s', '00sd'] => rezultat ['pp'].
*/

function stringString(arr) {
    var non_number = [];
    //var regex = /^[A-Za-z]+$/;
    for (var i = 0; i < arr.length; i++) {

        var match = arr[i].match(/\d+/g);

        if (match == null) {
            non_number.push(arr[i]);
        }


    }

    return non_number;

}
console.log(stringString(['12bb', 'pp', 'as23s', '00sd']));

/* 
    6. Kreirati funkciju koja prima string a kao rezultat ispisuje 
    niz koji u sebi ima:
    dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter 
    ako string ima neparan broj znakova odnosno središnja dva karaktera 
    ako ima paran broj znakova, indeks drugog ponavljanja drugog karaktera u 
    formatu “@ Index # ” ili 'not found' ako nema ponavljanja.
    Primer 1: 'Computer' => [8, 'C', 'r', 'pu', 'not found'] ,
    Primer 2: 'Science'; => [7, 'S', 'e', 'e', '@ index 5']
*/

function stringAnalysis(string) {
    var analysis_arr = [];
    var length = string.length;
    analysis_arr.push(length);
    analysis_arr.push(string[0]);
    analysis_arr.push(string.charAt(length - 1));
    var middle = '';

    for (var i = 0; i < string.length; i++) {
        if (length % 2 == 0) {
            middle = string.substring(string.length / 2 - 1, string.length / 2 + 1);
        } else if (length % 2 == 1) {
            middle = string.substring(string.length / 2, string.length / 2 + 1);
        }
    }
    analysis_arr.push(middle);

    //indeks drugog ponavljanja drugog karaktera 
    var second = string[1];
    var index;
    for (var i = 2; i < string.length; i++) {

        if (second === string[i]) {
            index = '@ index ' + i;
            break;
        } else {
            index = 'not found';
        }
    }

    analysis_arr.push(index);
    return analysis_arr;
}
console.log(stringAnalysis('Computer'));


/* 
    7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] 
    gde se svaki element ponavlja bar jednom osim dva elementa. 
    Kreirati funkciju koja ispisuje dva elementa koja
    se ne ponavljaju.
*/

function no_repeat(arr) {

    //rešenja sa stackoverflow.com
    /*
    var l = array.length,
        i, j,
        unique = [];

    for (i = 0; i < l; i++) {
        for (j = 0; j < l; j++) {
            if (i === j) {
                continue;
            }
            if (array[i] === array[j]) {
                break;
            }
        }
        if (j === l) {
            unique.push(array[i]);
        }
    }
    return unique;
    */

    var uniq = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j] && i != j) {
                break;
            } else if (j == arr.length - 1) {
                uniq.push(arr[i]);
            }
        }
    }

    return uniq;


}

console.log(no_repeat([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

//Nikolino resenje
function noRepeat(inputArray) {
    if(!inputArray || inputArray.length == 0) {
        return [];
    }

    var result = [];

    for(var i = 0; i < inputArray.length; i++) {
        //var counter = 0;
        for(var j = 0; j < inputArray.length; j++) {
            if(inputArray[i] == inputArray[j] && i != j) {
                //counter++;
                break;
            }
        }

        /*
        if(counter == 0) {
            result.push(inputArray[i]);
        }
        */

        if(j == inputArray.length) {
            result.push(inputArray[i]);
        }
    }

    return result;
}
console.log(noRepeat([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

/* 
    8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
    Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
    Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]
*/

function subArrays(arr, n) {
    var chunkedArray = [];

    for (var i = 0; i < arr.length; i++) {
        var last = chunkedArray[chunkedArray.length - 1];
        if (!last || last.length === n) {
            chunkedArray.push([arr[i]]);
        } else {
            last.push(arr[i]);
        }
    }
    return chunkedArray;

}
console.log(subArrays([2, 3, 4, 5, 6, 7, 8], 3));

//Nikolino resenje
function arraySplit(inputArray, count) {
    if(!inputArray /*|| inputArray.length == 0*/ || !count || count == 1 || count > inputArray.length) {
        return [];
    }

    var result = [];

    for(var i = 0; i < inputArray.length; i+=count) {
        var smaller = [];
        var z = i;
        for(var j = 0; j < count; j++) {
            if(inputArray[z]) {
                smaller.push(inputArray[z]);
                z++;
            }
            
        }

        result.push(smaller);
    }

    return result;
}
console.log(arraySplit([2, 3, 4, 5, 6], 3));

