function callsFunction(argFunc) {
  argFunc()
}

function callsProperty(argObject) {
  argObject.increment()
}

function map(arrOperands, modifierFunc) {
  let arrMapped = []
  for (let i = 0; i < arrOperands.length; i++) {
    arrMapped.push(modifierFunc(arrOperands[i]))
  }
  return arrMapped
}

function filter(arrOperands, filterFunc) {
  let arrFiltered = []
  for (let i = 0; i < arrOperands.length; i++) {
    if (filterFunc(arrOperands[i])) arrFiltered.push(arrOperands[i])
  }
  return arrFiltered
}

function find(arrOperands, findFunc) {
  for (let i = 0; i < arrOperands.length; i++) {
    if (findFunc(arrOperands[i])) return arrOperands[i]
  }
}

module.exports = {
  callsFunction,
  callsProperty,
  map,
  filter,
  find,
}
