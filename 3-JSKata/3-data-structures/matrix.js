function getMatrix(n) {
  const matrix = []
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    matrix.push(row)
  }
  return matrix
}

function updateMatrix(matrix, coords, value) {
  let row = coords[0]
  let col = coords[1]
  matrix[row][col] = value
  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
