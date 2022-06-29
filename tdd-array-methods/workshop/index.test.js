/////////////////////////////////

//////TEST ONE ///////////

/////////////////////////////////

test("filter function returns array ", () => {
  const actual = filter([], () => {})
  equal(Array.isArray(actual), true)
})

test("Tests if the first element in array passes the test", () => {
  const actual = filter(["apple"], (word) => word.length > 2)
  const expected = [true]
  equal(actual[0], expected[0])
})

test("Tests if two element in array passes the test", () => {
  const actual = filter(["apple", "elephant"], (word) => word.length > 6)
  const expected = [false, true]

  equal(actual[0], expected[0])
  equal(actual[1], expected[1])
})

test("Tests if multiple array elements pass provided test", () => {
  const wordsArray = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ]
  const actual = filter(wordsArray, (word) => word.length > 5)
  const expected = [false, false, false, true, true, true]

  equal(actual.length, expected.length)
  equal(actual[0], expected[0])
})
