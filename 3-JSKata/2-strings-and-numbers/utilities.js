function getType(thing) {
  return typeof thing
}

function isNumber(thing) {
  console.log(typeof thing)
  if (typeof thing == 'number') {
    return true
  } else {
    return false
  }
}

function toNumber(str) {
  return parseInt(str)
}

function isStringNumber(str) {
  return !isNaN(str)
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  return String(parseInt(a) + parseInt(b))
}

function addStringsOrNumbers(a, b) {
  console.log(typeof a, typeof b)
  let aNum = a
  let bNum = b
  if (typeof aNum != 'number') {
    aNum = parseInt(aNum)
  }
  if (typeof bNum != 'number') {
    bNum = parseInt(bNum)
  }

  if (typeof a == 'string' || typeof b == 'string') {
    output = String(aNum + bNum)
  } else {
    output = aNum + bNum
  }
  return output
}

function isEmail(str) {
  console.log(str)
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '@' && i > 0 && i < str.length - 1) {
      return true
    }
  }
  return false
}

function countIf(array, fn) {
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      counter += 1
    }
  }
  return counter
}

function filterStringsWithCommas(str) {
  let index = str.indexOf(',')
  if (index > 0) {
    return true
  } else {
    return false
  }
}

function splitStringByCommas(str) {
  let output = []
  let remaining = str
  while (remaining.indexOf(',') >= 0) {
    let index = remaining.indexOf(',')
    output.push(remaining.slice(0, index))
    remaining = remaining.slice(index + 1)
  }
  output.push(remaining)

  return output
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
