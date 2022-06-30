/////////////////////////////////

//////TEST ONE ///////////

/////////////////////////////////

// test("filter function returns array ", () => {
//   const actual = filter([], () => {})
//   equal(Array.isArray(actual), true)
// })

// test("Tests if the first element in array passes the test", () => {
//   const actual = filter(["apple"], (word) => word.length > 2)
//   const expected = [true]
//   equal(actual[0], expected[0])
// })

// test("Tests if two element in array passes the test", () => {
//   const actual = filter(["apple", "elephant"], (word) => word.length > 4)
//   const expected = [true, true]

//   equal(actual[0], expected[0])
//   equal(actual[1], expected[1])
// })

// test("Tests all elements, and only receives the tests that pass", () => {
//   const actual = filter(["apple", "elephant"], (word) => word.length > 5)
//   const expected = [true]

//   equal(actual.length, expected.length)
// })

// test("Tests if multiple array elements pass provided test", () => {
//   const wordsArray = [
//     "spray",
//     "limit",
//     "elite",
//     "exuberant",
//     "destruction",
//     "present",
//   ]
//   const actual = filter(wordsArray, (word) => word.length > 5)
//   const expected = [true, true, true]

//   equal(actual.length, expected.length)
//   equal(actual[0], expected[0])
// })

/////////////////////////////////

//////TEST TWO ///////////

/////////////////////////////////

// test("Every() function returns array ", () => {
//   const actual = every([1], () => {})
//   equal(Array.isArray(actual), true)
// })

// test("Tests first element in Every() function", () => {
//   const actual = every([1], (num) => num > 1)
//   const expected = [false]

//   equal(actual[0], expected[0])
// })

// test("Tests two elements in Every() fuction", () => {
//   const actual = every([1, 2], (num) => num > 1)
//   const expected = [false, true]

//   equal(actual[0], expected[0])
//   equal(actual[1], expected[1])
// })

// test("Tests if Every() function returns false, stops executing", () => {
//   const actual = every([1, 2], (num) => num > 1)
//   const expected = false

//   equal(actual[0], expected[0])
// })

test("Tests Every() function for multiple elements", () => {
  const numbers = [1, 30, 79, 29, 10, 13]

  const actual = every(numbers, (num) => num < 40)
  const expected = false

  equal(actual, expected)
})
