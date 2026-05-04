"use strict";
//****************************** Let ******************************//
// Let in Typescript
// Let is a block-scoped variable declaration,accessible within the block it is defined in.
// Let -> that can be reassigned, but not redeclared within the same scope.
// Example:
Object.defineProperty(exports, "__esModule", { value: true });
let myVariable = 10; // Declare a variable using let and assign a value
console.log(myVariable); // Output: 10
myVariable = 20; // Reassign a new value to the variable
console.log(myVariable); // Output: 20
// But can not redeclared
// let myVariable: number = 30; // Compile-time error because myVariable is already declared in the same scope
//****************************** Const ******************************//
// Const in Typescript
// Const is a block-scoped variable declaration, similar to let, but it cannot be reassigned after it has been initialized.
// Const -> that cannot be reassigned or redeclared within the same scope.
// Example:
const myConstant = "Hello, TypeScript!"; // Declare a constant variable and assign a value
console.log(myConstant); // Output: Hello, TypeScript!
// myConstant = "New Value"; // Compile-time error because myConstant cannot be reassigned
// const myConstant: string = "Another Value"; // Compile-time error because myConstant cannot be redeclared in the same scope  
//# sourceMappingURL=let_const.js.map