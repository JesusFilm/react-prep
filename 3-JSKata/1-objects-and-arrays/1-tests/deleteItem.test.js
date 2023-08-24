const kata = require('../kata.js')

test('deleteItemAtIndex returns a new array without an element', () => {
  // Arrange
  const names = ['Aroha', 'Bob', 'Celia', 'Eleanor']
  const removed = 'Celia'

  // Act
  const actual = kata.deleteItemAtIndex(names, 2)

  // Assert
  expect(actual).not.toContain(removed)
  expect(actual).not.toBe(names)
})

test('deleteItem returns a new array without ALL instances of item', () => {
  // Arrange
  const names = ['Aroha', 'Bob', 'Celia', 'Eleanor', 'Bob', 'Bob']
  const removed = 'Bob'

  // Act
  const actual = kata.deleteItem(names, removed)

  // Assert
  expect(actual).not.toContain(removed)
  expect(actual).not.toBe(names)
})
