function getPropTypes(obj) {
  let output = []
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  for (let i = 0; i < keys.length; i++) {
    output.push(typeof values[i])
  }
  return output
}

module.exports = getPropTypes
