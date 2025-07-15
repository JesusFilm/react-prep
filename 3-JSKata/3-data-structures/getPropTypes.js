function getPropTypes(obj) {
  const values = Object.values(obj)
  return values.map((value) => { return typeof value})
}

module.exports = getPropTypes
