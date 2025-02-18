/**
 * Returns the boolean value true.
 *
 * @returns {boolean} The boolean value true.
 */
function getBoolean() {
  return true
}

/**
 * Returns null.
 *
 * This function does not accept any arguments and always returns the JavaScript null value.
 *
 * @returns {null} The null value.
 */
function getNull() {
  return null
}

/**
 * Returns the number 0.
 *
 * This function simply returns the numeric literal 0.
 *
 * @returns {number} The number 0.
 */
function getNumber() {
  return 0
}

/**
 * Returns an empty object.
 *
 * This function returns an empty plain JavaScript object. It takes no parameters.
 *
 * @returns {Object} An empty object.
 */
function getObject() {
  return {}
}

/**
 * Returns an empty string.
 *
 * This function provides a default empty string value which can be used as a placeholder
 * or default value in various contexts.
 *
 * @returns {string} An empty string.
 */
function getString() {
  return ''
}

/**
 * Returns a function that logs a greeting message to the console.
 *
 * When the returned function is invoked, it outputs the message "Hi, I am a function!" using console.log.
 *
 * @returns {Function} A function that logs a greeting message when executed.
 */
function getFunction() {
  return () => console.log('Hi, I am a function!')
}

module.exports = {
  getBoolean,
  getNull,
  getNumber,
  getObject,
  getString,
  getFunction,
}
