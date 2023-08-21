const kata = require('../kata.js')

test('getItemAtIndex returns the correct item for an existing index', () => {
  // Arrange
  const alphabet = ['a', 'b', 'c', 'd', 'e']
  const expected = 'd'

  // Act
  const actual = kata.getItemAtIndex(alphabet, 3)

  // Assert
  expect(actual).toBe(expected)
})

test('getItemAtIndex returns a JavaScript Error for a non-existent index', () => {
  // Arrange
  const alphabet = ['a', 'b', 'c', 'd', 'e']
  const expected = new Error()

  // Assert
  const actual = kata.getItemAtIndex(alphabet, 5)

  // Assert
  expect(actual).toEqual(expected)
})
