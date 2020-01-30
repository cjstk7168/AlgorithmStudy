const question1 = N => {
  if (N % 5 === 0) {
    return N / 5;
  }

  let count = 0;
  while(true) {
    if (N === 0) {
      break;
    }

    if (N < 3) {
      return -1;
    }

    if (N % 5 === 0) {
      return N / 5 + count;
    }

    N -= 3;
    count++;
  }

  return count;
};

const question2 = (cacheSize, STR) => {
  let point = 0;
  let cache = [];

  for (const item of STR) {
    if (cacheSize === 0) {
      point += 5;
      continue;
    }

    const str = item.toLowerCase();
    if (cache.includes(str)) {
      cache.slice(cache.indexOf(str), 1);
      cache = [str, ...cache];
      point += 1;
      continue;
    }

    if (cache.length < cacheSize) {
      cache.push(str);
      point += 5;
      continue;
    }

    if (cache.length >= cacheSize) {
      cache.pop();
    }

    cache = [str, ...cache];
    point += 5;
  }

  return point;
};

console.log('answer1', question1(18));
console.log('answer1', question1(4));
console.log('answer1', question1(6));
console.log('answer1', question1(9));
console.log('answer1', question1(11));

console.log('answer2', question2(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']));
console.log('answer2', question2(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']));
console.log('answer2', question2(2, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']));
console.log('answer2', question2(5, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']));
console.log('answer2', question2(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']));
console.log('answer2', question2(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']));