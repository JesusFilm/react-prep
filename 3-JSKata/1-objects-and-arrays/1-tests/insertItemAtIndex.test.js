const kata = require('../kata.js')

test('insertItemAtIndex inserts an element into the array', () => {
  // Arrange
  const names = ['Aroha', 'Bob', 'Celia', 'Eleanor']
  const toAdd = 'Dan'

  // Act
  const actual = kata.insertItemAtIndex(names, toAdd, 3)

  // Assert
  expect(actual).toContain(toAdd)
  expect(actual).not.toBe(names)
})
