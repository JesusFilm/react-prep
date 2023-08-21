const functions = require('../../functions')

test('functions.callsFunction takes a function as a parameter and calls it once', function () {
  let actual = 0
  const expected = 1

  function increment() {
    actual++
  }
  functions.callsFunction(increment)
  expect(actual).toBe(expected)
})
