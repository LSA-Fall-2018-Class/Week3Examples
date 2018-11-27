'use strict';

// Class 3 examples from class

var x = 5;
var y = 12;
var name = "Jon";
var total = "100";
var result = true;


// alert(String(x) + String(y) + name);
// alert (x + y + Number(total));
// alert ("Result is " + result);

//alert ( (x > y) );

//if ((x > y) && (name == "Jon"))

// if (numberGuessed < 2)
// {
//     alert("X is greater");
// }
// else
// {
//   alert("Error - You must guess 0 or 1");
// }

var i;

// an array of cars - always starts at position 0.
var cars = ["Chevy", "Ford", "Nissan"];

alert (cars.length); // number of entries in the cars array
alert (cars[3]);  // error - position 3 is undefined

i = i + 1;  // the same as i++

// for loop, iterate through each car
for (i = 0; i < cars.length; i++)
{
    alert("Car " + i + " is " + cars[i]);  // Create a string to display.
}
