const kata = require('../kata.js')

test('ageOneYear returns a copy of the input object with an age property incremented', () => {
  // Act
  const mickey = {
    name: 'Mickey Mouse',
    age: 64,
    email: 'mickey@disney.com',
  }

  // Arrange
  const result = kata.ageOneYear(mickey)

  // Assert
  expect(result.age).toBe(65)
  expect(result).not.toBe(mickey)
})
