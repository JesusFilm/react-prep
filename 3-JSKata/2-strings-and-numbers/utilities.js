function getType(thing) {
  return typeof thing
}

function isNumber(thing) {
  if (typeof thing === 'number') {
    return true
  } else {
    return false
  }
}

function toNumber(str) {
  return Number(str)
}

function isStringNumber(str) {
  if (isNaN(str)) {
    return false
  } else {
    return true
  }
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  let num1 = parseInt(a)
  let num2 = parseInt(b)
  let num3 = num1 + num2

  return String(num3)
}

function addStringsOrNumbers(a, b) {
  let num1 = parseInt(a)
  let num2 = parseInt(b)
  let num3 = num1 + num2

  if (isNumber(a) && isNumber(b)) {
    return num3
  } else {
    return String(num3)
  }
}

function isEmail(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === '@' &&
      str[i] === '.' &&
      str[i] === 'c' &&
      str[i] === 'o' &&
      str[i] === 'm'
    ) {
      return true
    } else {
      return false
    }
  }
}

function countIf(array, fn) {
  let count = 0

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) != false) {
      count += 1
    }
  }
  return count
}

function filterStringsWithCommas(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ',') {
      count += 1
    }
  }

  if (count > 0) {
    return true
  } else {
    return false
  }
}

function splitStringByCommas(str) {
  let index
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ',') {
      index = str[i]
    }
  }

  newStr = str.split(index)

  return newStr
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
