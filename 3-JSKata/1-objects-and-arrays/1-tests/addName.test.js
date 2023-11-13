const kata = require('../kata.js')

test('addName returns a copy of the input object with an added name property', () => {
  // Arrange
  const name = 'Matthieu Ricard'
  const obj = {
    address: '123 Happy Place',
  }
  const expected = {
    name,
    address: '123 Happy Place',
  }

  // Act
  const actual = kata.addName(obj, name)

  // Assert
  expect(actual).not.toBe(obj)
  expect(actual).toEqual(expected)
})

