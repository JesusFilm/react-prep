const getType = require('../getType')

test('getType returns correct data type for number', function () {
  const expected = 'number'

  const actual = getType(123)

  expect(actual).toBe(expected)
})

test('getType returns correct data type for string', function () {
  const expected = 'string'

  const actual = getType('123') // Notice the difference between '123' and 123

  expect(actual).toBe(expected)
})

test('getType returns the expected data types', function () {
  const arrayWithDifferentTypes = [
    'd',
    3,
    function () {
      return 'hello'
    },
    true,
    [],
  ]
  const expected = ['string', 'number', 'function', 'boolean', 'object']

  const actual = arrayWithDifferentTypes.map(getType)

  expect(actual).toEqual(expected)
})
