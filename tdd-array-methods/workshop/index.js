/////////////////////////////////

//////FUNCTION ONE ///////////

/////////////////////////////////

function filter(array, callback) {
  const filteredArray = []

  for (let i = 0; i < array.length; i++) {
    const testFn = callback(array[i])
    filteredArray.push(testFn)
  }

  return filteredArray
}
