/**
 * Objects, keys/properties and values
 */

// getGreeting should return a string containing
/**
 * Constructs a greeting message by concatenating "Hello " with the provided name.
 *
 * @param {string} name - The name to include in the greeting.
 * @returns {string} The greeting message.
 */
function getGreeting(name) {
  return 'Hello ' + name
}

// ageOneYear should return a new object with an `age` property 1 greater
/**
 * Increments the "age" property of the given object by one and returns a new object.
 *
 * This function creates a new object with the "age" property incremented by one while preserving
 * the "email" and "name" properties of the original object. The original object remains unchanged.
 *
 * @param {Object} obj - The object containing the properties to be updated.
 * @param {number} obj.age - The current age value.
 * @param {string} obj.email - The email address contained in the object.
 * @param {string} obj.name - The name contained in the object.
 * @return {Object} A new object with the updated "age", and original "email" and "name" properties.
 *
 * @example
 * const person = { age: 25, email: 'john@example.com', name: 'John Doe' };
 * const updatedPerson = ageOneYear(person);
 * console.log(updatedPerson); // { age: 26, email: 'john@example.com', name: 'John Doe' }
 */
function ageOneYear(obj) {
  const newObj = {
    age: obj.age + 1,
    email: obj.email,
    name: obj.name,
  }

  return newObj
}

// makeObject should return an object that looks like this:
// (but using the arguments passed to the function)
// {
//   key: value
/**
 * Creates an object with a single dynamically defined property.
 *
 * This function constructs and returns a new object that contains only one property.
 * The property's key is determined by the provided `key` parameter, and its value is set
 * to the `value` parameter.
 *
 * @param {string|number|symbol} key - The property key.
 * @param {*} value - The value to assign to the property.
 * @returns {Object} A new object with a property defined by the given key and value.
 */
function makeObject(key, value) {
  const obj = {
    [key]: value,
  }
  return obj
}

// getPropertyValue should return the value of the
/**
 * Retrieves the value associated with the specified key from the given object.
 *
 * @param {Object} obj - The object from which to retrieve the value.
 * @param {string} key - The key of the property to access.
 * @returns {*} The value corresponding to the key, or undefined if the key is not present in the object.
 */
function getPropertyValue(obj, key) {
  return obj[key]
}

// addName should return a copy of `obj` with the addition of a `name`
// property that has the value of the `name` argument
/**
 * Returns a new object with all properties of the input object and an added "name" property.
 *
 * This function creates a shallow copy of the given object and adds a "name" property set to the provided value using the object literal spread syntax. The original object remains unchanged.
 *
 * @param {Object} obj - The original object to which the name property will be added.
 * @param {string} name - The name string to be added as a property.
 * @returns {Object} A new object that includes all properties of the original object along with the new "name" property.
 */
function addName(obj, name) {
  return { ...obj, name: name }
}

// deleteProperty should return a new copy of `obj` without the property name
// that matches the `key` parameter
/**
 * Deletes a property from an object.
 *
 * This function uses JavaScript's `delete` operator to remove the property specified by `key`
 * from the provided object `obj`. The deletion is done in-place on the original object, which is then returned.
 *
 * @param {Object} obj - The object from which to delete the property.
 * @param {string} key - The key of the property to delete.
 * @returns {Object} The original object after the property has been removed.
 */
function deleteProperty(obj, key) {
  delete obj[key]
  return obj
}

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
/**
 * Returns an Error object if the provided value is falsy.
 *
 * This function checks whether the given value is falsy (e.g., false, 0, "", null, undefined, or NaN).
 * If it is, it returns a new Error object with the message "Oh no, an error!".
 * Otherwise, the function returns undefined.
 *
 * @param {*} val - The value to evaluate.
 * @returns {Error|undefined} A new Error object if val is falsy; otherwise undefined.
 *
 * @example
 * const error = returnErrorIfFalsy(0);
 * if (error) {
 *   console.error(error);
 * }
 */
function returnErrorIfFalsy(val) {
  if (!val) {
    return new Error('Oh no, an error!')
  }
}

