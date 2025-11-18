/**
* Typescript builds on Javascript.
*
* 1. Provides error warnings in your editor as you code.
* 2. Helps to identify bugs in your code before you run it.
* 3. Provides code completion (IntelliSense).
* 4. Helps to communicate intent.
*/
// Basics - static type checking

const message = 42
// message.toLowerCase()

// Why is Typescript unhappy?

const person = {
  name: "Edmond",
  age: 30,
}

// person.height

// Type annotations in variables

const myName: string = "Edmond"

// Parameter type annotations

function greet(name: string) {
  console.log("Hello, " + name)
}

// greet(42)
// Why is Typescript unhappy?

  
// Return type annotations

// function getFavouriteNumber(): number {
//   return '26'
// }

// Why is Typescript unhappy? Isn't this a number?

