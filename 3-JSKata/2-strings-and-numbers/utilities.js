function getType(thing) {
  return typeof thing
}

function isNumber(thing) {
  return typeof thing === 'number'
}

function toNumber(str) {
  let num = Number(str)
  return num
}

function isStringNumber(str) {
  return !isNaN(Number(str))
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  a = Number(a)
  b = Number(b)
  return (a + b).toString()
}

function addStringsOrNumbers(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return addStrings(a, b)
}

function isEmail(str) {
  const parts = str.split('@')
  return parts.length === 2 && parts[0] !== '' && parts[1] !== ''
}
function countIf(array, fn) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
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
