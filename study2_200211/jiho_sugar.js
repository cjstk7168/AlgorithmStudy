const solution = n => {
  max = parseInt(n / 5);
  i = max;
  while (i >= 0) {
    remain = n - i * 5;
    if (remain % 3 === 0) {
      return i + parseInt(remain / 3);
    }
    i -= 1;
  }
  return -1;
};

console.log(solution(18));
