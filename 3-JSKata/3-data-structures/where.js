function where(arr, searchDetails) {
  let arrFiltered = []

  for (const key in searchDetails) {
    arr = arr.filter((element) => element[key] === searchDetails[key])
  }
  return arr
}

module.exports = where