// keys should return an array of the object's property names (keys)
/**
 * Retrieves the keys of the given object.
 *
 * This function extracts the enumerable property names of the provided object,
 * logs them to the console, and returns them as an array.
 *
 * @param {Object} obj - The object from which to extract keys.
 * @returns {string[]} An array of keys from the object.
 *
 * @example
 * // returns ['foo', 'bar']
 * getKeys({ foo: 1, bar: 2 });
 */
function getKeys(obj) {
  console.log(Object.keys(obj))
  return Object.keys(obj)
}

// getValues should return an array of the object's own values
/**
 * Extracts the values of an object's own enumerable properties.
 *
 * This function utilizes the built-in Object.values method to return an array of the provided object's values.
 *
 * @param {Object} obj - The object from which to extract values.
 * @returns {Array} An array containing the values of the object's own properties.
 *
 * @example
 * // returns [1, 2]
 * getValues({ foo: 1, bar: 2 });
 */
function getValues(obj) {
  return Object.values(obj)
}

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of
// `item`. For example, makeArrayOfItem('foo', 2) would return:
/**
 * Creates an array populated with the specified item repeated a given number of times.
 *
 * This function builds a new array by pushing the provided `item` into the array for the
 * specified `length`. It also logs the input parameters and the resulting array to the console.
 *
 * @param {*} item - The item to be repeated in the array.
 * @param {number} length - The number of times the item should appear in the array.
 * @returns {Array} An array filled with the provided item, repeated `length` times.
 */
function makeArrayOfItem(item, length) {
  let arr = []
  console.log(item, length)
  for (let i = 0; i < length; i++) {
    arr.push(item)
  }
  console.log(arr)
  return arr
}

// makeArrayOfItems should return an array containing all arguments passed to it
/**
 * Creates an array from a variable number of arguments.
 *
 * This function uses JavaScript's rest parameters to gather all provided arguments
 * and returns a new array containing them.
 *
 * @param {...*} arg - The arguments to include in the array.
 * @returns {Array<*>} An array containing all of the provided arguments.
 */
function makeArrayOfItems(...arg) {
  return [...arg]
}

// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
/**
 * Checks if an item exists in the given array.
 *
 * This function uses the Array.prototype.includes method to determine whether the
 * specified item is present in the array.
 *
 * @param {Array} arr - The array to search within.
 * @param {*} item - The item to look for in the array.
 * @returns {boolean} True if the item is found; otherwise, false.
 */
function hasItem(arr, item) {
  return arr.includes(item)
}

// getItemAtIndex should return arr[idx] but only if that index exists:
/**
 * Retrieves the element at the specified index from an array.
 *
 * This function returns the element at the provided index if the index is within the array's bounds.
 * If the index is out of bounds, it returns a new Error object.
 *
 * @param {Array} arr - The array from which to retrieve the element.
 * @param {number} idx - The index of the element to retrieve.
 * @returns {*} The element at the specified index, or an Error object if the index is invalid.
 *
 * @example
 * // Returns 3
 * getItemAtIndex([1, 2, 3, 4], 2);
 *
 * @example
 * // Returns an Error because the index is out of bounds
 * getItemAtIndex([1, 2, 3, 4], 4);
 */
function getItemAtIndex(arr, idx) {
  return idx < arr.length ? arr[idx] : new Error()
}

// replaceItemAtIndex should return a copy of `arr` with
// the element at `idx` replaced with `item`
/**
 * Replaces the item at a specified index in an array with a new value.
 *
 * This function modifies the original array by removing elements beginning at the 
 * given index and inserting the new item. It also logs the modified array to the console.
 * Note: The deletion count in the splice call is set as (idx + 1), which means it may 
 * remove more than one element depending on the provided index. Ensure that the index 
 * is set appropriately for the intended behavior.
 *
 * @param {Array} arr - The array to update.
 * @param {number} idx - The index at which the replacement should occur.
 * @param {*} item - The new item to insert at the specified index.
 * @returns {Array} The modified array after replacement.
 */
function replaceItemAtIndex(arr, idx, item) {
  arr.splice(idx, idx + 1, item)
  console.log(arr)
  return arr
}

// insertItemAtIndex should return a copy of `arr` with `item` inserted at
/**
 * Inserts an item into an array at the specified index without overwriting existing elements.
 * The original array is modified in place, and the updated array is logged to the console.
 *
 * @param {Array} arr - The array to modify.
 * @param {*} item - The item to be inserted.
 * @param {number} idx - The index at which the item should be inserted.
 * @returns {Array} The updated array with the new item inserted.
 */
