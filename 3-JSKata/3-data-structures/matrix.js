function getMatrix(n) {
  copy = []
  for (let i = 0; i < n; i++) {
    copy.push(0)
  }
  output = []
  for (let i = 0; i < n; i++) {
    output.push(copy)
  }
  return output
}

function updateMatrix(matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value
  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
