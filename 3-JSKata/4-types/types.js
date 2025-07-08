function getBoolean() {
  return true
}
function getFunction() {
  return function () {}
}
function getNull() {
  return null
}
function getNumber() {
  return 1
}
function getObject() {
  return {}
}
function getString() {
  return 'a'
}

module.exports = {
  getBoolean,
  getFunction,
  getNull,
  getNumber,
  getObject,
  getString,
}