function insertItemAtIndex(arr, item, idx) {
  arr.splice(idx, 0, item)
  console.log(arr)
  return arr
}

// deleteItemAtIndex should return a copy of `arr` without
/**
 * Removes the item at the specified index from the array.
 *
 * This function modifies the original array by removing the element at the given index using the splice method,
 * logs the updated array to the console, and returns the modified array.
 *
 * @param {Array} arr - The array from which an element will be removed.
 * @param {number} idx - The index of the element to remove (should be within the array bounds).
 * @return {Array} The modified array after removal of the element.
 *
 * @example
 * let numbers = [10, 20, 30, 40];
 * deleteItemAtIndex(numbers, 2);
 * // Console output: [10, 20, 40]
 * // numbers is now [10, 20, 40]
 */
function deleteItemAtIndex(arr, idx) {
  arr.splice(idx, 1)
  console.log(arr)
  return arr
}

/**
 * Removes all occurrences of the specified item from an array.
 *
 * This function uses the Array.prototype.filter method to create a new array that
 * excludes any element strictly equal to the provided `item`. The filtered array is
 * logged to the console before being returned.
 *
 * @param {Array} arr - The array from which to remove items.
 * @param {*} item - The item to remove from the array.
 * @returns {Array} A new array with every instance of `item` removed.
 */
function deleteItem(arr, item) {
  let arrFilter = arr.filter((e) => e !== item)
  console.log(arrFilter)
  return arrFilter
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
/**
 * Creates an object composed of key-value pairs from two arrays.
 *
 * This function iterates over the provided keys array and assigns each corresponding
 * element from the values array to the resulting object. If the values array is shorter
 * than the keys array, the remaining keys will be set to undefined.
 *
 * @param {Array} keys - An array of keys for the new object.
 * @param {Array} values - An array of values corresponding to the keys.
 * @returns {Object} An object mapping each key to its corresponding value.
 *
 * @example
 * const keys = ['foo', 'bar'];
 * const values = [1, 2];
 * const result = zipObject(keys, values);
 * // result is { foo: 1, bar: 2 }
 */
function zipObject(keys, values) {
  let obj = {}
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i]
  }
  return obj
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given {foo: 1, bar: 2} it would return
/**
 * Converts an object into an array of key-value pairs.
 *
 * This function iterates over the object's own enumerable properties and returns an array
 * where each element is a two-element array containing the key and its corresponding value.
 *
 * @param {Object} obj - The object to transform.
 * @returns {Array<Array<*>>} An array of key-value pairs.
 *
 * @example
 * // returns [['foo', 1], ['bar', 2]]
 * unzipObject({ foo: 1, bar: 2 });
 */
function unzipObject(obj) {
  let arr = []
  for (const key of Object.keys(obj)) {
    arr.push([key, obj[key]])
  }
  return arr
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [{a: 1}, {b: 2, c: 3}] and {b: 2}
// it will return:
/**
 * Finds and returns the first object in an array that matches a specified property.
 *
 * This function extracts the first key-value pair from the search object and returns the first
 * object in the array that has a property equal to the provided value.
 *
 * @param {Object[]} arr - The array of objects to search through.
 * @param {Object} search - An object containing a single key-value pair used as the search criteria.
 * @returns {(Object|undefined)} The first matching object if found; otherwise, undefined.
 */
function findOneByProperty(arr, search) {
  const [key, value] = Object.entries(search)[0]
  return arr.find((obj) => obj[key] === value)
}

// findAll should return an array containing all objects in `arr` that
/**
 * Finds and returns all objects within the provided array that match a specific property-value pair.
 *
 * This function extracts the first key-value pair from the search object and filters the input
 * array, returning a new array containing all objects where the value of the extracted key matches
 * the specified value. Only the first key-value pair of the search object is considered.
 *
 * @param {Object[]} arr - The array of objects to search through.
 * @param {Object} search - An object with a single key-value pair used as the search criteria.
 * @returns {Object[]} An array of objects from the input array that match the search criteria.
 */
function findAll(arr, search) {
  const [key, value] = Object.entries(search)[0]
  return arr.filter((obj) => obj[key] === value)
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
