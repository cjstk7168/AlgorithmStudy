const sugar = n => {
  const MIN = 3,
    MAX = 5,
    LIMIT = Math.ceil(n / MAX);
  let count = 0,
    i = 0;

  // 1. 5kg 한번, 3kg 한번 뺄 수 있는 최솟값을 구하고
  if (n < MIN + MAX) {
    // 2. 3의 배수, 5의 배수를 제외한 나머지는 -1 리턴
    return n % MIN === 0 ? n / MIN : n % MAX === 0 ? n / MAX : -1;
  }

  // 최소 5를 한번 이상 뺐음, 나머지는 5보다 작음
  // 나머지 1 ? 4 - 3 = 1 === (5+)4 === 9
  // 나머지 2 ? 5 - 3 = 2 === (5+)5 === 10
  // 나머지 4 ? 7 - 3 = 4 === (5+)7 === 12

  // 3. 제일 큰 5kg 봉지로 배달하는 게 최소 배송이므로 최소 개수만큼 반복
  while (i < LIMIT) {
    switch (n > 0) {
      case n >= MAX:
        n -= MAX;
        break;
      case n >= MIN:
        count = count + (n % MIN === 0 ? 0 : n % MIN);
        break;
    }

    count++;
    i++;
  }

  console.log(count);
  return count;
};

sugar(18);
sugar(4);
sugar(6);
sugar(9);
sugar(11);