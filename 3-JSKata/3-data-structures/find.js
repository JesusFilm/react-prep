function find(arr, searchDetails) {
  searchKey = Object.keys(searchDetails)[0]
  return arr.find((obj) => obj[searchKey] == searchDetails[searchKey])
}

module.exports = find
