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

function isStringNumber(str) {}

function add(a, b) {}

function addStrings(a, b) {}

function addStringsOrNumbers(a, b) {}

function isEmail(str) {}

function countIf(array, fn) {}

function filterStringsWithCommas(str) {}

function splitStringByCommas(str) {}

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
