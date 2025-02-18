/**
 * Creates a square n x n matrix filled with zeros.
 *
 * This function initializes an empty array and fills it by iterating n times. For each iteration,
 * it adds a new array of length n, with all elements set to 0, to form a two-dimensional array.
 *
 * @param {number} n - The size of the matrix (both number of rows and columns).
 * @returns {number[][]} A two-dimensional array representing an n x n matrix filled with zeros.
 */
function getMatrix(n) {
  let arrMat = []

  for (let i = 0; i < n; i++) {
    arrMat.push(new Array(n).fill(0))
  }
  return arrMat
}

/**
 * Updates a specific element in a two-dimensional matrix.
 *
 * This function modifies the provided matrix by setting the element at the position
 * indicated by the `coords` array (where the first element is the row index and the second is the column index)
 * to the specified `value`. The updated matrix is returned.
 *
 * @param {Array<Array<*>>} matrix - The matrix to be updated.
 * @param {Array<number>} coords - An array with two numbers representing the [row, column] indices.
 * @param {*} value - The new value to assign to the matrix element at the given coordinates.
 * @returns {Array<Array<*>>} The matrix after the update.
 *
 * @example
 * const matrix = [
 *   [0, 0, 0],
 *   [0, 0, 0],
 *   [0, 0, 0]
 * ];
 * const updatedMatrix = updateMatrix(matrix, [1, 2], 5);
 * // updatedMatrix is now:
 * // [
 * //   [0, 0, 0],
 * //   [0, 0, 5],
 * //   [0, 0, 0]
 * // ]
 */
function updateMatrix(matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value

  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
