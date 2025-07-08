function callsFunction(f) {
  f()
}
function callsProperty(obj) {
  obj.increment()
}
function filter(arr, f) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}
function find(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      return arr[i]
    }
  }
}
function map(arr, f) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(f(arr[i]))
  }
  return result
}
module.exports = {
  callsFunction,
  callsProperty,
  filter,
  find,
  map,
}
