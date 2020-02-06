//1. 팩토리얼
function fac(num) {
  if(1<num) {
    return num * fac(num-1);
  }
  return 1;
}
//출력
console.log(fac(10));
console.log(fac(5));


//2. 달팽이 알고리즘
