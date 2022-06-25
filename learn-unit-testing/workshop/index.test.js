/////////////////////////////////

///////// TEST ONE ////////////

/////////////////////////////////

// test("makeURL() has correct pokemon name on poke API", () => {
//   const actual = makeUrl("pikachu")
//   const expected = "https://pokeapi.co/api/v2/pikachu"

//   const actualOne = makeUrl("pikachu")
//   const expectedOne = "https://pokeapi.co/api/v2/pikachu"

//   equal(actual, expected)
//   equal(actualOne, expectedOne)
// })

/////////////////////////////////

///////// TEST TWO ////////////

/////////////////////////////////

test("searchParamsToObject() takes form-encoded string and returns object", () => {
  const actual = searchParamsToObject("name=joe&email=hello@joelindie.com")
  const expected = { name: "joe", email: "hello@joelindie.com" }

  equal(actual.name, expected.name)
})

/////////////////////////////////

///////// TEST THREE ////////////

/////////////////////////////////
