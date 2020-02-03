const answer1 = (n) => {
  if (n > 1) {
    return n * answer1(n-1);
  }

  return 1;
};

const answer2 = arrSize => {
  const arr = [[], []];
  for (let i = 0; i < arrSize; i++) {
    arr[i] = new Array(arrSize).fill(0);
  }

  let direction = 1;
  let col = -1, row = 0; // 최초 시작값을 0, 0 맞추기 위해 col는 -1에서 시작
  let maxLimitCount = arrSize;
  let num = 1;

  // set data
  while(true) {
    // 달팽이를 돌다가 더이상 돌 공간이 없다면 종료
    if (maxLimitCount === 0) {
      break;
    }

    // 오른쪽, 왼쪽 방향
    for (let i = 0; i < maxLimitCount; i++) {
      col += direction;
      arr[row][col] = num;
      num++;
    }

    maxLimitCount--;

    // 위, 아래 방향
    for (let i = 0; i < maxLimitCount; i++) {
      row += direction;
      arr[row][col] = num;
      num ++;
    }

    // 오른쪽+아래 , 왼쪽+위 한번 실행됐다면 방향 바꾸기
    direction *= -1;
  }


  // output
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  return '';
};

console.log('answer1-1', answer1(5));
console.log('answer1-2', answer1(10));

console.log('answer2-1', answer2(5));
console.log('answer2-2', answer2(6));