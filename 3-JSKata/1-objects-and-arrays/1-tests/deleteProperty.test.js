const kata = require('../kata.js')

test('deleteProp deletes properties', () => {
  // Arrange
  const mickey = {
    name: 'Mickey Mouse',
    age: 64,
    email: 'mickey@disney.com',
  }

  const expected = {
    name: 'Mickey Mouse',
    age: 64,
  }

  // Act
  const actual = kata.deleteProperty(mickey, 'email')

  // Assert
  expect(actual).toEqual(expected)
  expect(actual).not.toBe(mickey)
})
