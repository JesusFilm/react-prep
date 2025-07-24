function find(arr, searchDetails) {
  key = Object.keys(searchDetails)[0]
  value = Object.values(searchDetails)[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty(key)) {
      if (arr[i][key] == value) {
        return arr[i]
      }
    }
  }
}

module.exports = find
