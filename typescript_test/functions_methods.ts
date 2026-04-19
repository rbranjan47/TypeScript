// Functions and Methods in TypeScript

// Functions are reusable blocks of code that perform a specific task. 
// Return type- Type of value returned by the function can be explicitly defined. 

// Example1:
function getTime(): number{
    return new Date().getTime();
}

console.log(getTime());
// Output: 1718736000000 (example output, will vary based on current time)


//Example2:
function hello(name: string): string {
    return `Hello, ${name}!`;
}

console.log(hello("Rabi Ranjan"));
// Output: Hello, Rabi Ranjan!

//Example3:
function add(a: number, b: number): number {
    return a + b;
}   

console.log(add(5, 10));
// Output: 15



// ---------- Void Return Type- Indicate a function doesn't return any value.
//Example4:

function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

logMessage("This is a log message.");
// Output: Log: This is a log message. - Here not returning any value, just logging to console.


// ---------- Parameters- Typed with a similar syntax as variable declarations.
  
//Example5:
function multiply(x: number, y: number): number {   
    return x * y;
}

console.log(multiply(4, 5));
// Output: 20

// ---------- Optional Parameters- Marked with a question mark (?). Optional parameters must come after all required parameters.
//Example6:
function greet(name: string, greeting?: string): string {
    if (greeting) { 
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }   
}

console.log(greet("Alice"));    
// Output: Hello, Alice! - Here greeting is optional, so it defaults to "Hello"
console.log(greet("Bob", "Hi")); 
// Output: Hi, Bob! - Here greeting is provided as "Hi".    



// ------------------ Never Type- Represents a function that never returns a value (e.g., throws an error or has an infinite loop).
//Example7:
function mayThrowError(message: string): never {
    console.log(message);
    throw new Error(message);
}

