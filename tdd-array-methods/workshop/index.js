/////////////////////////////////

//////FUNCTION ONE ///////////

/////////////////////////////////

// function filter(array, callback) {
//   const filteredArray = []

//   for (let i = 0; i < array.length; i++) {
//     const testFn = callback(array[i])

//     if (testFn === true) {
//       filteredArray.push(testFn)
//     }
//   }
//   return filteredArray
// }

/////////////////////////////////

//////FUNCTION TWO ///////////

/////////////////////////////////

function every(array, callback) {
  let answer = true

  for (let i = 0; i < array.length; i++) {
    answer = callback(array[i])
    if (!answer) return false
  }

  return answer
}
