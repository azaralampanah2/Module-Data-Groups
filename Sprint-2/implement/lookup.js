

function createLookup(currencyCodes) {
  const createdObject = {};
  for (let i = 0; i < currencyCodes.length; i++) {
    const splitArray = currencyCodes[i].map((element) => [element]); // Splits each element into arrays
    const key = splitArray[0].join(); // Converts the first element to a string
    const value = splitArray[1].join(); // Converts the second element to a string
    createdObject[key] = value; // Adds key-value pair to the object
  }
  return createdObject;
}


//console.log(
  //createLookup([
   // ["US", "USD"],
    //["UK", "GB"],
  //])
//);

module.exports = createLookup;
