// 1. 팩토리얼

function fac(num) {
    if(1<num) {
      return num * fac(num-1);
    }
    return 1;
  }
  // 출력
  console.log(fac(5));
  console.log(fac(10));
  
  
  
  
  // 2. 달팽이 알고리즘
  
  var arr = new Array(
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5)
  ); // 이차원 배열 생성
  
  var limit = 5; // 이동할 횟수
  var i = 0; // y열 초기 값
  var j = -1; // x열 처음시작 시 0으로 지정하기 위함
  var delta = 1; // 이동방향 처음에는 오른쪽으로
  var num = 1;
  
  while (true) {
    var p;
    // 왼쪽 오른쪽 (이 for문에서는 j값만 바뀐다.)
    for (p = 0; p < limit; p++) { // p가 2보다 작으면 1을 더한다. p=0 1 2 3 4
      j = j + delta; // j=(-1)+1, j=0 
      arr[i][j] = num; // [0, 0] 
      //console.log(i, j, num); // 0 0 1
      num++; // 2
    }
  
    limit--; // 4
    //console.log('limet : ' + limit); // limet : 4
    if (limit < 0) break; // -1이면 종료
    // 위 아래 (이 for문에서는 i값만 바뀐다.)
    for (p = 0; p < limit; p++) { // p가 2보다 작으면 1을 더한다. p=0 1 2 3
      i = i + delta; //i=0+1, i=1
      arr[i][j] = num; //[1, 4]
      //console.log(i, j, num, '.'); //1 4 6
      num++; //7
    }
    // 양수 <-> 음수 변환
    delta = delta * -1; //delta : (-1)*(-1)=1
  }
  
  // 출력
  for(p = 0; p < arr.length; p++) {
    console.log(arr[p]);
  }