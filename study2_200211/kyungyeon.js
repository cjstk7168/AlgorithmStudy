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

const question2 = (cacheSize, S) => {
  console.time();
  let point = 0;
  let cache = {};
  /*
  1. 캐시 크기만큼 item 생성
  {
    item: 1,
    item: 2,
    item: 3,
    ...
  }
   */

  for (const item of S) {
    if (cacheSize === 0) {
      point += 5;
      continue;
    }

    const str = item.toLowerCase();
    if (cache[str]) {
      const deleteIndex = Object.keys(cache).findIndex(item => item === str);
      delete cache[str];
      Object.keys(cache).forEach(item => cache[item] < deleteIndex && cache[item]++);
      cache[str] = 1;

      point += 1;
      continue;
    }

    const deleteIndex = Object.keys(cache).find(item => cache[item] === cacheSize);
    if (deleteIndex) {
      delete cache[deleteIndex];
    }

    Object.keys(cache).forEach(item => cache[item]++);

    cache[str] = 1;
    point += 5;

  }

  console.timeEnd();
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

/*
결과값
46
21
60
48
16
25
 */