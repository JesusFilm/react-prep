// callsFunction
function callsFunction(fn) {
  return fn()
}

// callsProperty
function callsProperty(obj) {
  return obj.increment(obj)
}

// filter
function filter(arr, fn) {
  return arr.filter(fn)
}

// find
function find(arr, fn) {
  return arr.find(fn)
}

// map
function map(arr, fn) {
  return arr.map(fn)
}

module.exports = {
  callsFunction,
  callsProperty,
  filter,
  find,
  map
}
