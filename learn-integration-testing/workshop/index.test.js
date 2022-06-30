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
  equal(calculate(4000, "/", 350), 11.428571428571429)
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
  const input_a = document.querySelector("#a")
  const signInput = document.querySelector("#sign")
  const input_b = document.querySelector("#b")
  const submitButton = document.querySelector("button")
  const result = document.querySelector("#result")

  input_a.value = "10"
  signInput.value = "*"
  input_b.value = "20"

  submitButton.click()

  equal(result.textContent, "200")

  result.textContent = ""
})
