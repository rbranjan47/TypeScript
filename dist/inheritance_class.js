"use strict";
//****************************** Inheritance ******************************//
// In TypeScript, inheritance allows a class to inherit properties and methods from another class. 
// The class that inherits is called the child class or subclass.
Object.defineProperty(exports, "__esModule", { value: true });
// Like Java, C#, and other object-oriented programming languages,
// TypeScript also supports class inheritance using the `extends` keyword.
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
class emplyeeDetails extends userDetails {
    _employeeAge; // Property to hold employee age
    _employeePosition; // Property to hold employee position 
    constructor(name, age, position) {
        super();
        userDetails.setUserDetails(101, name); // Call the static method from the parent class to set user details
        this._employeeAge = age; // Initialize employee age
        this._employeePosition = position; // Initialize employee position
    }
    get fullName() {
        return userDetails.userName; // Access the static property from the parent class to get the user name
    }
    get employeeAge() {
        return this._employeeAge;
    }
    get employeePosition() {
        return this._employeePosition;
    }
    set employeeAge(age) {
        this._employeeAge = age;
    }
    set employeePosition(position) {
        this._employeePosition = position;
    }
}
const John = new emplyeeDetails("John Doe", 30, "Software Engineer");
console.log(` Employee Info: Name: ${John.fullName}, 
    Age: ${John.employeeAge}, 
    Position: ${John.employeePosition}`);
// Output: Employee Info: Name: John Doe, Age: 30, Position: Software Engineer
//# sourceMappingURL=inheritance_class.js.map