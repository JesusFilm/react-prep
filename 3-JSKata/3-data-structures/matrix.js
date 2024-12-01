function getMatrix(n) {
  let arrMat = []

  for (let i = 0; i < n; i++) {
    arrMat.push(new Array(n).fill(0))
  }
  return arrMat
}

function updateMatrix(matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value

  return matrix
}

module.exports = {
  getMatrix,
  updateMatrix,
}
