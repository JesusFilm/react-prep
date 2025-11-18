const kata = require('../kata.js')

test('getKeys returns own property keys for an object', () => {
  // Arrange
  const dracula = {
    name: 'Count Dracula',
    email: 'dracula@hotmail.com',
    password: '12345',
    country: 'Transylvania',
  }
  const expected = ['name', 'email', 'password', 'country']

  // Act
  const actual = kata.getKeys(dracula)

  // Assert
  expect(actual).toEqual(expected)
})
