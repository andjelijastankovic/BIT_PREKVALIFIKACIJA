/*
    Selecting One/Multiple Elements

    Create two unordered lists on the page.
    Create a function that selects the second list and applies
    a class that sets some background color to it.
    
    Create a second function that, when triggered, selects all
    <li> elements on the page. The function also sets a class that 
    sets some bg color to every <li> element.
*/

function backgroundSecondList() {
    var second = document.getElementById('second');
    second.style.backgroundColor = 'red';
}
//backgroundSecondList();

function secondFunction() {
    var allLiElements = document.querySelectorAll('li');
    for(var i = 0; i < allLiElements.length; i++) {
        allLiElements[i].classList.add('colorPink');
    }

    var pinks = document.getElementsByClassName('colorPink');
    for(var i = 0; i < pinks.length; i++) {
        pinks[i].style.margin = '5px 0 5px 0';
        pinks[i].style.backgroundColor = 'lightpink';
    }

    
}
//secondFunction();

/*
    Create one more unordered list and one more function
    The function​ should select only <li> elements from that last list
    Each <li> element should get a class that sets some bg color and transforms the
    text to uppercase.
*/
function thirdFunction() {
    var thirdList = document.getElementById('third');
    var thirdListElements = thirdList.children;
    for(var i = 0; i < thirdListElements.length; i++) {
        thirdListElements[i].classList.add('thirds');
    }

    var thirds = document.getElementsByClassName('thirds');
    for(var i = 0; i < thirds.length; i++) {
        thirds[i].style.backgroundColor = 'blue';
        thirds[i].style.textTransform = 'uppercase';
    }
}
thirdFunction();