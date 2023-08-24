const kata = require('../kata.js')

test('makeArrayOfItem (SINGULAR) makes an array out of one item', () => {
  // Arrange
  const expected = ['dog', 'dog', 'dog']

  // Act
  const actual = kata.makeArrayOfItem('dog', 3)

  // Assert
  expect(actual).toEqual(expected)
})
