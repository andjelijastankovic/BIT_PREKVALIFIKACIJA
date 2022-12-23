function trigger() {
    console.log('bla bla bla');
}
//window.onload = trigger();

/*
    BOM (Window object)

    window.navigator
    Create a function that prints out in the console the 
    following information:
    - the platform on which the browser is running
    - the information about the browser version
    - the company that created that browser
    Each piece of information should be printed out in a new 
    row.

    Create new “isOnline” function that checks if the browser 
    is online.
    It should print out “online” when the browser is online 
    and “offline” when there is no Internet connection.
*/

function nav() {
    console.log(navigator.platform);
    console.log(navigator.userAgent);
    console.log(navigator.product);
}
//nav();

function isOnline() {
    if(navigator.onLine) {
        console.log('online');
    } else {
        console.log('offline');
    }
}
isOnline();

/*
    window.screen
    Create a function that prints out the following 
    information in the console:
    current browser width and height
    max possible browser height
*/
function screenInfo() {
    var width = window.screen.width;
    var height = window.screen.height;
    var maxHeight = window.screen.availHeight;
    console.log(width);
    console.log(height);
    console.log(maxHeight);
}
//screenInfo();

/*
    window.location
    Write a function that prints out website’s url information 
    in the console:
    full url address
    domain name
    used protocol
    parameters which are part of URL.

    Create a function for reloading the page.
    Create a function that redirects you to a website address 
    passed to it.
    Test all three functions
*/

function website() {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);
}
website();

function reloadPage() {
    location.reload();
}
//reloadPage();

function redirecting() {
    location.assign('http://www.google.com');
}
//redirecting();

/*
    window.localStorage
    Create a function that stores passed data in the browser 
    local storage.
    Create a function that reads the stored data, and print 
    it out in console.
    If there is no data, print "There is no data" in the 
    console.
    Create a function that removes data from the local storage.
    
    Use the previously created functions to 
    store/read/remove some data.
    Then add some data in storage and close the browser.
    Open the browser again on the same page and use the 
    function to read the stored value.

    Modify functions to work with sessionStorage instead of 
    localStorage.
    Try same scenario as with localStorage to examine 
    data livecycle.
*/
function storage() {
    sessionStorage.setItem('name', 'Andjelija Stankovic');
    sessionStorage.setItem('age', 27);
    sessionStorage.setItem('pets', '4 dogs');
    sessionStorage.setItem('occupation', 'web developer');
}
storage();

function readStorage() {
    var name = sessionStorage.getItem('name');
    var age = sessionStorage.getItem('age');
    var pets = sessionStorage.getItem('pets');
    var occupation = sessionStorage.getItem('occupation');
    if(name && age && pets && occupation) {
        console.log(`She's ${name} and she's ${age} years old. She has ${pets} as pets and she's ${occupation}.`);
    } else if(!name || !age || !pets || !occupation) {
        console.log('There is no data');
    }
}
readStorage();

function removeFromStorage() {
    //sessionStorage.removeItem('name');
    //sessionStorage.removeItem('age');
    localStorage.clear();
    sessionStorage.clear();
}
//removeFromStorage();


/*
    Window Methods
    Create a function that shows the user a greeting message using alert
    Then a question is presented to the user using prompt
    When the user provides the answer, that answer is used in the confirm dialog
    The format of the message in the dialog should be: "We will submit this answer now! " + the answer
    If the user clicks OK, show alert with success message
    If the user clicks Cancel, don't show anything
*/

function greeting() {
    alert('The Earth says "Hello"!');
    var question = prompt('What do you think about this page?');
    if(question != null) {
        var yesNo = confirm('We will submit this answer now!' + ' ' + question);
        if(yesNo) {
            alert('Successfully submitted!');
        }
    }
}
//greeting();

/*
    Random
    Create a function that builds an array of 10 random numbers between 1 and 50.
    The function prints that array out in the console and then returns it.
*/
console.log('random numbers function');
function randomNumbersArray() {
    var arr = [];

    for(var i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(arr);
    return arr;
}
randomNumbersArray();

/*
    Round
    Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
    Print out the modified array in the console.
    Use the first function for generating the input array.
*/
console.log('round function');
function roundTwoDecimals() {
    var arr = randomNumbersArray();
    var nArr = [];
    for(var i = 0; i < arr.length; i++) {
        nArr.push(arr[i].toFixed(2));
    }
    console.log(nArr);
    return nArr;
}
roundTwoDecimals();

/*
    Floor
    Create a function that uses the passed array of numbers 
    and rounds all its elements to the nearest integer.
    Print out the modified array in the console.
    Use the first function for generating the input array.
*/
console.log('floor function');
function floor() {
    var arr = randomNumbersArray();
    var nArr = [];
    for(var i = 0; i < arr.length; i++) {
        nArr.push(Math.floor(arr[i]));
    }
    console.log(nArr);
    return nArr;
}
floor();

/*        
    Max
    Create a function that finds and prints out 
    the biggest element in the passed array of numbers.
*/
console.log('max number function');
function maxNum() {
    var arr = randomNumbersArray();
    console.log(Math.max(...arr));
}
maxNum();

/*
    Date
        
    Print out the whole date object in the console.
    Print out the current time in the console.
    Print out the current date in the console.
*/

function wholeDate() {
    var date = new Date();
    console.log(date);
}
wholeDate();

function printTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
}
printTime();

function printDate() {
    var date = new Date();
    var day = date.getUTCDay();
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();
    console.log(`${day}.${month}.${year}.`);
}
printDate();