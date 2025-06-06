# Kata: Objects and Arrays

## Introduction

In this exercise we'll practice some of the fundamentals of JavaScript and start learning about automated testing. We're going to start getting used to seeing tests coloured RED, and writing code to make them go GREEN.

## Installation

First, if you haven't already, navigate to the directory and install the dependencies.

```
cd 3-JSKata
npm install
```

## Kata with tests

First, take a look at the files in the `tests` folder and examine how the tests are structured. You don't have to read and understand every single test before beginning! Instead, notice the rhythm that the tests exhibit:

- **Arrange:** set up some data to use in the test, especially state _what we expect to happen_
- **Act:** call the function that is being tested, so we can find out _what actually happens_
- **Assert:** check to see if what we _expected_ to happen _actually_ happened!

## The first test

To run the first test from your terminal:

```
npm test 1-tests/getGreeting
```

You'll see some red output that looks like this:

```
 FAIL  1-objects-and-arrays/1-tests/getGreeting.test.js
  ✕ getGreeting returns "Hello <name>" (4ms)

  ● getGreeting returns "Hello <name>"

    expect(received).toBe(expected)

    Expected value to be (using ===):
      "Hello Aardvark"
    Received:
      undefined

    Difference:

      Comparing two different types of values. Expected string but received undefined.

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.619s, estimated 1s
Ran all test suites matching /1-tests\/getGreeting/i

Active Filters: filename /1-tests/getGreeting/
 › Press c to clear filters.

Watch Usage
 › Press a to run all tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

The most important thing is not to panic! Welcome to your first introduction to testing. In this challenge, you're going to make all the tests go GREEN. It's rather addictive once you get started.

## Kata

The file you'll be working in is `kata.js`. This file is full of incomplete functions with comments describing what they should do. Every time you run the tests (using `npm test 1-tests/[nameOfTheFunctionYoureWorkingOn]`) you're checking to see if you've completed each function correctly. When you finish it successfully, it will show up GREEN and you can move on to the next function.

Let's try it! Open `kata.js` in your editor. The first function looks like this:

```js
// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
function getGreeting(name) {}
```

Ok, so it wants us to return a string using the input parameter `name`. Let's solve it so we can make the test go GREEN:

```js
function getGreeting(name) {
  return 'Hello ' + name
}
```

You'll notice that when you save `kata.js` your terminal indicates the test is now passing.

```
 PASS  1-objects-and-arrays/1-tests/getGreeting.test.js
  ✓ getGreeting returns "Hello <name>" (1ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.069s, estimated 1s
Ran all test suites matching /1-tests\/getGreeting/i

Watch Usage: Press w to show more.
```

Now you should press the `q` key in the terminal to stop the test runner (`w` will show you all the options) and you can move on to the next function.

This way we can practice the basics of JavaScript and build up our muscle memory:

1.  Read what the next function is supposed to do
1.  Run the tests using `npm test 1-tests/[nameOfTheFunctionYoureWorkingOn]`
1.  Write the code and save the file
1.  Read any errors and keep trying
1.  Rinse and repeat until all the tests pass
1.  Finally press `q` key in the terminal to stop the test runner

## Making sure you're finished

To run all of the tests for all of the functions you've written, in terminal run:

```
npm test 1-tests
```

This will run all tests in the `1-tests` directory.
