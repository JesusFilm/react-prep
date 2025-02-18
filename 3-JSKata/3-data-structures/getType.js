/**
 * Returns the type of the provided input using the JavaScript `typeof` operator.
 *
 * @param {*} thing - The value for which the type is determined.
 * @return {string} A string representing the type of the provided value.
 *
 * @example
 * // returns "number"
 * getType(123);
 *
 * @example
 * // returns "string"
 * getType("hello");
 */
function getType(thing) {
  return typeof thing
}

module.exports = getType
