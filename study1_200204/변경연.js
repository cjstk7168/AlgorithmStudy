const answer1 = (n, sum = 1) => {
  if (n === 0) {
    return sum;
  }

  sum = n * sum;
  return answer1(n-1, sum);
};

console.log('answer1-1', answer1(5));
console.log('answer1-2', answer1(10));