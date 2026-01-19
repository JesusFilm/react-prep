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
  return {age: obj.age + 1};
}

// makeObject should return an object that looks like this:
// (but using the arguments passed to the function)
// {
//   key: value
// }
function makeObject(key, value) {
  obj = {[key]: value};
  return obj;
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
  let result = {
     ... obj,
    name: name}
  return result
}

// deleteProperty should return a new copy of `obj` without the property name
// that matches the `key` parameter
// Tip: consider JavaScript's `delete` operator
function deleteProperty(obj, key) {
  let result = {
    ... obj,
  }
  delete result[key]
  return result
}

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function returnErrorIfFalsy(val) {
  if (val == false) {
    return Error("Oh no, an error!") 
    }
}

// keys should return an array of the object's property names (keys)
// For example, given { foo: 1, bar: 2 } it would return ['foo', 'bar']
function getKeys(obj) {
  result = []
  for (key in obj) {
    result.push(key)
  }
  return result
}

// getValues should return an array of the object's own values
// For example, given { foo: 1, bar: 2 } it would return [1, 2]
function getValues(obj) {
  console.log(obj)
  result = [];
  for (key in obj) {
    result.push(obj[key])
  }
  return result
}

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of
// `item`. For example, makeArrayOfItem('foo', 2) would return:
// ['foo', 'foo']
function makeArrayOfItem(item, length) {
  result = []
  console.log(item, length)
  for (i = 0; i < length; i++) {
    result.push(item)
  }
  console.log(result)
  return result
}

// makeArrayOfItems should return an array containing all arguments passed to it
// Tip: consider JavaScript's Rest parameters
function makeArrayOfItems(...theArgs) {
  return theArgs
}  

// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
// Tip: there is an array function that makes this straightforward
function hasItem(arr, item) {
  return arr.includes(item)
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex(arr, idx) {
  if (idx in arr) {
    return arr[idx]
  } else {
    return Error()
  }
}

// replaceItemAtIndex should return a copy of `arr` with
// the element at `idx` replaced with `item`
// Tip: consider the array literal spread syntax
function replaceItemAtIndex(arr, idx, item) {
  console.log("arr:", arr)
  console.log("idx:", idx)
  console.log("item:", item)
  let result = [...arr]
  result[idx] = item
  console.log("result:", result)
  return result
}

// insertItemAtIndex should return a copy of `arr` with `item` inserted at
// `idx` without overwriting any array values (the array should get longer)
function insertItemAtIndex(arr, item, idx) {
  let result = [...arr];
  result.splice(idx, 0, item)
  return result
}

// deleteItemAtIndex should return a copy of `arr` without
// the element at `idx` (the array should get shorter).
function deleteItemAtIndex(arr, idx) {
  let result = [...arr];
  result.splice(idx, 1)
  return result
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem(arr, item) {
  result = [...arr]
  for (i in result) {
    if (result.includes(item)) {
    let idx = result.indexOf(item)
    result.splice(idx, 1)
    }
  }
  console.log(result)
  return result
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2 }
function zipObject(keys, values) {
  result = {};
  for (i in keys) {
    result[keys[i]] = values[i]
  }
  return result
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given {foo: 1, bar: 2} it would return
// [['foo', 1], ['bar', 2]]
function unzipObject(obj) {
  result = [];
  for (i = 0; i < Object.keys(obj).length; i++) {
    keys = Object.keys(obj)
    result.push([keys[i], obj[keys[i]]])
  }
  return result
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [{a: 1}, {b: 2, c: 3}] and {b: 2}
// it will return:
//   {b: 2, c: 3}
function findOneByProperty(arr, search) {
  for (i = 0; i < arr.length; i++) {
    let obj = arr[i];
    for (j = 0; j < Object.keys(obj).length; j++) {
      let keys = Object.keys(obj);
      let searchKey = Object.keys(search)[0];
      if ((keys[j] == searchKey) && (obj[keys[j]] == search[searchKey])) {
        return obj;
      }
    }
  }
}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll(arr, search) {
  result = []
  for (i = 0; i < arr.length; i++) {
    let obj = arr[i];
    for (j = 0; j < Object.keys(obj).length; j++) {
      let keys = Object.keys(obj);
      let searchKey = Object.keys(search)[0];
      if ((keys[j] == searchKey) && (obj[keys[j]] == search[searchKey])) {
         result.push(obj)
      }
    }
  }
  return result
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
