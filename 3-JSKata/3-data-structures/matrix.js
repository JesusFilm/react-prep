function getMatrix(n) {
  return new Array(n).fill(new Array(n).fill(0))
}

function updateMatrix(matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value
  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
