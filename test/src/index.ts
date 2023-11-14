// Basic Types
let id: number = 5
let compnay: string = 'Bobo Media'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

let ids: number[] = [1,2,3,4,5]

// Tuple
let person: [number, string, boolean] = [1, "Jay", false]

let employee: [number, string][]

employee = [
  [1, 'Jay'],
  [2, 'Jack'],
  [3, 'Anna'],
  [4, 'Nick']
]

let pid: string | number = 22
pid = 22

enum Direction1 {
  Up=1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number,
  name: string
}

// creates new type called user instead of writing out every expectation before object
const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion - explicitly tell compiler to treat entity as different type
// There are two ways to do this, either <number> or __ as number:
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number 

// Functions * Note: the third number expectation will expect output to be a number
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number) {
  console.log(message)
}

// Interfaces - custom type, or specific type ot an object 
// read only makes properties read only, and cannot be changedf
interface userInterface {
  readonly id: number, 
  name: string
  age?: number
}
// NOTE: the question mark after age makes it optional

const user1: userInterface = {
  id: 1,
  name: 'John',
}

user1.id

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

interface PersonInterface {
  id: number,
  name: string
  register(): string // this tells register it is expected to return a string
}

// Classes
class Person implements PersonInterface { 
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    // adding private - properties in object is only accessible within the class, even console logging it
    // adding protected - access within class itself or the class extended
  }

  register() {
    return `${this.name} is now registered`
  }
}
// creating new person object in variable "Jay"
const Jay = new Person(1, "Jay")

console.log(Jay.register())

// lets say we want an employee class, which like person but has role property:
// this is known as a SUBCLASS
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name) //super just initialises all in once as in person 
    this.position = position // however position needs to be set bc it wasnt in person
  }
}

const emp = new Employee(3, "Jack", "Intern")

// Generics - adding <T> or T means it expects a certain type
function getArray<T>(items: T[]): T[]  {
  return new Array().concat(items)
}
// adding this into each respective function
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["Jay", "Jack", "Anna", "Nick"])

// to create react-app with ur ts stuff to tsx:
// npx create-react-app . --template typescript
