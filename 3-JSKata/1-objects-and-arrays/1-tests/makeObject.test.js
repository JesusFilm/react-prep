const kata = require('../kata.js')

test('makeObject makes objects', () => {
  // Arrange
  const expected1 = { name: 'mix' }
  const expected2 = { age: 32 }

  // Act
  const actual1 = kata.makeObject('name', 'mix')
  const actual2 = kata.makeObject('age', 32)

  // Assert
  expect(actual1).toEqual(expected1)
  expect(actual2).toEqual(expected2)
})
