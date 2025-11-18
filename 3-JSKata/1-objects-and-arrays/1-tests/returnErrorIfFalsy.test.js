const kata = require('../kata.js')

test('returnErrorIfFalsy returns the correct Error when passed 0', () => {
  // Arrange
  const expected = new Error('Oh no, an error!')

  // Act
  const actual = kata.returnErrorIfFalsy(0)

  // Assert
  expect(actual).toEqual(expected)
})

test('returnErrorIfFalsy(1) is undefined', () => {
  // Arrange
  const expected = undefined

  // Act
  const actual = kata.returnErrorIfFalsy(1)

  // Assert
  expect(actual).toBe(expected)
})
