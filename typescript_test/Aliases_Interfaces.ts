// Aliases:
// Typescript allows types to be defined sperately from the variables that use them. 
// This is done using type aliases, which are created using the type keyword.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

//*********************************** Type Aliases *********************************** //
// Allow defining types with a custom name (an Alias)
// User primitives for- Strings and more complex types for- Objects and Functions


type bikeYear = number; // Alias for number type
type bikeType = string; // Alias for string type
type bikeModel = string; // Alias for string type
type bikeChesisNumber = number | string; // Alias for union type

type bike = {
    year: bikeYear;
    type: bikeType;
    model: bikeModel;
    chesisNumber: bikeChesisNumber;
}

// ------------ Defineing variables using the type aliases
const BikeYear: bikeYear = 2025;
const BikeType: bikeType = "Unscripted";
const BikeModel: bikeModel = "TVS Ronin 225";
const BikeChesisNumber: bikeChesisNumber = "ABC123456789";

const myNewBike: bike = {
    year: BikeYear,
    type: BikeType,
    model: BikeModel,
    chesisNumber: BikeChesisNumber
};


// --------- Using the type alias without defining separate variables
const myOldBike: bike = {
    year: 2016,
    type: "Sports",
    model: "Honda Unicorn Dazzler 150",
    chesisNumber: "XY0908070605"
}

console.log(myNewBike);
// Output: { year: 2025, type: 'Unscripted', model: 'TVS Ronin 225', chesisNumber: 'ABC123456789' }
console.log(myOldBike);
// Output: { year: 2016, type: 'Sports', model: 'Honda Unicorn Dazzler 150', chesisNumber: 'XY0908070605' }





//*********************************** Interfaces *********************************** //
// Interfaces are similar to type aliase, except they only apply to OBJECT types.

interface rectangle {
    width: number;
    height: number;
}

const myRectangle: rectangle = {
    width: 10,
    height: 5
}

console.log("Area", myRectangle.width * myRectangle.height);
// Output: 10 * 5 = 50


interface Animal {
    name: string,
    count: number,
    age: number,
    batch: number | string;
}

interface Bird {
    name: string,
    count: number,
    age: number,
    batch: number | string;
}

const dog : Animal = {name: "Tommy", count: 1, age: 5, batch: "AN010203"};
console.log(dog);

const duck: Bird = {name: "Silva", count: 10, age: 1, batch: "BD090807"};
console.log(duck);


//*********************************** Key Differences *********************************** //
//* Extend- Both can be extended, but interfaces support declaration merging, allowing multiple declarations to be merged into a single interface. 
// Type aliases do not support declaration merging.

//* Unions/Intersections- Only type aliases support unions & intersections.
//* Implements- Classes can implement either.
//* Recommendation- User INTERFACES for objects, TYPE for everything else (primitives, unions, tuples, etc.)

