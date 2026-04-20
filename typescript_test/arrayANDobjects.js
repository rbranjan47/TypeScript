"use strict";
//Arrays in Typescript
//Arrays in TypeScript can be defined using two different syntaxes: the array type syntax and the generic array type syntax.
//1. Array Type Syntax: You can define an array using the array type syntax by specifying the type of elements followed by square brackets. 
// For example:
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]    
//2. Generic Array Type Syntax: Alternatively, you can use the generic array type syntax by using the Array<T> type. For example:
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
let hobbies = ["Working", "Biking", "Cooking", "Gym", "Reading"];
console.log(hobbies); // Output: ["Working", "Biking", "Cooking", "Gym", "Reading"] 
//3. In TypeScript, you can also define arrays that can hold multiple types using union types. For example:
let mixedArray = ["Hello", 42, "World", 3.14];
console.log(mixedArray); // Output: ["Hello", 42, "World", 3.14]
//4. TypeScript also provides a way to define tuples, 
// Tuple- Tuples are great because they allow each element in the array to be a known type of value. 
// Which are arrays with a fixed number of elements of specific types. For example:
let tuple = ["Hello", 42];
console.log(tuple); // Output: ["Hello", 42]
//5. You can also use the any type to define an array that can hold any type of value. For example:
let anyArray = ["Hello", 42, true, { name: "Alice" }, [1, 2, 3]];
console.log(anyArray); // Output: ["Hello", 42, true, { name: "Alice" }, [1, 2, 3]]
//6. We can not push a value of a different type into an array that has a specific type. For example:
let stringArray = ["Hello", "World"];
// stringArray.push(42 ); // This will cause a compile-time error because 42 is not a string
//7. We can also use the readonly modifier to create an array that cannot be modified after it is created. For example:
let readonlyArray = ["Hello", "World"];
// readonlyArray.push("!"); 
// // This will cause a compile-time error because the array is read-only  
//*********************************** TypeScript : Array Objects ***********************************//
// You can also define arrays of objects in TypeScript. For example:
let persons = [
    { name: "Alice", age: 25, contact: 1234567890, address: "123 Main St" },
    { name: "Bob", age: 30, contact: "bob@example.com", address: "456 Oak Ave" },
    { name: "Charlie", age: 35, contact: 9876543210, address: "789 Pine Rd" }
];
console.log(persons);
//*********************************** TypeScript : Null & Undefined ***********************************//
//TypeScript has two special types: null and undefined. These types represent the absence of a value.
//1. Null Type: The null type represents the intentional absence of any object value. 
//              It is often used to indicate that a variable should not have a value. 
//              For example:
let myVariable = null; // This variable can be a string or null
console.log(myVariable); // Output: null  
//2. Undefined Type: The undefined type represents the value of a variable that has not been assigned a value. 
//                   It is often used to indicate that a variable is uninitialized. 
//                   For example: 
let anotherVariable; // This variable can be a number or undefined
console.log(anotherVariable); // Output: undefined
