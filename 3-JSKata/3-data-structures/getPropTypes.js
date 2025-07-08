function getPropTypes(obj) {
  let arr = []
  for (let key in obj) {
    arr.push(typeof obj[key])
  }
  return arr
}

module.exports = getPropTypes
