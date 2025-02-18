/**
 * Finds the first object in an array that matches a specified key-value pair.
 *
 * The function extracts the first key-value pair from the given `searchDetails` object and
 * searches through the `arr` array of objects for the first element whose property (matching the key)
 * equals the extracted value. If no matching object is found, it returns `undefined`.
 *
 * @param {Object[]} arr - The array of objects to search within.
 * @param {Object} searchDetails - An object containing search criteria as a key-value pair; only the first key-value pair is used.
 * @returns {Object|undefined} The first object that satisfies the search criteria, or `undefined` if no such object exists.
 *
 * @example
 * const contacts = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 25 }
 * ];
 * const result = find(contacts, { name: 'Bob' });
 * // result is { name: 'Bob', age: 25 }
 */
function find(arr, searchDetails) {
  // console.log(searchDetails)
  const [key, value] = Object.entries(searchDetails)[0]
  return arr.filter((contactDetails) => contactDetails[key] === value)[0]
}

module.exports = find
