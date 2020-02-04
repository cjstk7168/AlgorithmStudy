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
  for (let [priority, city] of cities.entries()) {
    console.log(cache);
    if (city in cache) {
      cost += 1;
      cache[city] = priority + 1;
    } else {
      if (Object.keys(cache).length === cacheSize) {
        key = getKeyOfMinValue(cache);
        delete cache[extractedKey];
      }
      cache[city] = priority;
      cost += 5;
    }
  }
  return cost;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA"
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul"
  ])
);
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome"
  ])
);
