function where(arr, searchDetails) {
  output = []

  keys = Object.keys(searchDetails)
  values = Object.values(searchDetails)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty(keys[0])) {
      let fit = true
      for (let j = 0; j < keys.length; j++) {
        if (!arr[i].hasOwnProperty(keys[j])) {
          fit = false
        } else {
          if (arr[i][keys[j]] != values[j]) {
            fit = false
          }
        }
      }
      if (fit) {
        output.push(arr[i])
      }
    }
  }
  return output
}

module.exports = where
