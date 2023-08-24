const getContacts = require('./getContacts')
const find = require('../find')

test('find finds the first matching object in the array', function () {
  const contacts = getContacts()
  const expected = {
    id: '125',
    address: 'Wayne Manor',
    name: 'Bruce Wayne',
    age: 43,
  }

  const actual = find(contacts, { address: 'Wayne Manor' })

  expect(actual).toEqual(expected)
})
