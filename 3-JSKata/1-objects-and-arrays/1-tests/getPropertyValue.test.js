const kata = require('../kata.js')

test('getPropertyValue gets values from objects', () => {
  // Arrange
  const expected = 21

  // Act
  const actual = kata.getPropertyValue({ age: 21 }, 'age')

  // Assert
  expect(actual).toBe(expected)
})
