const getKeyOfMinValue = cache => {
  extractedKey = undefined;
  minValue = Infinity;
  for (let key in cache) {
    newValue = cache[key];
    if (newValue < minValue) {
      extractedKey = key;
      minValue = newValue;
    }
  }
  return extractedKey;
};

function solution(cacheSize, cities) {
  let cost = 0;
  cache = {};
  // O(N)
  for (let [priority, city] of cities.entries()) {
    city = city.toLowerCase();
    if (city in cache) {
      cost += 1;
      cache[city] = priority + 1;
    } else {
      if (Object.keys(cache).length === cacheSize) {
        // O(30)
        extractedKey = getKeyOfMinValue(cache);
        delete cache[extractedKey];
      }
      cache[city] = priority;
      cost += 5;
    }
  }
  return cost;
}

console.log(solution(1, ["jeju", "Jeju", "Jeju"]));
