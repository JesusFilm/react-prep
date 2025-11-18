const kata = require('../kata.js')

test('deleteItemAtIndex returns an array without an element', () => {
  // Arrange
  const names = ['Aroha', 'Bob', 'Celia', 'Eleanor']
  const removed = 'Celia'

  // Act
  const actual = kata.deleteItemAtIndex(names, 2)

  // Assert
  expect(actual).not.toContain(removed)
  expect(actual).not.toBe(names)
})
