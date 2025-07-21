function getPropTypes(obj) {
  let propTypes = []
  for (i in obj) {
    propTypes.push(typeof obj[i])
  }
  return propTypes
}

module.exports = getPropTypes
