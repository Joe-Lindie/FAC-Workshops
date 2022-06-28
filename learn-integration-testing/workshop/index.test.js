////////////////////////////////////////

///// Challenge  One ////////

////////////////////////////////////////

test("Test addition parameter of calculate() function ", () => {
  equal(calculate(2, "+", 2), 4)
  equal(calculate(5.75, "+", 7.25), 13)
})

test("Test subtraction parameter of calculate() function ", () => {
  equal(calculate(12, "-", 6), 6)
  equal(calculate(150, "-", 73), 77)
})

test("Test multiplication parameter of calculate() function ", () => {
  equal(calculate(10, "*", 20), 200)
  equal(calculate(1500, "*", 80), 120000)
})
//  When you test a decimal number,
//  how many decimal places do you need to use?

test("Test division parameter of calculate() function ", () => {
  equal(calculate(200, "/", 20), 10)
  equal(calculate(4000, "/", 400), 10)
})

test("Test for negative values of calculate() function ", () => {
  equal(calculate(10, "-", 20), -10)
  equal(calculate(-30, "+", 10), -20)
})

test("Test for string values passed to calculate() function ", () => {
  equal(calculate("20", "-", "5"), 15)
})

////////////////////////////////////////

///// Challenge  Two ////////

////////////////////////////////////////

test("Tests users input and updates the page", () => {
  const a = document.querySelector("input[name='a']")
  const signInput = document.querySelector("select")
  const b = document.querySelector("input[name='b']")

  a.value = "10"
  signInput.value = "*"
  b.value = "20"

  const submitButton = document.querySelector("button[type='submit']")
  submitButton.click()

  const result = document.querySelector("#result")
  equal(result.textContent, "200")

  result.textContent = ""
})
