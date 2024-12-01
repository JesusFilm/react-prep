function getType(thing) {
  return typeof thing
}

function isNumber(thing) {
  // console.log(getType(thing) === Number)
  // console.log(thing, getType(thing), getType(thing) === 'number')
  return getType(thing) === 'number'
}

function toNumber(str) {
  return Number(str)
}

function isStringNumber(str) {
  return !isNaN(Number(str))
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  // console.log(typeof a, typeof b)
  return String(Number(a) + Number(b))
}

function addStringsOrNumbers(a, b) {
  let res = Number(a) + Number(b)
  return getType(a) === 'string' || getType(b) === 'string' ? String(res) : res
}

function isEmail(str) {
  // console.log(str)
  return str.includes('@') && str.includes('.com')
}

function countIf(array, fn) {
  return array.filter(fn).length
}

function filterStringsWithCommas(str) {
  let numComma = str.split(',').length - 1
  return numComma > 1 ? numComma : numComma === 1
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
