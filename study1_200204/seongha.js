// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

// 입력 : 첫째 줄에 정수 N(0 ≤ N ≤ 12)가 주어진다.
// 출력 : 첫째 줄에 N!을 출력한다.

// 출력 예제
// 입력 : 10, 출력 : 3628800
// 입력 : 5, 출력 : 120
function factorial(num) {
  const maxNum = num;
  let result = 1;

  for (let i = 1; i <= maxNum; i++) {
    result = result * i;
  }

  console.log(result);
  return result;
}

factorial(10);
factorial(5);

// 입력: 5
// [ 1, 2, 3, 4, 5 ]
// [ 16, 17, 18, 19, 6 ]
// [ 15, 24, 25, 20, 7 ]
// [ 14, 23, 22, 21, 8 ]
// [ 13, 12, 11, 10, 9 ]

// N x N 의 배열크기를 입력받아 달팽이 알고리즘을 작성하시오.
function snail(n) {
  const arr = Array.from(Array(n), () => Array());
  let value = 1, delta = 1, x = 0, y = -1, limit = n;

  while(limit > 0) {
    for(let i = 0; i < limit; i++){
      y = y + delta;
      arr[x][y] = value;
      value++;
    }

    limit--;

    for(let j = 0; j < limit; j++){
      x = x + delta;
      arr[x][y] = value;
      value++;
    }

    delta = -delta;
  }

  console.log(arr);
  return arr;
}

snail(5);
snail(6);
