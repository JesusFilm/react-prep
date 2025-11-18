const functions = require('../../functions')

test('functions.callsProperty accepts a parameter `obj` and calls obj.increment() (once)', function () {
  const expected = 1
  const actual = {
    n: 0,
    increment: function () {
      this.n++
    },
  }
  functions.callsProperty(actual)
  expect(actual.n).toBe(expected)
})
