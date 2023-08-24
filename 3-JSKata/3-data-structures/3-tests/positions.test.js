const positions = require('../positions')

test('positions.getFirst gets the first item in an array', function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e']
  const expected = 'a'

  const actual = positions.getFirst(alphabet)

  expect(actual).toBe(expected)
})

test('positions.getLast gets the last item in a small array', function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e']
  const expected = 'e'

  const actual = positions.getLast(alphabet)

  expect(actual).toBe(expected)
})

test('positions.getLast gets the last item in a long array', function () {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const expected = 'z'

  const actual = positions.getLast(alphabet)

  expect(actual).toBe(expected)
})
