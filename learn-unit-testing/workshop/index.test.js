/////////////////////////////////

///////// TEST ONE ////////////

/////////////////////////////////

// test("makeURL() has correct pokemon name on poke API", () => {
//   const names = ["eevee", "pikachu", "something"]

//   names.map((name) => {
//     const actual = makeUrl(name)
//     const expected = `https://pokeapi.co/api/v2/${name}`

//     equal(actual, expected)
//   })
// })

/////////////////////////////////

///////// TEST TWO ////////////

/////////////////////////////////

test("searchParamsToObject() takes form-encoded string and returns object", () => {
  const actual = searchParamsToObject("name=joe&email=hello@joelindie.com")
  const expected = { name: "joe", email: "hello@joelindie.com" }
  //console.log(typeof JSON.stringify(expected))

  equal(actual.name, expected.name)
  equal(actual.email, expected.email)
})

/////////////////////////////////

///////// TEST THREE ////////////

/////////////////////////////////

// test("isLeapYear(): Checks for valid leap years!", () => {
//   equal(isLeapYear(2020), "2020 IS a leap year!")
//   equal(isLeapYear(2000), "2000 IS a leap year!")
//   equal(isLeapYear(1960), "1960 IS a leap year!")
// })

// test("isLeapYear(): Checks for invalid leap years!", () => {
//   notEqual(isLeapYear(2019), "2019 IS a leap year!")
//   equal(isLeapYear(1987), "1987 is NOT leap year!")
//   equal(isLeapYear(1905), "1905 is NOT leap year!")
// })

// test("isLeapYear(): Checks for negative years!", () => {
//   equal(isLeapYear(-1930), "You can not enter a negative year")
//   equal(isLeapYear(-1980), "You can not enter a negative year")
// })

// test("isLeapYear(): Checks for user entering strings", () => {
//   equal(isLeapYear("1"), "Please enter a number")
//   equal(isLeapYear("Heyyy"), "Please enter a number")
// })
