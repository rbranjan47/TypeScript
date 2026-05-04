
//****************************** Class ******************************//
// Class in TypeScript
// A class is a blueprint for creating objects with specific properties and methods.
// Example:

class Person {
    name: string; // Property to hold the name of the person\

    constructor(name: string) { // Constructor to initialize the name property
        this.name = name;
    }
    greet() { // Method to greet the person
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const person1 = new Person("Rabi Ranjan"); // Create an instance of the Person class
person1.greet(); // Output: Hello, my name is Rabi Ranjan!


class Bike{
    brand: string; // Property to hold the brand of the bike
    bikeCC: number; // Property to hold the engine capacity of the bike
    topSpeed: number; // Property to hold the top speed of the bike
    chesisNumber: string | number; // Property to hold the chassis number of the bike
    purchasedYear: number; // Property to hold the year the bike was purchased

    constructor(brand: string, bikeCC: number, topSpeed: number, chesisNumber: string | number, purchasedYear: number) {
        this.brand = brand;
        this.bikeCC = bikeCC;
        this.topSpeed = topSpeed;
        this.chesisNumber = chesisNumber;
        this.purchasedYear = purchasedYear;
    }
     
    bikeDetails() { // Method to display the details of the bike
        console.log(`Brand: ${this.brand}, 
            Engine Capacity: ${this.bikeCC}cc, 
            Top Speed: ${this.topSpeed} km/h, 
            Chassis Number: ${this.chesisNumber}, 
            Purchased Year: ${this.purchasedYear}`);
    }
}

const firstBike = new Bike("Honda Unicorn Dazzler", 150, 120, "HONDA12345", 2020); 
const secondBike = new Bike("TVS Ronin", 225, 135, "TVS12345", 2025);

console.log("First Bike Details:", firstBike.bikeDetails());
console.log("Second Bike Details:", secondBike.bikeDetails());


// ***********We can instantiate the class with PUBLIC and PRIVATE access modifiers

class Car {
    public brand: string; // Public property to hold the brand of the car
    private model: string; // Private property to hold the model of the car
    public year: number; // Public property to hold the year of the car 

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public carDetails() { // Public method to display the details of the car
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

const myCar = new Car("Toyota", "Corolla", 2022);
myCar.carDetails(); // Output: Brand: Toyota, Model: Corolla, Year: 2022
// console.log(myCar.model); // Compile-time error, model is a private property and cannot be accessed outside the class





//****************************** Getter and Setter ******************************//
// Getter and setter are special methods in a class that allow you to control access to the properties of an object.
// Setter must have 1 parameter, and getter must not have any parameters. 
// Both getter and setter must have the same name as the property they are associated with.
// Added underscore to property names like _name, _age, _positions to reutilize the same name for getter and setter methods without causing naming conflicts.



// Example:


class Employee {
    private _name: string; // Private property to hold the name of the employee
    private _age: number; // Private property to hold the age of the employee
    private _position: string; // Private property to hold the position of the employee

    //Initializes the properties
    constructor(name: string, age: number, position: string) {
        this._name = name;
        this._age = age;
        this._position = position;
    }

    //getter name
    get fullName(): string {
        return this._name;
    }

    //setter name
    set fullName(name: string) {
        this._name = name;
    }

    //getter age
    get employeeAge(): number {
        return this._age;
    }   

    //setter age
    set employeeAge(age: number) {
        if (age > 0) {
            this._age = age;
        } else {
            console.log("Age must be a positive number.");
        }
    }

    //getter position
    get employeePosition(): string {
        return this._position;
    }

    //setter position
    set employeePosition(position: string) {
        this._position = position;
    }
}


const John = new Employee("John Doe", 30, "Software Engineer");
console.log(` Employee Info: Name: ${John.fullName}, 
    Age: ${John.employeeAge}, 
    Position: ${John.employeePosition}`); 
    // Output: Employee Info: Name: John Doe, Age: 30, Position: Software Engineer





  //****************************** Static Properties & Methods ******************************//
  // In TypeScript, static properties and methods belong to the class itself rather than to instances of the class.
  // Static members can be accessed without creating an instance of the class, using the class name directly.

  // Like Java, C#, and other object-oriented programming languages, 
  // TypeScript also supports static properties and methods in classes.

  // Example1:

class MathUtils {
    static pi: number = 3.14159; // Static property to hold the value of pi

    static calculateCircleArea(radius: number): number { // Static method to calculate the area of a circle
        return MathUtils.pi * radius * radius;
    }
}

const radius = 5;
const area = MathUtils.calculateCircleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area}.`);    

// If we try to access static members through an instance of the class, it will result in a compile-time error.
// const mathUtilsInstance = new MathUtils();
// console.log(mathUtilsInstance.pi); // Compile-time error, cannot access static property through an instance


// Example2:
class userDetails {
    static userID: number | string; // Static property to hold the user ID
    static userName: string; // Static property to hold the user name

    static setUserDetails(id: number | string, name: string): void { // Static method to set user details
        userDetails.userID = id;
        userDetails.userName = name;
    }
    
    static getUserDetails(): string { // Static method to get user details
        return `User ID: ${userDetails.userID}, User Name: ${userDetails.userName}`;
    }       

}

userDetails.setUserDetails(101, "Alice");
console.log(userDetails.getUserDetails()); // Output: User ID: 101, User Name: Alice        





//****************************** Interface ******************************//
// Interface in TypeScript, not in Javascript
// An interface is a contract that defines the structure of an object, specifying the properties and methods it should have.
// Example:

interface fruitsName {
    name: string; 
    color: string;
    taste: string;
}

const apple: fruitsName = { // Create an object that adheres to the fruitsName interface
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

console.log(apple); // Output: { name: 'Apple', color: 'Red', taste: 'Sweet' }

// Difference between Class and Interface in TypeScript
// 1. Class is a blueprint for creating objects, while an interface is a contract that defines the structure of an object.
// 2. Implementation details (methods with logic), while an interface only defines the shape of an object without implementation.
// 3. Class can be instantiated to create objects, while an interface cannot be instantiated directly.
// 4. Class can have access modifiers (public, private, protected) for its members, while an interface cannot have access modifiers.


// *************************** Type ALIAS vs INTERFACE in TypeScript *************************** //
// 1. Type Alias can define primitive types, union types, tuple types, and more complex types, while an interface can only define object types.
// 2. Type Alias cannot be reopened to add new properties, while an interface can be extended to add new properties.

 // Example:
 // Syntax- Type Alias uses the `type` keyword, while Interface uses the `interface` keyword.
 interface interface_user {
    name : string;
    age: number;
    email?: string; // Optional property
 }

 const user1: interface_user = { // Create an object that adheres to the user interface
    name: "Alice",
    age: 30
 };
 console.log(user1); // Output: { name: 'Alice', age: 30 }


 type type_user = {
    name : string;
    age: number;
    email?: string; // Optional property
 }

// idential to interface, but with type alias
const user2: type_user = { // Create an object that adheres to the user type alias
    name: "Bob",
    age: 25,
    email: "bob@gamil.com"
}
console.log(user2); // Output: { name: 'Bob', age: 25, email: 'bob@gamil.com'}

// Extending- Interface use extends keyword to extend another interface, while Type Alias can use intersection types (&) to combine multiple types.
// Interface:------------------------------
interface animal {
    name: String;
}

// extends 1 or more interfaces
interface dog extends animal {
    breed: String;
}

interface trainedDog extends animal, dog {
    owner: string;
}

// Declaration Merging- Defining same interface multiple times, and TypeScript will merge them into a single interface. 
// Type Aliases cannot be declared multiple times with the same name.

interface Animal {
    age : number;
}


// Type Alias::------------------------------
type _animal = {
    name: String;
}

//extend with &
type _dog = _animal & {
    breed: String;
}

// Also, extend multiple with &
type _trainedDog = _animal & _dog & {
    owner: string;
}

// but declaration murging not working for type alias
// type _Animal = {
//     age : number;
// }  // Error, duplicate


// *************************** Intersection Type *************************** //
type FileData = {
    path: string;
    content: string;
}

type DatabaseData = {
    connectionURL : string;
    credentials: string;
}

type status = {
    isSuccess: boolean;
    errorMessage?: string;
}

type AccessibleFileData = FileData & DatabaseData & status; // Intersection type combining FileData, DatabaseData, and status
type AccessDatabaseData = DatabaseData & status; // Intersection type combining DatabaseData and status


// AND SAME WE CAN ACHIEVE WITH INTERFACE EXTENSION (EXTENDS KEYWORD)
// interface IFileData {
//     path: string;
//     content: string;
// }

// interface IDatabaseData {
//     connectionURL: string;
//     credentials: string;
// }

// interface IStatus {
//     isSuccess: boolean;
//     errorMessage?: string;
// }

// interface IAccessibleFileData extends IFileData, IDatabaseData, IStatus {}