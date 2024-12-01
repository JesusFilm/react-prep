function getPropTypes(obj) {
  let arrTypes = []
  for (const [key, value] of Object.entries(obj)) {
    arrTypes.push(typeof value)
  }
  return arrTypes
}

module.exports = getPropTypes
