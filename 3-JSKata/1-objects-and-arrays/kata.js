/**
 * Objects, keys/properties and values
 */

// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
function getGreeting(name) {
  return 'Hello ' + name
}

// ageOneYear should return a new object with an `age` property 1 greater
// than the `age` property of `obj`
function ageOneYear(obj) {
  const obj2 = { ...obj }
  obj2.age = obj2.age + 1
  return obj2
}

// makeObject should return an object that looks like this:
// (but using the arguments passed to the function)
// {
//   key: value
// }
function makeObject(key, value) {
  return {
    [key]: value,
  }
}

// getPropertyValue should return the value of the
// property contained in the `key` of `obj`
function getPropertyValue(obj, key) {
  return obj[key]
}

// addName should return a copy of `obj` with the addition of a `name`
// property that has the value of the `name` argument
// Tip: consider the object literal spread syntax
function addName(obj, name) {
  let obj2 = { ...obj }
  obj2.name = name
  return obj2
}

// deleteProperty should return a new copy of `obj` without the property name
// that matches the `key` parameter
// Tip: consider JavaScript's `delete` operator
function deleteProperty(obj, key) {
  let obj2 = { ...obj }
  delete obj2[key]
  return obj2
}

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function returnErrorIfFalsy(val) {
  if (!val) {
    return Error('Oh no, an error!')
  }
  return
}

// keys should return an array of the object's property names (keys)
// For example, given { foo: 1, bar: 2 } it would return ['foo', 'bar']
function getKeys(obj) {
  const keys = []
  for (let i in obj) {
    keys.push(i)
  }
  return keys
}

// getValues should return an array of the object's own values
// For example, given { foo: 1, bar: 2 } it would return [1, 2]
function getValues(obj) {
  const values = []
  for (let key in obj) {
    values.push(obj[key])
  }
  return values
}

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of
// `item`. For example, makeArrayOfItem('foo', 2) would return:
// ['foo', 'foo']
function makeArrayOfItem(item, length) {
  let ar = []
  for (let i = 0; i < length; i++) {
    ar.push(item)
  }
  return ar
}

// makeArrayOfItems should return an array containing all arguments passed to it
// Tip: consider JavaScript's Rest parameters
function makeArrayOfItems() {
  let ar = []
  for (let i = 0; i < arguments.length; i++) {
    ar.push(arguments[i])
  }
  return ar
}

// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
// Tip: there is an array function that makes this straightforward
function hasItem(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true
    }
  }
  return false
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex(arr, idx) {
  if (idx < 0 || idx >= arr.length) {
    return Error()
  }
  return arr[idx]
}

// replaceItemAtIndex should return a copy of `arr` with
// the element at `idx` replaced with `item`
// Tip: consider the array literal spread syntax
function replaceItemAtIndex(arr, idx, item) {
  let arr2 = [...arr]
  arr2[idx] = item
  return arr2
}

// insertItemAtIndex should return a copy of `arr` with `item` inserted at
// `idx` without overwriting any array values (the array should get longer)
function insertItemAtIndex(arr, item, idx) {
  let arr2 = [...arr]
  arr2.splice(idx, 0, item)
  return arr2
}

// deleteItemAtIndex should return a copy of `arr` without
// the element at `idx` (the array should get shorter).
function deleteItemAtIndex(arr, idx) {
  let arr2 = [...arr]
  arr2.splice(idx, 1)
  return arr2
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem(arr, item) {
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != item) {
      arr2.push(arr[i])
    }
  }
  return arr2
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2 }
function zipObject(keys, values) {
  let obj = {}
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i]
  }
  return obj
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given {foo: 1, bar: 2} it would return
// [['foo', 1], ['bar', 2]]
function unzipObject(obj) {
  let arr = []
  for (let key in obj) {
    arr.push([key, obj[key]])
  }
  return arr
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [{a: 1}, {b: 2, c: 3}] and {b: 2}
// it will return:
//   {b: 2, c: 3}
function findOneByProperty(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i]
    let match = true
    for (let key in search) {
      if (obj[key] !== search[key]) {
        match = false
        break
      }
    }
    if (match) {
      return obj
    }
  }
  return
}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll(arr, search) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i]
    let match = true
    for (let key in search) {
      if (obj[key] !== search[key]) {
        match = false
        break
      }
    }
    if (match) {
      results.push(obj)
    }
  }
  return results
}

module.exports = {
  addName,
  ageOneYear,
  deleteItem,
  deleteItemAtIndex,
  deleteProperty,
  getGreeting,
  getItemAtIndex,
  getKeys,
  getPropertyValue,
  getValues,
  findOneByProperty,
  findAll,
  hasItem,
  insertItemAtIndex,
  makeArrayOfItem,
  makeArrayOfItems,
  makeObject,
  replaceItemAtIndex,
  returnErrorIfFalsy,
  unzipObject,
  zipObject,
}
