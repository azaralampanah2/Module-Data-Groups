function tally(mainArray) {
  const frequencyObject = {};
  if (typeof mainArray != "object") {
    return "Error! Input must be an array";
  }
  for (element of mainArray) {
    if (frequencyObject[element]) {
      frequencyObject[element] += 1;
    } else frequencyObject[element] = 1;
  }
  return frequencyObject;
}
console.log(tally("aghdgdg"));
module.exports = tally;
