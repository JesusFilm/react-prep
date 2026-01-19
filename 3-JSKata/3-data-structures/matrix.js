function getMatrix(n) {
  column = []
  row = []
  for (i = 0; i < n; i++) {
    row.push(0)
  }
  for (j = 0; j < n; j++) {
    column.push(row)
  }
  console.log(column)
  return column
}

function updateMatrix(matrix, coords, value) {
  const a = coords[0]
  const b = coords[1]
  matrix[a][b] = value
  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
