function find(arr, searchDetails) {
  return arr.find((element) =>
    Object.entries(searchDetails).every(
      ([key, value]) => element[key] === value
    ))
}

module.exports = find
