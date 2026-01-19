function getValue(obj, key) {
  let keys = Object.keys(obj)
  for (i of keys) {
    if (i == key) {
      return obj[i]
    }
  }
}

module.exports = getValue
