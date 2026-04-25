"use strict";
//*********************************** Null ***********************************//
Object.defineProperty(exports, "__esModule", { value: true });
// Null- In TS, null is a value that represents the intentional ABSENCE of any object value. 
// Indicate that it has no value or that it is empty. For example:
let myVariable = null; // myVariable can be a string or null
console.log(myVariable); // Output: null
myVariable = "Hello, World!"; // Now myVariable holds a string value
console.log(myVariable); // Output: Hello, World!
//*********************************** Undefined ***********************************//
// Undefined- In TS, undefined is a value that indicates that a variable has NOT ASSIGNED a value. For example:
let anotherVariable; // anotherVariable can be a number or undefined
console.log(anotherVariable); // Output: undefined
anotherVariable = 42; // Now anotherVariable holds a number value   
console.log(anotherVariable); // Output: 42
//*********************************** Not Null ***********************************//
// NotNull- In TS, NotNull is a type that represents a value that is NOT null. 
// It is used to ensure that a variable or parameter does not contain a null value. 
// For example- 1:
function processValue(value) {
    if (value !== null) { // Check if value is not null
        console.log(`Processing value: ${value}`);
    }
    else {
        console.log("Value is null, cannot process.");
    }
}
processValue("Hello, TypeScript!");
processValue(null);
// Output:
// Processing value: Hello, TypeScript!
// Value is null, cannot process.
//Example-2:
const inputText = document.getElementById("input"); // inputText can be an HTMLInputElement or null
if (inputText !== null) { // Check if inputText is not null
    console.log(`Input element found: ${inputText.tagName}`);
}
else {
    console.log("Input element not found.");
}
console.log(inputText); // Output: Input element found: inputText
//if inpurtText = null
// Output: Input element not found.
// ---------------------------- OR We can write -------------------------------------//
const inputText2 = document.getElementById("input"); // Using non-null assertion operator (!)
console.log(inputText2); // Output: Input element found: inputText2
function displayBikeInfo(bike) {
    console.log(`Bike Name: ${bike.name}`);
    console.log(`Bike Price: ${bike.price}`);
    console.log(`Bike Color: ${bike.features?.color ?? "Unknown"}`);
    console.log(`Bike Weight: ${bike.features?.weight ?? "Unknown"}`);
}
const myHondaBike = {
    name: "Honda Dazzler 150",
    price: 35000,
};
displayBikeInfo(myHondaBike);
//output: Bike Name: Honda Dazzler 150
//        Bike Price: 35000
//        Bike Color: Unknown
//        Bike Weight: Unknown
const myTVSBike = {
    name: "TVS Ronin 225",
    price: 175000,
    features: {
        color: "Black",
        weight: 160,
    },
};
displayBikeInfo(myTVSBike);
//output: Bike Name: TVS Ronin 225
//        Bike Price: 175000
//        Bike Color: Black
//        Bike Weight: 160
//# sourceMappingURL=null_undefined_notnull_optional.js.map