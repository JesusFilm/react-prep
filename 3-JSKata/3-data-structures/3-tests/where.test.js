const getContacts = require('./getContacts')
const where = require('../where')

test('where finds an object by id in an array', function () {
  const contacts = getContacts()
  const expected = [
    {
      id: '123',
      address: '742 Evergreen Terrace',
      name: 'Marge Simpson',
      age: 47,
    },
  ]

  const actual = where(contacts, { id: '123' })

  expect(actual).toEqual(expected)
})

test('where finds an object by property', function () {
  const contacts = getContacts()
  const expected = [
    { id: '126', address: 'Skull Island', name: 'Dr Evil', age: 51 },
  ]

  const actual = where(contacts, { address: 'Skull Island' })

  expect(actual).toEqual(expected)
})

test('where returns multiple correct results', function () {
  const contacts = getContacts()
  const expected = 2

  const actual = where(contacts, { age: 78 }).length

  expect(actual).toBe(expected)
})

test('where finds objects with two search properties', function () {
  const contacts = getContacts()
  const expected = [
    { id: '127', address: 'Wayne Manor', name: 'Alfred', age: 78 },
  ]

  const actual = where(contacts, { age: 78, address: 'Wayne Manor' })

  expect(actual).toEqual(expected)
})
