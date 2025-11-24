function getMatrix(n) {
  let newMatrix = []
  for (let i = 0; i < n; i++) {
    const row = Array(n).fill(0)
    newMatrix.push(row)
  }
  return newMatrix
}

function updateMatrix(matrix, coords, value) {
  const x = coords[0]
  const y = coords[1]
  matrix[x][y] = value
  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
