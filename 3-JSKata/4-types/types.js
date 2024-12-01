function getBoolean() {
  return true
}

function getNull() {
  return null
}

function getNumber() {
  return 0
}

function getObject() {
  return {}
}

function getString() {
  return ''
}

function getFunction() {
  return () => console.log('Hi, I am a function!')
}

module.exports = {
  getBoolean,
  getNull,
  getNumber,
  getObject,
  getString,
  getFunction,
}
