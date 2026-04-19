"use strict";
// Aliases:
// Typescript allows types to be defined sperately from the variables that use them. 
// This is done using type aliases, which are created using the type keyword.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.
// ------------ Defineing variables using the type aliases
const BikeYear = 2025;
const BikeType = "Unscripted";
const BikeModel = "TVS Ronin 225";
const BikeChesisNumber = "ABC123456789";
const myNewBike = {
    year: BikeYear,
    type: BikeType,
    model: BikeModel,
    chesisNumber: BikeChesisNumber
};
// --------- Using the type alias without defining separate variables
const myOldBike = {
    year: 2016,
    type: "Sports",
    model: "Honda Unicorn Dazzler 150",
    chesisNumber: "XY0908070605"
};
console.log(myNewBike);
// Output: { year: 2025, type: 'Unscripted', model: 'TVS Ronin 225', chesisNumber: 'ABC123456789' }
console.log(myOldBike);
const myRectangle = {
    width: 10,
    height: 5
};
console.log("Area", myRectangle.width * myRectangle.height);
const dog = { name: "Tommy", count: 1, age: 5, batch: "AN010203" };
console.log(dog);
const duck = { name: "Silva", count: 10, age: 1, batch: "BD090807" };
console.log(duck);
//*********************************** Key Differences *********************************** //
//* Extend- Both can be extended, but interfaces support declaration merging, allowing multiple declarations to be merged into a single interface. 
// Type aliases do not support declaration merging.
//* Unions/Intersections- Only type aliases support unions & intersections.
//* Implements- Classes can implement either.
//* Recommendation- User INTERFACES for objects, TYPE for everything else (primitives, unions, tuples, etc.)
