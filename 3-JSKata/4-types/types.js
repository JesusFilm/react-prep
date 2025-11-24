function getBoolean() {
  return true
}

function getFunction() {
  return function () {
    return
  }
}

function getNull() {
  return null
}

function getNumber() {
  return 1
}

function getObject() {
  return { 1: 1, 2: 2 }
}

function getString() {
  return 'hi'
}

module.exports = {
  getBoolean,
  getFunction,
  getNull,
  getNumber,
  getObject,
  getString,
}
