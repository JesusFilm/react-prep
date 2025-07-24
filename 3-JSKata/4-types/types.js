function getBoolean() {
  return true
}

function getFunction() {
  return function foo() {}
}

function getNull() {
  return null
}

function getNumber() {
  return 0
}

function getObject() {
  return (obj = {})
}

function getString() {
  return 'string'
}

module.exports = {
  getBoolean,
  getFunction,
  getNull,
  getNumber,
  getObject,
  getString,
}
