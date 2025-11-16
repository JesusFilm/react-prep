
export default function Home() {
/**
 * Typescript builds on Javascript. 
 * 
 * 1. Provides error warnings in your editor as you code.
 * 2. Helps to identify bugs in your code before you run it.
 * 3. Provide code completion (IntelliSense).
 * 4. Helps to communicate intent.
 */

// Basics - static type checking

const message = "Hello"

message.toLowerCase()

message()

// Will this throw an error?

const person = {
  name: "Edmond",
  age: 30
}

// person.height

// Type annotations in variables

const myName: string = "Edmond"

// Parameter type annotations

function greet(name: string) {
  console.log("Hello ," + name)
}

// greet("Edmond")
// greet(42)

// Return type annotations

// function getFavouriteNumber(): number {
//   return "26"
// }

// Object types

// function print

  return (
    <>Hello World</>
  );
}
