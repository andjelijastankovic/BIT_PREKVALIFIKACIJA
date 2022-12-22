var x = 'Browser built-in objects';
console.log(x);

function test() {
    console.log('Window objekat');
}

//window.test(); // = test();

//NAVIGATOR
function getNavigationProperties() {
    console.log(navigator.userAgent);
    console.log(navigator.cookieEnabled);
    console.log(navigator.geolocation);
}
// getNavigationProperties();

//SCREEN
function screenDimensions() {
    //read - only, ne mogu da se menjaju
    console.log(screen.height);
    console.log(screen.width);
}
//screenDimensions();

//LOCATION
function getLocationData() {
    console.log(location.hostname);
    console.log(location.href);
    console.log(location.protocol);
}
//getLocationData();

//STORAGE
/*  
    Razlika izmedju session storage i local storage?
    Session storage se vezuje za tab u kojem se trenutno nalazimo,
    a local storage za ceo browser.
    Session storage se brise po zatvaranju taba, cesto se koristi za login.

    imaju iste propertyje, razlika je njihov zivotni vek.
*/

function storageTest() {
    sessionStorage.setItem('name', 'Andjelija Stankovic');
    var name = sessionStorage.getItem('name');
    sessionStorage.setItem('name', name + 'test');
    console.log(`Name from session storage:  ${name}`);

    localStorage.clear();
    sessionStorage.clear();
}
//storageTest();

function reloadPage() {
    location.reload();
}


//WINDOW
function alertPromptConfirm() {
    alert('Hello world');

    var userInput = prompt('Predaja nikad nije bila opcija');
    console.log(userInput);

    var yesNo = confirm('da li je ovo rekao predsednik?');
    console.log(yesNo);
}
//alertPromptConfirm();

//setTimeout() / setInterval()
function foo() {
    console.log('foo');
}

function openGoogle() {
    var win = window.open('http://www.google.com');
    setTimeout(function() {
        win.close();
        var fooIntervalId = setInterval(foo, 1000);
        setTimeout(function() {
            clearInterval(fooIntervalId);
            console.log('clear');
        }, 8000);
    }, 4000);
}