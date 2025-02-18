/**
 * Returns the type of the provided value.
 *
 * This function uses the JavaScript `typeof` operator to determine and return
 * the type of the given argument.
 *
 * @param {*} thing - The value whose type is to be determined.
 * @returns {string} The type of the provided value.
 *
 * @example
 * // returns "number"
 * getType(42);
 *
 * @example
 * // returns "string"
 * getType("hello");
 */
function getType(thing) {
  return typeof thing
}

/**
 * Checks if the provided value is of type number.
 *
 * This function determines whether the input is a number by using the getType utility.
 * It returns true if the type of the input is strictly 'number', and false otherwise.
 *
 * @param {*} thing - The value to check.
 * @returns {boolean} True if the type of the given value is 'number', otherwise false.
 *
 * @example
 * isNumber(123);       // returns true
 * isNumber('123');     // returns false
 */
function isNumber(thing) {
  // console.log(getType(thing) === Number)
  // console.log(thing, getType(thing), getType(thing) === 'number')
  return getType(thing) === 'number'
}

/**
 * Converts the provided string to a number.
 *
 * This function takes a string input and attempts to convert it into a numeric value using the built-in Number constructor. If the string does not represent a valid number, the function returns NaN.
 *
 * @param {string} str - The string that should represent a numeric value.
 * @returns {number} The numeric value parsed from the string, or NaN if the conversion is unsuccessful.
 *
 * @example
 * // Returns 123
 * toNumber("123");
 *
 * @example
 * // Returns NaN
 * toNumber("abc");
 */
function toNumber(str) {
  return Number(str)
}

/**
 * Determines whether the provided string can be converted to a valid number.
 *
 * The function converts the input string to a number using the Number constructor
 * and then checks whether the result is not NaN. It returns true if the conversion
 * yields a valid number, and false otherwise.
 *
 * @param {string} str - The string to evaluate for numeric conversion.
 * @returns {boolean} True if the string represents a valid number, false otherwise.
 *
 * @example
 * // returns true
 * isStringNumber("42");
 *
 * @example
 * // returns false
 * isStringNumber("hello");
 */
function isStringNumber(str) {
  return !isNaN(Number(str))
}

/**
 * Adds two values using the JavaScript addition operator.
 *
 * If both inputs are numbers, it returns their numerical sum.
 * If either input is a string, it returns the concatenated result as a string.
 *
 * @param {(number|string)} a - The first operand; can be a number or a string.
 * @param {(number|string)} b - The second operand; can be a number or a string.
 * @returns {(number|string)} The sum of the two values, either as a number or a concatenated string.
 *
 * @example
 * // returns 3
 * add(1, 2);
 *
 * @example
 * // returns "12"
 * add("1", 2);
 */
function add(a, b) {
  return a + b
}

/**
 * Adds two string representations of numbers.
 *
 * This function converts both input values to numbers using the Number constructor,
 * sums them, and returns the result as a string. It expects the inputs to be strings
 * that represent valid numbers. If an input cannot be converted to a valid number,
 * the resulting sum will be NaN and its string representation ("NaN") will be returned.
 *
 * @param {string} a - The first string representing a number.
 * @param {string} b - The second string representing a number.
 * @returns {string} The sum of the two numbers as a string.
 *
 * @example
 * // returns "7"
 * addStrings("3", "4");
 *
 * @example
 * // returns "NaN" because "foo" cannot be converted to a number
 * addStrings("foo", "4");
 */
function addStrings(a, b) {
  // console.log(typeof a, typeof b)
  return String(Number(a) + Number(b))
}

/**
 * Adds two values after converting them to numbers and returns the sum.
 * If either input is a string, the result is returned as a string.
 *
 * This function converts both inputs to numbers using the Number constructor,
 * sums them, and then checks if any of the original inputs were strings. If so,
 * the numeric sum is converted back to a string.
 *
 * @param {(string|number)} a - The first value, which can be a string or a number.
 * @param {(string|number)} b - The second value, which can be a string or a number.
 * @returns {(string|number)} The sum of `a` and `b` as a number unless either input is a string, in which case the sum is returned as a string.
 *
 * @example
 * // Returns "15" because 5 is provided as a string.
 * addStringsOrNumbers("5", 10);
 *
 * @example
 * // Returns 15 because both operands are numbers.
 * addStringsOrNumbers(5, 10);
 */
function addStringsOrNumbers(a, b) {
  let res = Number(a) + Number(b)
  return getType(a) === 'string' || getType(b) === 'string' ? String(res) : res
}

/**
 * Determines if the input string follows a basic email format by checking for the presence
 * of "@" and ".com".
 *
 * Note: This function performs a minimal email validation and does not cover all standard email rules.
 *
 * @param {string} str - The string to evaluate as an email.
 * @returns {boolean} True if the string contains both "@" and ".com"; otherwise, false.
 */
function isEmail(str) {
  // console.log(str)
  return str.includes('@') && str.includes('.com')
}

/**
 * Counts the number of elements in an array that satisfy a given predicate.
 *
 * This function applies the provided predicate function to each element in the
 * array and returns the count of elements for which the predicate returns true.
 *
 * @param {Array} array - The array of elements to be filtered.
 * @param {Function} fn - The predicate function to test each element.
 * @returns {number} The count of elements in the array that satisfy the predicate.
 *
 * @example
 * const isPositive = num => num > 0;
 * const count = countIf([-3, 0, 1, 5, -2], isPositive); // returns 2
 */
function countIf(array, fn) {
  return array.filter(fn).length
}

/**
 * Determines the comma composition within a string.
 *
 * <p>
 * This function counts the commas in the input string and returns different types based on the count:
 * - Returns a boolean true if there is exactly one comma.
 * - Returns the actual number (a number greater than 1) if there are multiple commas.
 * - Returns false if there are no commas.
 * </p>
 *
 * @param {string} str - The string to analyze.
 * @returns {boolean|number} True if exactly one comma is found; the number of commas if more than one; false if none.
 *
 * @example
 * // Returns true because there is exactly one comma.
 * filterStringsWithCommas("apple, banana");
 *
 * @example
 * // Returns 2 because there are two commas.
 * filterStringsWithCommas("apple, banana, cherry");
 *
 * @example
 * // Returns false because there are no commas.
 * filterStringsWithCommas("apple banana cherry");
 */
function filterStringsWithCommas(str) {
  let numComma = str.split(',').length - 1
  return numComma > 1 ? numComma : numComma === 1
}

/**
 * Splits the provided string into an array of substrings using commas as delimiters.
 *
 * This function takes a string input and returns an array containing the substrings that are
 * separated by commas. If the input string does not contain any commas, the returned array will
 * include the original string as its sole element.
 *
 * @param {string} str - The string to split by commas.
 * @returns {string[]} An array of substrings obtained by splitting the input string.
 *
 * @example
 * // returns ['one', 'two', 'three']
 * splitStringByCommas('one,two,three');
 */
function splitStringByCommas(str) {
  return str.split(',')
}

module.exports = {
  getType,
  isNumber,
  toNumber,
  isStringNumber,
  add,
  addStrings,
  addStringsOrNumbers,
  isEmail,
  countIf,
  filterStringsWithCommas,
  splitStringByCommas,
}
