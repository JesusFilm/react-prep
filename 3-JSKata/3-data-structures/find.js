function find(arr, searchDetails) {
  for (let i = 0; i < arr.length; i++) {
    const currentObject = arr[i]
    for (let key in currentObject) {
      if (currentObject[key] == searchDetails[key]) {
        return currentObject
      }
    }
  }
  return false
}

module.exports = find
