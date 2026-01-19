function where(arr, searchDetails) {
result = []
  for (i = 0; i < arr.length; i ++) {
    let obj = arr[i];
    const objKeys = Object.keys(obj)
    const searchKeys = Object.keys(searchDetails)
    let matches = 0
    for (j = 0; j < objKeys.length; j++) {
      for (k = 0; k < searchKeys.length; k++) {
        if (objKeys[j] == searchKeys[k]) {
          if (obj[objKeys[j]] == searchDetails[searchKeys[k]]) {
            matches ++
          }
        }
      }
    }
    if (matches == searchKeys.length) {
        result.push(obj)
    }
  } 
  return result
}



module.exports = where
