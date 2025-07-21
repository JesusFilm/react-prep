function getPropTypes(obj) {
  let propTypes = []
  for (const i in obj) {
    propTypes.push(typeof obj[i])
  }
  return propTypes
}

module.exports = getPropTypes
