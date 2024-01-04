function getType(thing) {
  return typeof thing
}

function isNumber(thing) {
  return typeof thing === 'number'
}

function toNumber(str) {
  return +str
}

function isStringNumber(str) {
  return !isNaN(str)
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  return String(Number(a) + Number(b))
}

function addStringsOrNumbers(a, b) {
  if (typeof a == 'string' || typeof b == 'string') {
    return addStrings(a, b)
  }
  return a + b
}

function isEmail(str) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(str)
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
  let commas = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ',') {
      commas++
    }
  }

  if (commas == 0) {
    return false
  } else if (commas == 1) {
    return true
  } else {
    return commas
  }
}

function splitStringByCommas(str) {
  const newArray = str.split(',')
  return newArray
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
