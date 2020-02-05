// Q) factorial
//    0보다 크거나 같은 정수 N!을 출력하는 프로그램을 작성하시오.

// A1) for loop
function forloop(n) {
    var i, res = 1;
    for (i = 1; i <= n; i++) {
        res *= i
    }
    return res;
}
console.log(`forloop : ${forloop(5)}`); // 120
console.log(`forloop : ${forloop(10)}`); // 3628800

// A2) recursion function
function recursion(n) {
    if (n === 0) return 1;
    return n * recursion(n-1);
}
console.log(`recursion : ${recursion(5)}`); // 120
console.log(`recursion : ${recursion(10)}`); // 3628800


// Q) 달팽이 알고리즘
//    N x N 의 배열크기를 입력받아 달팽이 알고리즘을 작성하시오.

// A) 배열을 생성하여 인덱스에 좌표 부여 및 넘버링 (x, y, num)
//    진행 방향과 리스트의 깊이에 따른 방향값과 전진값 변경 (dir, count)
function snailArr(n){
    var i,
        x = 0,
        y = -1, // 첫 행은 y++ 이므로, 첫 좌표 (0,0)을 위한 -1
        dir = 1, 
        num = 1,
        count = n, // 각 행,열 전진값
        arr = new Array(n);

    for(i = 0; i < n; i++) {
        arr[i] = new Array(n); // N * N 다차원 배열 생성
    }

    while(true) {
        for (i = 0; i < count; i++) {
            y += dir;
            arr[x][y] = num++;
        } // x축 배열 초기화
        count--;

        if (count < 0) {
            break;
        } else {
            for (i = 0; i < count; i++) {
                x += dir;
                arr[x][y] = num++;
            }
        } // y축 배열 초기화
        dir *= -1; // 방향 전환에 따른 좌표값 증감 지정
    }
    
    for (i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}
snailArr(5);