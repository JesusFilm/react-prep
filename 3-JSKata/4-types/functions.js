function callsFunction(func) {
  func()
}

function callsProperty(obj) {
  obj.increment()
}

function filter(arr, fn) {
  output = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      output.push(arr[i])
    }
  }
  return output
}

function find(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return arr[i]
    }
  }
}

function map(arr, fn) {
  output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(fn(arr[i]))
  }
  return output
}

module.exports = {
  callsFunction,
  callsProperty,
  filter,
  find,
  map,
}
