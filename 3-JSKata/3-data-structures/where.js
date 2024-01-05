function where(arr, searchDetails) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    let isMatch = true
    for (let key in searchDetails) {
      if (searchDetails.hasOwnProperty(key)) {
        if (item[key] !== searchDetails[key]) {
          isMatch = false
          break
        }
      }
    }

    if (isMatch) {
      result.push(item)
    }
  }

  return result
}

module.exports = where
