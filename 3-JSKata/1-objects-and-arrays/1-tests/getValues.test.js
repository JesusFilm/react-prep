const kata = require('../kata.js')

test('getValues returns own values for an object', () => {
  // Arrange
  const dracula = {
    name: 'Count Dracula',
    email: 'dracula@hotmail.com',
    password: '12345',
    country: 'Transylvania',
  }
  const expected = [
    'Count Dracula',
    'dracula@hotmail.com',
    '12345',
    'Transylvania',
  ]

  // Act
  const actual = kata.getValues(dracula)

  // Assert
  expect(actual).toEqual(expected)
})
