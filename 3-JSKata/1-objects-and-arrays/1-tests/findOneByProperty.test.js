const kata = require('../kata.js')

test('findOneByProperty returns an object with matching property', () => {
  // Arrange
  const monsters = [
    {
      name: 'Count Dracula',
      email: 'dracula@hotmail.com',
      country: 'Transylvania',
      age: 588,
    },
    {
      name: "Frankenstein's Monster",
      email: 'franky@monster.com',
      country: 'Switzerland',
      age: 232,
    },
    {
      name: 'Cthulhu',
      email: 'cthulhu@thedeep.com',
      country: "R'lyeh",
      age: 1032988,
    },
    {
      name: 'Taniwha',
      email: 'taniwha@awa.com',
      country: 'Aotearoa',
      age: 232,
    },
  ]

  const expected = {
    name: 'Cthulhu',
    email: 'cthulhu@thedeep.com',
    country: "R'lyeh",
    age: 1032988,
  }

  // Act
  const actual = kata.findOneByProperty(monsters, { name: 'Cthulhu' })

  // Assert
  expect(actual).toEqual(expected)
})
