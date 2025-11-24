function callsFunction(func) {
  func()
}

function callsProperty(obj) {
  obj.increment()
}

function filter(arr, func) {
  const elements = []
  for (i in arr) {
    if (func(arr[i])) {
      elements.push(arr[i])
    }
  }
  return elements
}

function find(arr, func) {
  for (i in arr) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
}

function map(arr, func) {
  const elements = []
  for (i in arr) {
    elements.push(func(arr[i]))
  }
  return elements
}

module.exports = {
  callsFunction,
  callsProperty,
  filter,
  find,
  map,
}
