const kata = require('../kata.js')

test('hasItem returns true if item is in array', () => {
  // Arrange
  const arr = ['a', 1, null, true]

  // Act
  const actual = kata.hasItem(arr, 'a')

  // Assert
  expect(actual).toBe(true)
})

test('hasItem returns false if item is not in array', () => {
  // Arrange
  const arr = ['a', 1, null, true]

  // Act
  const actual = kata.hasItem(arr, 'b')

  // Assert
  expect(actual).toBe(false)
})
