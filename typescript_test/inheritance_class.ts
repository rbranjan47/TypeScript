//****************************** Inheritance ******************************//
// In TypeScript, inheritance allows a class to inherit properties and methods from another class. 
// The class that inherits is called the child class or subclass.

// Like Java, C#, and other object-oriented programming languages,
// TypeScript also supports class inheritance using the `extends` keyword.

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


class emplyeeDetails extends userDetails { // Employee class inherits from userDetails class
    _employeeAge: number; // Property to hold employee age
    _employeePosition: string; // Property to hold employee position 

    constructor(name: string, age: number, position: string, id: number) {
        super();
        this._employeeAge = age; // Initialize employee age
        this._employeePosition = position; // Initialize employee position
    }
    get fullName(): string { // Getter to return the full name of the employee
        return userDetails.userName; // Access the static property from the parent class to get the user name
    }

    get userID(): number | string {
        return userDetails.userID; // Access the static property from the parent class to get the user ID
    }

    get employeeAge(): number { // Getter to return the age of the employee
        return this._employeeAge;
    }
    get employeePosition(): string { // Getter to return the position of the employee
        return this._employeePosition;
    }
    set employeeAge(age: number) { // Setter to set the age of the employee
        this._employeeAge = age;
    }
    set employeePosition(position: string) { // Setter to set the position of the employee
        this._employeePosition = position;
    }
}

const John = new emplyeeDetails("John Doe", 30, "Software Engineer", 101);
console.log(` Employee Info: Name: ${John.fullName}, 
    Age: ${John.employeeAge}, 
    Position: ${John.employeePosition}
    id : ${John.userID}`);
// Output: Employee Info: Name: John Doe, Age: 30, Position: Software Engineer



class workerDetails extends emplyeeDetails {
    _workerDept: string;
    _workerSalary: number;

    constructor(name: string, age: number, id: number | string, position: string, dept: string, salary: number) {
        super(name, age, position, id);
        this._workerDept = dept;
        this._workerSalary = salary;
    }

    //getter workerDept
    get workerDept(): string {
        return this._workerDept;
    }
    //getter workerSalart
    get workerSalary(): number {
        return this._workerSalary;
    }

    //setter workerDept
    set workerDept(dept: string){
        this._workerDept = dept;
    }

    //setter workerSalary
    set workerSalary(salary: number){
        this._workerSalary = salary;
    }
}

const Alice = new workerDetails("Alice Smith", 28, 102, "Project Manager", "IT", 90000);
console.log(` Worker Info: Name: ${Alice.fullName}, 
    Age: ${Alice.employeeAge},
    Position: ${Alice.employeePosition},
    Department: ${Alice.workerDept},
    Salary: ${Alice.workerSalary},
    ID: ${Alice.userID}`);
// Output: Worker Info: 
// Name: Alice Smith, Age: 28, Position: Project Manager, Department: IT, Salary: 90000, ID: 102
