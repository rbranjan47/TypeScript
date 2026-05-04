"use strict";
//****************************** Class ******************************//
// Class in TypeScript
// A class is a blueprint for creating objects with specific properties and methods.
// Example:
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name; // Property to hold the name of the person\
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
const person1 = new Person("Rabi Ranjan"); // Create an instance of the Person class
person1.greet(); // Output: Hello, my name is Rabi Ranjan!
class Bike {
    brand; // Property to hold the brand of the bike
    bikeCC; // Property to hold the engine capacity of the bike
    topSpeed; // Property to hold the top speed of the bike
    chesisNumber; // Property to hold the chassis number of the bike
    purchasedYear; // Property to hold the year the bike was purchased
    constructor(brand, bikeCC, topSpeed, chesisNumber, purchasedYear) {
        this.brand = brand;
        this.bikeCC = bikeCC;
        this.topSpeed = topSpeed;
        this.chesisNumber = chesisNumber;
        this.purchasedYear = purchasedYear;
    }
    bikeDetails() {
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
    brand; // Public property to hold the brand of the car
    model; // Private property to hold the model of the car
    year; // Public property to hold the year of the car 
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    carDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.carDetails(); // Output: Brand: Toyota, Model: Corolla, Year: 2022
const apple = {
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
//****************************** Getter and Setter ******************************//
// Getter and setter are special methods in a class that allow you to control access to the properties of an object.
// Setter must have 1 parameter, and getter must not have any parameters. 
// Both getter and setter must have the same name as the property they are associated with.
// Added underscore to property names like _name, _age, _positions to reutilize the same name for getter and setter methods without causing naming conflicts.
// Example:
class Employee {
    _name; // Private property to hold the name of the employee
    _age; // Private property to hold the age of the employee
    _position; // Private property to hold the position of the employee
    //Initializes the properties
    constructor(name, age, position) {
        this._name = name;
        this._age = age;
        this._position = position;
    }
    //getter name
    get fullName() {
        return this._name;
    }
    //setter name
    set fullName(name) {
        this._name = name;
    }
    //getter age
    get employeeAge() {
        return this._age;
    }
    //setter age
    set employeeAge(age) {
        if (age > 0) {
            this._age = age;
        }
        else {
            console.log("Age must be a positive number.");
        }
    }
    //getter position
    get employeePosition() {
        return this._position;
    }
    //setter position
    set employeePosition(position) {
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
    static pi = 3.14159; // Static property to hold the value of pi
    static calculateCircleArea(radius) {
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
    static userID; // Static property to hold the user ID
    static userName; // Static property to hold the user name
    static setUserDetails(id, name) {
        userDetails.userID = id;
        userDetails.userName = name;
    }
    static getUserDetails() {
        return `User ID: ${userDetails.userID}, User Name: ${userDetails.userName}`;
    }
}
userDetails.setUserDetails(101, "Alice");
console.log(userDetails.getUserDetails()); // Output: User ID: 101, User Name: Alice        
//# sourceMappingURL=classes_interface.js.map