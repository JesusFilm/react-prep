const kata = require('../kata.js')

test('makeArrayOfItems (PLURAL) makes an array of arguments', () => {
  // Arrange
  const expected = ['foo', 'bar', 'wombat', false, 99]

  // Act
  const actual = kata.makeArrayOfItems('foo', 'bar', 'wombat', false, 99)

  // Assert
  expect(actual).toEqual(expected)
})
