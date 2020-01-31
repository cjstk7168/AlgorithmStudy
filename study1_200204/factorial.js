
// 시간복잡도 O(n-1);
function factorial(n){
  let total = 1;
  for(let m = n; m > 1; m--){
    total*=m;
  };
  return total;
}
// recursive
// 시간 복잡도 O(n);
function factorial2(n){
  if(n > 1){
    return n * factorial2(n-1);
  }else{
    return 1;
  }
}
// Joke..
// 시간 복잡도 O(1)
function factorial3(n){
  if(n > 1){
    return `${n}*${n-1}!`;
  }
  return `null`;
}
console.log(factorial(10));
console.log(factorial2(10));
console.log(factorial3(10));