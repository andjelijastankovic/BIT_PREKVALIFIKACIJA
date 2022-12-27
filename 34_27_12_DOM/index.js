/* DOM - Document Object Model */
/*
    Using DOM methods and properties you can:

    - access any element on the page

    - modify or remove elements

    - add new elements

    DOM is a model of a web page
*/

/*
    DOM Nodes (čvorovi)

    Each HTML tag is a node
    Every node is an object in JavaScript
    Node object contains a specified list of properties

    Some of the properties are:
    - nodeName, attributes, id, className…
*/

/*
    Root Element (Node)

    Only one root element

    In an HTML document, the root element is <html>

    Use document.documentElement to access (select) the root element

    tagName property returns name of the selected element

    document.documentElement.tagName => “HTML”

*/
var html = document.documentElement;
console.log(html.hasChildNodes()); //true
console.log(html.childNodes); //lista child elemenata
var body = html.childNodes[2]; //body
console.log(body);
console.log(body.parentNode);
console.log(html.childNodes[0]);

/*
    Working with the DOM Tree I

    Accessing the elements

    - Select an individual element

    - Select multiple elements

    - Traversing between element nodes


    Working with selected elements

    - Access/update text nodes

    - Working with HTML content (creating elements)

    - Access/update attribute values


    There are methods for finding elements in the DOM tree

    These methods are called DOM Queries

    Result of a query can be:

    - NodeList (collection of nodes)
    - Single element node



    Methods that return a single element node:
    - getElementById('id')
    - querySelector('css selector')


*/

console.log(document.getElementById('closer'));
console.log(document.querySelector('#closer'));

/*
    Accessing Elements III

    The result of a query is NodeList (array-like structure)

    Methods that return more than one element:
    - getElementsByTagName(‘tag’)
    - getElementsByClassName(‘class’)
    - querySelectorAll(‘css selector’)

*/

console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByClassName('zzz'));

/*
    Traversing the DOM

    When a node is selected, you can select 
    another element in relation to it.
    This is known as traversing the DOM

    Properties that are used for selecting 
    related nodes are:
    - parentNode
    - previousSibling
    - nextSibling
    - firstChild
    - lastChild



    Whitespace Nodes

    Whitespace is space between elements
    Browsers add a text node when they encounter whitespace
*/
/*
var ul = document.querySelectorAll('ul');
for(var i = 0; i < ul.childNodes.length; i++) {
    var child = ul.childNodes[i];
    console.log(child.parentNode);
    console.log(child.nextSibling);
    console.log(child.previousSibling); //ne ignorise whitespace
    console.log(child.previousElementSibling); //ignorise whitespace
    //console.log(child.tagName);
}
*/
/*
    Accessing/Updating a Text Node

    Multiple options when retrieving 
    or updating node text content

    - using nodeValue property (for text nodes)
    - textContent property (just text inside element)
*/

var firstPar = document.querySelector('p');
firstPar.textContent = 'Second paragraph';
console.log(firstPar);
console.log(firstPar.innerHTML);
firstPar.innerHTML = '<a href="">Text</a>';

/*
    Adding/Removing HTML Content

    Two different approaches:
    - The innerHTML property
    - DOM manipulation methods



    InnerHTML

    Used for retrieving and replacing content
    Can be used on each node element
    When retrieving element content, its structure is returned as a string
    For adding/updating an element, new content is provided as a string
*/

/*
    Adding Elements Using DOM Manipulation I

    Involves three steps:
    Use createElement() to create the element
    Use createTextNode() to give it content
    Use appendChild() to add element to the DOM

*/

// Create a new element and store it in a variable
var listItem= document.createElement('li');
// Create text node and store it in a variable
var text = document.createTextNode('some text');
// Attach the text node to the element
listItem.appendChild(text);
// find an element in DOM where this new element should be added
var someList = document.querySelector('ul');
// append new element to the list
someList.appendChild(listItem);

/*
    Insertion Methods

    - parentElem.appendChild(node)
    appends node as the last child of parentElem

    - parentElem.insertBefore(node, nextSibling)
    inserts node before nextSibling into parentElem

    - parentElem.replaceChild(node, oldChild)
    replaces oldChild with node among children of parentElem



    Other (Newer) Insertion Methods

    - node.prepend(...nodes or strings)
    insert nodes or strings before the first child of the node

    - node.before(...nodes or strings)
    insert nodes or strings before the node

    - node.after(...nodes or strings)
    insert nodes or strings after the node

    - node.replaceWith(...nodes or strings)
    replace node with the given nodes or strings

*/


var someText = 'awjdoawijdipoawdjiw';
var p = document.createElement('p');
var textNode = document.createTextNode(someText);
p.appendChild(textNode);
firstPar.appendChild(p);

//parentElem.replaceChild(node, oldChild)
var p1 = document.createElement('p');
var textNode1 = document.createTextNode('adwhoi2281421111');
p1.appendChild(textNode1);
firstPar.replaceChild(p1, p);


/*
    Removing Element Via DOM Manipulation

    Three steps process:
    - Select element which should be removed
    - Move to its parent element
    - Use removeChild() method to delete the element
*/

var forDeleting = document.querySelector('#brisanje');
var parentEl = forDeleting.parentElement;
parentEl.removeChild(forDeleting);


/*
    Node Properties/Element Attributes I

    Once a node is selected, you can access and change its attributes
    Attributes are what’s written in HTML
    Properties are what’s in DOM objects
    When an object’s property value is changed, attribute is updated and
    vice-versa (but not always)

    Node Properties/Element Attributes II

    attributes property contains a list of all element attributes
    Methods used for manipulating the element attributes:
    hasAttribute(attributeName)
    getAttribute(attributeName)
    setAttribute(attributeName, attributeValue)
    removeAttribute(attributeName)


    
    Property-Attribute Synchronization I

    When an attribute changes, the corresponding property is auto-updated
    But there are exceptions:
    input.value synchronizes only from attribute to property, but not the
    other way around
*/

// var img = document.querySelector('#second-image');
// if(img.hasAttribute('alt')) {
//     img.setAttribute('alt', 'second image desc');
// }

//img.removeAttribute('alt');

/*
    Managing Styles

    If a node style property is used to set style, 
    inline style is defined on the element, which is not cool

    Use classes for modifying styles
    Two properties
    className – the string value
    classList – the object with methods


    classList property

    elem.classList is a special object with helper methods

    classList methods:
    - elem.classList.add/remove("class") – adds/removes the class
    - elem.classList.toggle("class") – removes class if exists, otherwise adds it
    - elem.classList.contains("class") – returns true/false, checks for the given class    
*/



