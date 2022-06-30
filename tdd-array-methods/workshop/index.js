/////////////////////////////////

//////FUNCTION ONE ///////////

/////////////////////////////////

function filter(array, callback) {
  const filteredArray = []

  for (let i = 0; i < array.length; i++) {
    const testFn = callback(array[i])

    if (testFn === true) {
      filteredArray.push(testFn)
    }
  }
  console.log(filteredArray)
  return filteredArray
}

/////////////////////////////////

//////FUNCTION TWO ///////////

/////////////////////////////////
