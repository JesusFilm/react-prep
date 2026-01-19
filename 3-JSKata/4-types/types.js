// getBoolean
function getBoolean(a) {
  return Boolean(a)
}

// getFunction
function getFunction() {
  const sum = (a,b) => { 
  a + b}
  return sum
}

// getNull
function getNull() {
  return null
}

// getNumber
function getNumber() {
  num = 1
  return num
}

// getObject
function getObject() {
  obj = {}
  return obj
}

// getString
function getString() {
  str = ""
  return str
}

module.exports = {
  getBoolean,
  getFunction,
  getNull,
  getNumber,
  getObject,
  getString
}