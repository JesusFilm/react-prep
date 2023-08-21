const kata = require('../kata.js')

test('getGreeting returns "Hello <name>"', () => {
  // Arrange
  const expected = 'Hello Aardvark'

  // Act
  const actual = kata.getGreeting('Aardvark')

  // Assert
  expect(actual).toBe(expected)
})
