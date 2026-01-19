function getType(thing) {
    return typeof thing
}

function isNumber(thing) {
  return typeof thing == "number"
}

function toNumber(str) {
  return Number(str)
}

function isStringNumber(str) {
  return Boolean(Number(str))
}

function add(a, b) {
  return a + b
}

function addStrings(a, b) {
  result = Number(a) + Number(b)
  return String(result)
}

function addStringsOrNumbers(a, b) {
  let sum = 0
  if ((typeof a == "number") && (typeof b == "number")) {
    sum = a + b
  } else if ((typeof a == "string") && (typeof b == "number")) {
    sum = String(Number(a) + b)
  } else if ((typeof b == "string") && (typeof a == "number")){
    sum = String(a + Number(b))
  } else if ((typeof a == "string") && (typeof b == "string"))
    sum = String(Number(a) + Number(b))
  return sum
}

function isEmail(str) {
  const idx = str.indexOf("@")
  const charAfterAmp = str[idx + 1]
  return ((str.includes("@", ".com")) && (typeof charAfterAmp == "number" || typeof charAfterAmp == "string"))
}

function countIf(array, fn) {
  let count = 0
  for (i of array) {
    if (fn(i)) {
      count++
    }
  }
  return count
}

function filterStringsWithCommas(str) {
  return str.includes(",")
}

function splitStringByCommas(str) {
  arr = []
  let strInArr = ""
  for (char of str) {
    if (char != ",") {
      strInArr += char
    } else {
      arr.push(strInArr)
      strInArr = ""
    }
  }
  arr.push(strInArr)
  return arr
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