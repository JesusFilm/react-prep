function where(arr, searchDetails) {
  let newArr = []
  const searchKey = Object.keys(searchDetails)

  for (obj of arr) {
    let match = true

    for (i in searchKey) {
      if (obj[searchKey[i]] != searchDetails[searchKey[i]]) {
        match = false
      }
    }

    if (match) {
      newArr.push(obj)
    }
  }
  console.log(newArr)
  return newArr
}

module.exports = where
