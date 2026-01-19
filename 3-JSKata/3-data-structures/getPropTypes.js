function getPropTypes(obj) {
  result = []
  keys = Object.keys(obj)
  for (i = 0; i < Object.keys(obj).length; i++) {
    result.push(typeof obj[keys[i]])
  }
  return result
}

module.exports = getPropTypes