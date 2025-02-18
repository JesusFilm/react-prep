/**
 * Filters an array of objects based on provided key-value criteria.
 *
 * This function iterates over each key in the `searchDetails` object and 
 * successively filters the input array `arr`, ensuring that each remaining 
 * object has a property matching the corresponding value in `searchDetails`. 
 * Note that the filtering is cumulative; the returned array contains only 
 * objects that satisfy all given criteria.
 *
 * @param {Array<Object>} arr - The array of objects to filter.
 * @param {Object} searchDetails - An object containing key-value pairs used for filtering.
 *                                 Each property specifies a condition that objects in 
 *                                 the array must satisfy.
 * @returns {Array<Object>} A new array containing only the objects that match 
 *                          all key-value pairs in `searchDetails`.
 *
 * @example
 * const data = [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 30 },
 *   { name: 'Alice', age: 30 }
 * ];
 *
 * // Filter for objects where name is 'Alice' and age is 25.
 * const filtered = where(data, { name: 'Alice', age: 25 });
 * // filtered: [{ name: 'Alice', age: 25 }]
 */
function where(arr, searchDetails) {
  let arrFiltered = []

  for (const key in searchDetails) {
    arr = arr.filter((element) => element[key] === searchDetails[key])
  }
  return arr
}

module.exports = where
