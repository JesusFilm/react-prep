/**
 * Returns an array of type names for each property value in the given object.
 *
 * This function iterates over the object's entries using `Object.entries` and determines
 * the type of each value using the `typeof` operator. The resulting types are collected 
 * into an array, which is then returned.
 *
 * @param {Object} obj - The object whose property types are to be determined.
 * @returns {string[]} An array of strings representing the type of each property value.
 *
 * @example
 * const sample = { a: 42, b: "hello", c: true };
 * console.log(getPropTypes(sample)); // ["number", "string", "boolean"]
 */
function getPropTypes(obj) {
  let arrTypes = []
  for (const [key, value] of Object.entries(obj)) {
    arrTypes.push(typeof value)
  }
  return arrTypes
}

module.exports = getPropTypes
