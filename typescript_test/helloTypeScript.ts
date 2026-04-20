//TypeScript: Typescript is a superset of JavaScript that adds static typing to the language. It allows developers to catch errors at compile time and provides better tooling support for large codebases.

//To use TypeScript, you need to install it globally using npm:
//npm install -g typescript


//In TypeScript, you can define the type of a variable using a type annotation. For example:
const user: { name: string, age: number } = { name: "John", age: 30 };
console.log(user.name); // Output: John
console.log(user.age);  // Output: 30

//*********************** Type: union (declaring by | (pipeline)) ***********************//
//Union Types: TypeScript allows you to define a variable that can hold multiple types using union types. For example:

let age: string | number = 25;
age = "twenty five"; // This is allowed because age can be either a string or a number

console.log(age); // Output: twenty five

console.log(Number(age)); // Output: Age is 25



//*********************************** Type: any ***********************************//
//Any Type: If you want to opt-out of type checking for a variable, you can use the any type. 
//This allows the variable to hold any type of value without causing a compile-time error. For example:


let data: any = "Hello, World!";
console.log(data); // Output: Hello, World!
data = 42; // This is allowed because data can hold any type of value

console.log(data); // Output: 42

data = { name: "Alice", age: 25 }; // This is also allowed
console.log(data); // Output: { name: "Alice", age: 25 }


//*********************************** Type: unknown ***********************************//
//Unknown Type: The unknown type is a type that represents any value, similar to the any type. 
// However, unlike any, you must perform a type check or type assertion before you can use the value. 
// This provides better type safety. For example:


let userInput: unknown = "Hello, World!";
if (typeof userInput === "string"
    && userInput.length > 0
    && userInput.trim() !== ""
    && userInput.includes("Hello")
    && userInput.includes("World")
    && userInput.includes("!")
    && userInput.includes(" ")
    && userInput.includes(",")
) { // Type check to ensure userInput is a non-empty string
    console.log(userInput); // Output: Hello, World!
}


let additionalInput: unknown = "ABCDEF 12345 &*^%$#@!"; 
if (typeof additionalInput === "string" 
    && additionalInput.length > 0
    && additionalInput.trim() !== ""
    && additionalInput.includes("ABC")
    && additionalInput.includes("12345")
    && additionalInput.includes("&*^%$#@!")
) { // Type check to ensure additionalInput is a non-empty string with specific content
    console.log(additionalInput); // Output: ABCDEF 12345 &*^%$#@!
} else {
    console.log("Invalid input. Please provide a non-empty string with the required content.");
}

