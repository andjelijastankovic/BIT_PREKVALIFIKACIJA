var pas = 'bernardinac';
var result = '';
switch (pas) {
    case 'bernardinac':
    case 'sarplaninac':
    case 'nemacki ovcar':
        result = 'Ovo je ' + pas;
        break;
    default:
        result = 'Mesanac';
        break;
}

console.log(result);

var a = 5;

switch (a) {
    case 2:
        result = 'ovo je broj';
        break;
    case '2':
        result = 'ovo je tekst';
        break;
    default:
        result = 'ovo je greska';
        break;
}

console.log(result);

switch (a) {
    case 1:
        result = 'ponedeljak';
        break;
    case 2:
        result = 'utorak';
        break;
    case 3:
        result = 'sreda';
        break;
    case 4:
        result = 'cetvrtak';
        break;
    case 5:
        result = 'petak';
        break;
    default:
        result = 'mora da bude u rangu od 1 do 7';
        break;
}

console.log(result);

//VEZBANJE

/* 
    Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/

var dan = 6;
var weekday_weekend = '';
switch (dan) {
    case 1:
        weekday_weekend = "It's weekday";
        break;
    case 2:
        weekday_weekend = "It's weekday";
        break;
    case 3:
        weekday_weekend = "It's weekday";
        break;
    case 4:
        weekday_weekend = "It's weekday";
        break;
    case 5:
        weekday_weekend = "It's weekday";
        break;
    case 6:
        weekday_weekend = "It's weekend";
        break;
    case 7:
        weekday_weekend = "It's weekend";
        break;
    default:
        weekday_weekend = 'Input must be number between 1 and 7';
        break;
}

console.log(weekday_weekend);

/* 
    Write a program that for a 1-12 number input (representing a month in a year) shows that
    month’s name. All other cases output a message explaining that input must be a number
    between 1 and 12.
    For input 2, output should be “February”.
    For input 6, output should be “June”.
    For input 13, output should be “Input must be a number between 1 and 12”.
*/

var month = 11;
var result = '';

switch (month) {
    case 1:
        result = 'January';
        break;
    case 2:
        result = 'February';
        break;
    case 3:
        result = 'March';
        break;
    case 4:
        result = 'April';
        break;
    case 5:
        result = 'May';
        break;
    case 6:
        result = 'June';
        break;
    case 7:
        result = 'July';
        break;
    case 8:
        result = 'August';
        break;
    case 9:
        result = 'September';
        break;
    case 10:
        result = 'October';
        break;
    case 11:
        result = 'November';
        break;
    case 12:
        result = 'December';
        break;
    default:
        result = 'Input must be a number between 1 and 12';
        break;
}

console.log(result);

/* 
    Write a program that for a 1-12 number input (representing a month in a year) shows what
    season it is. All inputs different from 1-12 output a message explaining that input must be a
    number between 1 and 12.
*/

var godisnje_doba = 7;

switch (godisnje_doba) {
    case 1:
        result = 'Winter';
        break;
    case 2:
        result = 'Winter';
        break;
    case 3:
        result = 'Spring';
        break;
    case 4:
        result = 'Spring';
        break;
    case 5:
        result = 'Spring';
        break;
    case 6:
        result = 'Summer';
        break;
    case 7:
        result = 'Summer';
        break;
    case 8:
        result = 'Summer';
        break;
    case 9:
        result = 'Fall';
        break;
    case 10:
        result = 'Fall';
        break;
    case 11:
        result = 'Fall';
        break;
    case 12:
        result = 'Winter';
        break;
    default:
        result = 'Input must be a number between 1 and 12';
        break;
}

console.log(result);

/* 
    Write a program that for a string input 
    of a grade from “A”-“F” outputs a proper info
    message about that grade in the following manner: 
    A - &quot;Good job&quot;&quot;, 
    B - &quot;Pretty good&quot;&quot;, 
    C - &quot;Passed&quot;&quot;, 
    D - &quot;Not so good&quot;&quot;, 
    F - &quot;Failed&quot;. 
    Input different from letters A-F outputs a 
    message &quot;Unknown grade&quot;.
*/

var grade = 'F';

switch (grade) {
    case 'A':
        result = 'Good job';
        break;
    case 'B':
        result = 'Pretty good';
        break;
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not so good';
        break;
    case 'F':
        result = 'Failed';
        break;
    default:
        result = 'Unknown';
        break;
}

console.log(result);


/* 
    Write a program that takes as input a city name and outputs the country where the city is.
    You may choose which cities and countries you want to output yourself, however there has
    to be at least 5 countries and 15 cities. Note that each country must have a different
    number of cities. Input different from the listed cities should output a message&quot;Please
    choose a different city&quot;.
*/

var city = 'Palermo';
var state = '';

switch(city) {
    case 'New York':
        state = 'SAD';
        break;
    case 'Washington DC':
        state = 'SAD';
        break;
    case 'Belgrade':
        state = 'Serbia';
        break;
    case 'Nis':
        state = 'Serbia';
        break;
    case 'Novi Sad':
        state = 'Serbia';
        break;
    case 'Sofia':
        state = 'Bulgaria';
        break;
    case 'Zagreb':
        state = 'Croatia';
        break;
    case 'Dubrovnik':
        state = 'Croatia';
        break;
    case 'Budapest':
        state = 'Hungary';
        break;
    case 'Paris':
        state = 'France';
        break;
    case 'Marseille':
        state = 'France';
        break;
    case 'Lyon':
        state = 'France';
        break;
    case 'Rome':
        state = 'Italy';
        break;
    case 'Naples':
        state = 'Italy';
        break;
    case 'Palermo':
        state = 'Italy';
        break;
    default:
        state = 'Please choose a different city';
        break;
}

console.log(state);

/* 
    Write a program that takes as input two numbers 
    and a string denoting the operation 
    (“+”, “-”, “*”, “/”) 
    and prints out the appropriate result. 
    Watch out for division by zero!
*/

var number1 = 10;
var number2 = 0;
var operation = '/';

switch(operation){
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        if(number2 == 0) {
            result = 'Sure \'bout that? I don\'t think so';
            break;
        }
        result = number1 / number2;
        break;
    
}

console.log(result);


