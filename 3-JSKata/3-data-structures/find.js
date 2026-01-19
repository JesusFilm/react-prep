function find(arr, searchDetails) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < Object.keys(arr[i]).length; j++) {
      testKey = Object.keys(arr[i])[j]
      searchKey = Object.keys(searchDetails)[0]
      if ((testKey == searchKey) && (arr[i][testKey] == searchDetails[searchKey])) {
        return arr[i]
      }
    }
  }
}

module.exports = find
