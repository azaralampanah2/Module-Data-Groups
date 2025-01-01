

function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  queryString = decodeURIComponent(queryString);

  const keyValuePairs = queryString.split("&");
  console.log(keyValuePairs);
  for (const pair of keyValuePairs) {
    const index1 = pair.indexOf("=");
    console.log(index1);
    const key = pair.slice(0, index1);
    const value = pair.slice(index1 + 1);
    console.log(value);
    console.log(key);
    queryParams[key] = value;
  }

  return queryParams;
}

console.log(parseQueryString("a%25b=c%26d"));
module.exports = parseQueryString;





