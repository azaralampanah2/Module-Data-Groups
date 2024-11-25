function contains(mainObject, char) {
  for (const key of Object.keys(mainObject)) {
    if (key.includes(char)) {
      return true;
    } else return false;
  }
  if (Object.keys(mainObject).length == 0 || typeof mainObject != "object")
    return false;
}


//console.log(contains({a:1 , b:2},"f"));

module.exports = contains;
