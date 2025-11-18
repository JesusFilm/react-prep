const kata = require('../kata.js')

test('unzipObject returns an array of key/value pairs', () => {
  // Arrange
  const dracula = {
    name: 'Count Dracula',
    email: 'dracula@hotmail.com',
    password: '12345',
    country: 'Transylvania',
  }
  const expected = Object.keys(dracula).map((key) => [key, dracula[key]])

  // Act
  const actual = kata.unzipObject(dracula)

  // Assert
  expect(actual).toEqual(expected)
})
