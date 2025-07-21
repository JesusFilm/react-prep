function getType(thing) {
  return typeof thing
}

function isNumber(thing) {
  return typeof thing == 'number'
}

function toNumber(str) {
  return Number(str)
}

function isStringNumber(str) {
  return typeof str == 'string' && !isNaN(str)
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  return String(Number(a) + Number(b))
}

function addStringsOrNumbers(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b
  } else {
    return String(Number(a) + Number(b))
  }
}

function isEmail(str) {
  console.log
  const emailRegex = /.+@.+\..+/
  return emailRegex.test(str)
}

function countIf(array, fn) {
  count = 0
  for (item of array) {
    if (fn(item)) {
      count++
    }
  }
  return count
}

function filterStringsWithCommas(str) {
  return str.includes(',')
}

function splitStringByCommas(str) {
  return str.split(',')
}

module.exports = {
  getType,
  isNumber,
  toNumber,
  isStringNumber,
  add,
  addStrings,
  addStringsOrNumbers,
  isEmail,
  countIf,
  filterStringsWithCommas,
  splitStringByCommas,
}
