const getContacts = require('./getContacts')
const getAddress = require('../getAddress')

test('map and getAddress return the address property from objects in an array', function () {
  const contacts = getContacts()
  const expected = [
    '742 Evergreen Terrace',
    'Bag End',
    'Wayne Manor',
    'Skull Island',
    'Wayne Manor',
  ]

  const actual = contacts.map(getAddress)

  expect(actual).toEqual(expected)
})
