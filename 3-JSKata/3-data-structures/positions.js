/**
 * Retrieves the first element from the provided array.
 *
 * This function returns the first element of the array by accessing the element at index 0.
 * If the array is empty, it will return `undefined`.
 *
 * @param {Array} arr - The array to retrieve the first element from.
 * @return {*} The first element of the array, or undefined if the array is empty.
 */
function getFirst(arr) {
  return arr[0]
}

/**
 * Returns the last element in an array.
 *
 * @param {Array} arr - The array from which to retrieve the last element.
 * @returns {*} The last element of the array, or undefined if the array is empty.
 */
function getLast(arr) {
  return arr[arr.length - 1]
}

module.exports = {
  getFirst,
  getLast,
}
