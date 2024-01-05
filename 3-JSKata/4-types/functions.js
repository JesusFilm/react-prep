function callsFunction(func) {
  func()
}

function callsProperty(obj) {
  obj.increment()
}

function filter(arr, func) {
  return arr.filter(func)
}

function find(arr, func) {
  return arr.find(func)
}

function map(arr, func) {
  return arr.map(func)
}
module.exports = {
  callsFunction,
  callsProperty,
  filter,
  find,
  map,
}
