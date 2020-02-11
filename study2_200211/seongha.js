const sugar = (n) => {
  const MIN = 3, MAX = 5, LIMIT = Math.ceil(n/MAX);
  let count = 0;

  // 1. 5kg 한번, 3kg 한번 뺄 수 있는 최솟값을 구하고
  if ( n < MIN+MAX ) {
    // 2. 3의 배수, 5의 배수를 제외한 나머지는 -1 리턴
    return (n%MIN === 0) ? n/MIN : (n%MAX === 0) ? n/MAX : -1;
  }

  // 최소 5를 한번 이상 뺐음, 나머지는 5보다 작음
  // 나머지 1 ? 4 - 3 = 1 === (5+)4 === 9
  // 나머지 2 ? 5 - 3 = 2 === (5+)5 === 10
  // 나머지 4 ? 7 - 3 = 4 === (5+)7 === 12

  // 3. 5kg 봉지로 배달하는 게 최소 개수이므로 최소 개수만큼 반복
  for (let i = 0; i < LIMIT; i++) {
    if (n >= MAX) {
      // 4. n 값이 5보다 클때 -5kg를 뺀다
      n -= MAX;
    } else if (n >= MIN) {
      // 6. n 은 5보단 작지만 3보다 같거나 작은 경우 나머지가 4, 3인 경우
      count++;
      return count = count + (n%MIN === 0 ? 0 : n%MIN);
    } else {
      return count = count + n;
    }

    count++;
  }

  console.log(count);
  return count;
};

sugar(18);
sugar(4);
sugar(6);
sugar(9);
sugar(11);
