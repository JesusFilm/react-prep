"use strict";
// Basic Types
let id = 5;
let compnay = 'Bobo Media';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
// Tuple
let person = [1, "Jay", false];
let employee;
employee = [
    [1, 'Jay'],
    [2, 'Jack'],
    [3, 'Anna'],
    [4, 'Nick']
];
let pid = 22;
pid = 22;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// creates new type called user instead of writing out every expectation before object
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion - explicitly tell compiler to treat entity as different type
// There are two ways to do this, either <number> or __ as number:
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// Functions * Note: the third number expectation will expect output to be a number
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
// NOTE: the question mark after age makes it optional
const user1 = {
    id: 1,
    name: 'John',
};
user1.id;
const add = (x, y) => x + y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // adding private - properties in object is only accessible within the class, even console logging it
        // adding protected - access within class itself or the class extended
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// creating new person object in variable "Jay"
const Jay = new Person(1, "Jay");
console.log(Jay.register());
// lets say we want an employee class, which like person but has role property:
// this is known as a SUBCLASS
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); //super just initialises all in once as in person 
        this.position = position; // however position needs to be set bc it wasnt in person
    }
}
const emp = new Employee(3, "Jack", "Intern");
// Generics - adding <T> or T means it expects a certain type
function getArray(items) {
    return new Array().concat(items);
}
// adding this into each respective function
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Jay", "Jack", "Anna", "Nick"]);
// to create react-app with ur ts stuff to tsx:
// npx create-react-app . --template typescript
