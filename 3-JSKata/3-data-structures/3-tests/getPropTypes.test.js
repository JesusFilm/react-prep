const getPropTypes = require('../getPropTypes')

test('getPropTypes returns the types of object properties', function () {
  const objWithDifferentTypes = {
    a: 'c',
    b: 2,
    c: function () {
      return 'hello'
    },
    d: false,
    e: {},
  }
  const expected = ['string', 'number', 'function', 'boolean', 'object']

  const actual = getPropTypes(objWithDifferentTypes)

  expect(actual).toEqual(expected)
})
