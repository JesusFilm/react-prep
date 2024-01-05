function getFirst(arr) {
  return arr[0]
}

function getLast(arr) {
  return arr[arr.length - 1] //'-1' because js is 0 based
}

module.exports = {
  getFirst,
  getLast,
}
