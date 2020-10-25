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

/* Example of real life
objects, properties, and methods
*/

// In real life a car is an object
// a car has properties like weight, color, etc.
// a car has methods like start, stop

/*
car.name = flat (properties)
car.start() (method)

car.model (properties)
car.drive (method)

car.weight (properties)
car.brake (method)
*/

var car = {color: "Black", model : "Fiat", weight : 200};
car["model"] = "BMW"
console.log(car["model"])