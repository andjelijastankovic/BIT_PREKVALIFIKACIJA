/*
    Traversing

    Create two unordered lists.
    Each list should be wrapped in a div element.
    One <li> element in the second list should have a class 'active', which sets its
    background color.
    Create a function that selects the <li> element with class 'active'.
    Remove the class from that element, and then select the first <li> element in the
    first unordered list using node relations.
    Apply class to that newly selected <li> element
*/


var activeClass = document.querySelector('.active');
activeClass.style.backgroundColor = 'red';
activeClass.classList.remove('active');
var firstUl = document.querySelector('ul');
var secondLi = firstUl.children[1];
secondLi.classList.add('active');

/*
    Access/Update Text Node

    Create an unordered list containing <li> items that represent navigation.
    Create a function that takes text from one of the <li> elements and presents it on
    screen using alert.

    Create one more function.
    The function should take some text as an argument.
    The function should select the last <li> element in the list and replace its text with
    text passed as the function argument.
*/
function alertLi() {
    var listItem = document.getElementById('node');
    alert(listItem.textContent);
}
//alertLi();

function replace() {
    var last = document.getElementById('last').textContent = 'some text';
}
replace();

/*
    InnerHTML

    Do the following exercise in two ways: using DOM manipulation methods and
    using innerHTML.
    Create a function that is used for building a dropdown/select element.
    It first builds a dropdown and then adds it to the DOM.
    The function takes two arguments: the first is an array of strings and the second
    is a DOM node to which the dropdown will be added.
    Create options that correspond to items in the passed array and add them to the
    select element.
    Add the whole dropdown list to DOM.
    Use this function to create two selects on the page.
    The first select should be appended to the first div on the page.
    The second select should be appended to the last div on the page.
*/

/*
    Attributes

    Create a form that contains multiple input elements with labels.
    Some of those elements should be required.
    Create a function that validates the form.
    The function checks each input element that belongs to the form.
    If the element has the required attribute and no data, it should get red borders.
*/

function validateForm() {
    var inputs = document.querySelector('form').elements;
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute('required') && inputs[i].value == '') {
            inputs[i].style.border = '2px solid red';
        } else {
            inputs[i].style.border = '1px solid black';
        }
    }
}
