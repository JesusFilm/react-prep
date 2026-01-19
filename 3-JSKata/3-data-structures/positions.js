function getFirst(arr) {
  return arr[0]
}

function getLast(arr) {
  idxOfLast = arr.length - 1
  return arr[idxOfLast]
}

module.exports = {
  getFirst,
  getLast,
}
