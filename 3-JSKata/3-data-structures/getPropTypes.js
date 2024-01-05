function getPropTypes(obj) {
  let newArray = []
  for (let i in obj) {
    //console.log(obj[i])
    newArray.push(typeof obj[i])
  }
  return newArray
}

module.exports = getPropTypes
