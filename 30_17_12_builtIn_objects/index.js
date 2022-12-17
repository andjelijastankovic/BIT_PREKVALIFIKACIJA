var primitiveString = 'Hello';
typeof primitiveString;
// "string"

var objString = new String('world');
typeof objString;
// "object"

var str1 = String('1'); //returns primitive data type string
console.log(typeof str1);
var str2 = new String('1'); //returns object string
console.log(typeof str2);
console.log(str1);
console.log(str2);

var potato = new String('potato');
var indexO = potato.indexOf('o');
var lastO = potato.lastIndexOf('o');
var notMatch = potato.indexOf('r');
console.log(indexO);    // 1
console.log(lastO);     // 5
console.log(notMatch);  // -1

/* 
    substring, slice
    What they have in common:

    If start equals stop: returns an empty string
    If stop is omitted: extracts characters to the end of the string
    If either argument is greater than the string's length, the string's length will be used instead.
    
    Distinctions of substring():

    If start > stop, then substring will swap those 2 arguments.
    If either argument is negative or is NaN, it is treated as if it were 0.
    Distinctions of slice():

    If start > stop, slice() will return the empty string. ("")
    If start is negative: sets char from the end of string, exactly like substr() in Firefox. This behavior is observed in both Firefox and IE.
    If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA specification.
*/

//ARRAY
//sort(), join(), slice(), concat(), push(), pop(), shift()...

//OBJECT
var o = {}; var o = new Object(); //ovo je isto

