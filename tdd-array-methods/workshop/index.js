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

// function every(array, callback) {
//   let answer = true

//   for (let i = 0; i < array.length; i++) {
//     answer = callback(array[i])
//     if (!answer) return false
//   }

//   return answer
// }

/////////////////////////////////

//////FUNCTION THREE ///////////

/////////////////////////////////

// function some(array, callback) {
//   let answer = true

//   for (let i = 0; i < array.length; i++) {
//     answer = callback(array[i])
//     if (answer) break
//   }

//   return answer
// }

/////////////////////////////////

//////FUNCTION FOUR ///////////

/////////////////////////////////

// function find(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     const answer = callback(array[i])

//     if (answer === true) {
//       return array[i]
//     }
//   }

//   return undefined
// }

/////////////////////////////////

//////FUNCTION FIVE ///////////

/////////////////////////////////

function reduce(array, callback, initialValue) {
  initialValue = initialValue

  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i])
  }

  return initialValue
}
