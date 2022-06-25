// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name
}

/////////////////////////////////

//searchParamsToObject Function//

/////////////////////////////////

function searchParamsToObject(string) {
  const newObj = {}

  const paramsArray = string.split("&")
  //console.log(paramsArray)

  for (const entry of paramsArray) {
    const pairArray = entry.split("=")
    const key = pairArray[0]
    const value = pairArray[1]
    newObj[key] = value
  }

  return newObj
}

searchParamsToObject("name=joe&email=hello@joelindie.com")
//{name: 'joe', email: 'hello@joelindie.com'}
