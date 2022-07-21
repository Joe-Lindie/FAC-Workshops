// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

// function makeUrl(name) {
//   return "https://pokeapi.co/api/v2/" + name
// }

/////////////////////////////////

//searchParamsToObject Function//

/////////////////////////////////

function searchParamsToObject(string) {
  const newObj = {};

  const paramsArray = string.split("&");
  //console.log(paramsArray)

  for (const entry of paramsArray) {
    const pairArray = entry.split("=");
    const key = pairArray[0];
    const value = pairArray[1];
    newObj[key] = value;
  }

  return newObj;
}

// searchParamsToObject("name=joe&email=hello@joelindie.com")

/////////////////////////////////

//Is Leap Year Function//

/////////////////////////////////

// 1) If a year is divisible by 400.  ---> Is Leap Year
// 2) If a year is divisible by 4 AND a year is not divisible by 100 ---> Is Leap Year
// Else is NOT leap year

// function isLeapYear(year) {
//   if (year < 0) {
//     return "You can not enter a negative year"
//   } else if (typeof year === "string") {
//     return "Please enter a number"
//   } else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     return `${year} IS a leap year!`
//   } else {
//     return `${year} is NOT leap year!`
//   }
// }

// isLeapYear("2010")
