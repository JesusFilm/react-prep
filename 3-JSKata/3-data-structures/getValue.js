/**
 * Retrieves the value associated with the specified key from the given object.
 *
 * @param {Object} obj - The object from which to retrieve the value.
 * @param {(string|number|symbol)} key - The key whose associated value is to be returned.
 * @returns {*} The value corresponding to the key in the object, or undefined if the key does not exist.
 */
function getValue(obj, key) {
  return obj[key]
}

module.exports = getValue
