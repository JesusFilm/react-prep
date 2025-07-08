function find(arr, searchDetails) {
  const key = Object.keys(searchDetails)[0]
  const value = searchDetails[key]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i]
    }
  }
  return
}

module.exports = find
