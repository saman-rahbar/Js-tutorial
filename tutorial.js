/*
Chapter 1
Intoruduction to JS
Tutor: Sam Rahbar
Email:srahbar12@hotmail.com
*/

// this is how you define a variable without assignments:
var x, y, z;
x = 5;
y = 12;
z = 32;

sum = x + y + z;
console.log(sum)

// Javascript code blocks
// The purpose of code blocks is to define statements
// to be executed together


function myFunction(name, birthdate) {
    var sam = name;
    var birthdaye = birthdate;
    console.log(sam + " " + birthdaye);
    return (sam + " " + birthdaye);
}

myFunction("john", 1333)