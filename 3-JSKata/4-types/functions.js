/**
 * Invokes the provided function.
 *
 * This function takes a single function argument and calls it with no parameters.
 *
 * @param {Function} argFunc - The function to be invoked.
 * @returns {void}
 */
function callsFunction(argFunc) {
  argFunc()
}

/**
 * Invokes the 'increment' method on the provided object.
 *
 * This function expects the input object to have an 'increment' method. No validation is performed,
 * so ensure that the method exists to avoid runtime errors.
 *
 * @param {Object} argObject - An object with an 'increment' method.
 */
function callsProperty(argObject) {
  argObject.increment()
}

/**
 * Applies a modifier function to each element in the input array and returns a new array with the modified elements.
 *
 * This function iterates over the provided array, applies the modifier function to each element, and collects the results 
 * in a new array which is subsequently returned.
 *
 * @param {Array} arrOperands - The array of elements to be modified.
 * @param {Function} modifierFunc - The function to apply to each element. It should accept one argument and return the modified value.
 * @returns {Array} A new array containing the results of applying the modifier function to each element of the input array.
 */
function map(arrOperands, modifierFunc) {
  let arrMapped = []
  for (let i = 0; i < arrOperands.length; i++) {
    arrMapped.push(modifierFunc(arrOperands[i]))
  }
  return arrMapped
}

/**
 * Filters an array by applying a provided filter function to each element.
 *
 * This function iterates over the given array and includes an element in the returned array
 * if the filter function returns a truthy value when applied to that element.
 *
 * @param {Array} arrOperands - The array of elements to be filtered.
 * @param {function(any): boolean} filterFunc - A function that evaluates each element. It should return true
 *   if the element meets the desired condition, and false otherwise.
 * @returns {Array} A new array containing only the elements for which filterFunc returns true.
 */
function filter(arrOperands, filterFunc) {
  let arrFiltered = []
  for (let i = 0; i < arrOperands.length; i++) {
    if (filterFunc(arrOperands[i])) arrFiltered.push(arrOperands[i])
  }
  return arrFiltered
}

/**
 * Finds and returns the first element in the array that satisfies the provided predicate function.
 *
 * @param {Array} arrOperands - The array of elements to search through.
 * @param {Function} findFunc - A predicate function that tests each element. It should return a boolean value indicating whether the element meets the condition.
 * @returns {*} The first element in the array that returns true when passed to `findFunc`. Returns `undefined` if no such element is found.
 *
 * @example
 * const numbers = [1, 3, 7, 8, 10];
 * const isEven = num => num % 2 === 0;
 * console.log(find(numbers, isEven)); // Output: 8
 */
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
