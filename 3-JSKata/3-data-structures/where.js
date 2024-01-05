function where(arr, searchDetails) {
  return arr.filter((item) => {
    return Object.keys(searchDetails).every(
      (key) => item[key] === searchDetails[key]
    )
  })
}

module.exports = where

/*    wip version 
  for (let i = 0; i < arr.length; i++) {
    for (let j in arr[i]) {
      if (arr[i][j] == searchDetails[j]) {
        return [arr[i]]
      }
    }
  }
  return false
*/
