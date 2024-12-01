function find(arr, searchDetails) {
  // console.log(searchDetails)
  const [key, value] = Object.entries(searchDetails)[0]
  return arr.filter((contactDetails) => contactDetails[key] === value)[0]
}

module.exports = find
