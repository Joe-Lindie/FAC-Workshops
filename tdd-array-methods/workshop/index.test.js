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

// test("Tests Every() function for multiple elements", () => {
//   const numbers = [1, 30, 79, 29, 10, 13]

//   const actual = every(numbers, (num) => num < 40)
//   const expected = false

//   equal(actual, expected)
// })

/////////////////////////////////

//////TEST THREE ///////////

/////////////////////////////////

// test("Tests one element in Some() function", () => {
//   const actual = some([2], (num) => num % 2 === 0)
//   const expected = true

//   equal(actual, expected)
// })

// test("Tests Some() function for multiple elements", () => {
//   const actual = some([2, 4], (num) => num % 2 === 0)
//   const expected = true

//   equal(actual, expected)
// })

// test("Tests Some() fucntion with mixed even/odd nums", () => {
//   const array = [1, 2, 3, 4, 5]

//   const actual = some(array, (num) => num % 2 === 0)
//   const expected = true

//   equal(actual, expected)
// })

// test("Test Some() function for failed cases only", () => {
//   const array = [1, 3, 5, 7, 9]

//   const actual = some(array, (num) => num % 2 === 0)
//   const expected = false

//   equal(actual, expected)
// })

/////////////////////////////////

//////TEST FOUR ///////////

/////////////////////////////////

// test("Tests Find() function for one element in array", () => {
//   const actual = find([2], (num) => num > 1)
//   const expected = 2

//   equal(actual, expected)
// })

// test("Tests Find() function for second element in array", () => {
//   const actual = find([2, 3], (num) => num > 2)
//   const expected = 3

//   equal(actual, expected)
// })

// test("Test Find() Function for undefined values", () => {
//   const actual = find([1, 2, 3], (num) => num > 4)
//   const expected = undefined

//   equal(actual, expected)
// })

/////////////////////////////////

//////TEST FIVE ///////////

/////////////////////////////////

// test reduce()
test("reduce() when items are numbers - should return a number as result", () => {
  const result = reduce([1, 2, 3, 4], (sum, item) => sum + item, 0)
  equal(result, 10)
})

test("reduce() when initial value is set to something other than 0", () => {
  const result = reduce([1, 2, 3, 4], (sum, item) => sum + item, 5)
  equal(result, 15)
})

test("reduce() when items are strings - should return a string as result", () => {
  const result = reduce(["a", "b", "c", "d"], (sum, item) => sum + item, "")
  equal(result, "abcd")
})

test("4 - reduce() when callback function is different operation", () => {
  const result = reduce([10, 5, 2], (sum, item) => sum - item, 0)
  equal(result, -17)
})

test("reduce() when items are negative numbers - should return a negative number as result", () => {
  const result = reduce([-1, -2, -3, -4], (sum, item) => sum + item, 0)
  equal(result, -10)
})

test("reduce() when items are within arrays - should return a string as result", () => {
  const result = reduce([[1], [23]], (sum, item) => sum + item, [])
  equal(result, "123")
})
