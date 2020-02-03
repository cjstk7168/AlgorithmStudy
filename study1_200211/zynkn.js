

function sugar(n){
  for(let i = Math.floor(n/5); i > 0; i--){
    // i는 5kg 설탕의 갯수
    let res = (n - (i*5)); // 5kg * i 를 뺀 나머지
    if( res % 3 === 0){
      return (i + (res / 3));
    }
  }
  // 5키로를 넣을 수 없다면, 
  if(n % 3 === 0){
    return n/3;
  }
  // 3키로도 넣을 수 없다면,
  return -1;

}

console.log(sugar(18));
console.log(sugar(4));
console.log(sugar(6));
console.log(sugar(9));
console.log(sugar(11));
console.log(sugar(20));
console.log(sugar(21));
console.log(sugar(99));