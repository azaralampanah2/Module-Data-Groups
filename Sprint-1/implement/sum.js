function sum(elements) {
  let sum1 = 0;
  if (elements.every((Element) => typeof Element != "number")) {
    //if all the elemnts in the array are non-numerical it will add up the ASCII value of all characters

    for (let element of elements) {
      for (i = 0; i < element.length; i++) {
        sum1 += element.charCodeAt(i);
      }
    }
    return sum1;
  }

  for (let element of elements) {
    if (typeof element === "number") {
      sum1 += element;
    }
  }
  return sum1;
}

//console.log(sum([1,2,3,"bhk"]));
module.exports = sum;
