function getMatrix(n) {
  let matrix = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    matrix.push(row)
  }

  return matrix
}

function updateMatrix(matrix, coords, value) {
  newMatrix = matrix
  newMatrix[coords[0]][coords[1]] = value
  console.log(newMatrix)
  return newMatrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
