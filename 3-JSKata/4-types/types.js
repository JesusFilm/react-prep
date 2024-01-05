function getBoolean() {
  return true
}

function getFunction() {
  const exampleFunction = function () {
    console.log('This is a function')
  }

  return exampleFunction
}

function getNull() {
  return null
}

function getNumber() {
  return 2
}

function getObject() {
  return { a: 1 }
}

function getString() {
  return 'true'
}
module.exports = {
  getBoolean,
  getFunction,
  getNull,
  getNumber,
  getObject,
  getString,
}
