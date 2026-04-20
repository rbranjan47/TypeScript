"use strict";
//*********************************** ENUMS *********************************** //
// Enums are a way to define a set of named constants. 
// They can be used to represent a collection of related values in a more readable and maintainable way. In 
// TypeScript, you can define enums using the enum keyword.
//Without enum Example-
function setDiresction(direction) {
    console.log(`The direction is: ${direction}`);
}
setDiresction("North"); //Output: The direction is: North
//setDirection ("up"); //compile-time error because "up" is not a valid direction
// With enum:
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
function setDirection(direction) {
    console.log(`The direction is: ${Direction[direction]}`);
}
setDirection(Direction.North); //Output: The direction is: North
setDirection(Direction.East); //Output: The direction is: East
//setDirection(4); //compile-time error because 4 is not a valid direction
//Another example of enum:
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
    Color["Yellow"] = "Yellow";
    Color["Purple"] = "Purple";
    Color["Orange"] = "Orange";
    Color["Pink"] = "Pink";
    Color["Black"] = "Black";
    Color["White"] = "White";
    Color["Gray"] = "Gray";
    Color["Cyan"] = "Cyan";
    Color["Magenta"] = "Magenta";
    Color["Lime"] = "Lime";
    Color["Maroon"] = "Maroon";
    Color["Navy"] = "Navy";
    Color["Olive"] = "Olive";
    Color["Teal"] = "Teal";
    Color["Silver"] = "Silver";
    Color["Gold"] = "Gold";
    Color["Bronze"] = "Bronze";
    Color["Violet"] = "Violet";
})(Color || (Color = {}));
function setColor(color) {
    console.log(`The color is: ${Color[color]}`);
}
//Output: The color is: Red
setColor(Color.Red);
//Output: The color is: Green
setColor(Color.Green);
//Output: The color is: Blue
setColor(Color.Blue);
//setColor("Pink"); //compile-time error because "Pink" is not a valid color            
setColor(Color.Pink); //Output: The color is: Pink
setColor(Color.Gold); //Output: The color is: Gold
setColor(Color.Bronze); //Output: The color is: Bronze
setColor(Color.Violet); //Output: The color is: Violet
//setColor(Color.Brown); //Output: The color is: Brown //compile-time error because Brown is not a valid color in the enum
