function findMax(elements) {
  let maxNumber = elements[0];
  if (elements.length === 0) {
    return "-Infinity";
  }
  

  for (let i = 1; i < elements.length; i++) {
    if (maxNumber < elements[i]) {
      maxNumber = elements[i];
    }
  }
  return maxNumber;


 
}
console.log(findMax([]));
module.exports = findMax;
