var kata = require('../kata.js')

test('replaceItemAtIndex replaces the correct item', () => {
  // Arrange
  const alphabet = ['a', 'b', 'c', 'd', 'e']
  const expected = ['alpha', 'b', 'c', 'd', 'e']

  // Act
  const actual = kata.replaceItemAtIndex(alphabet, 0, 'alpha')

  // Assert
  expect(actual).toEqual(expected)
  expect(actual).not.toBe(alphabet)
})
