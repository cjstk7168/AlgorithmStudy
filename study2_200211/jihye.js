// 1. 설탕배달
/*
- 총 배달해야하는 설탕 무게 : 18kg
- 가지고 있는 설탕봉지 : 3kg, 5kg
- 조건1 : 가장 적은 수의 봉지 조합 찾기
- 조건2 : 만약, 정확하게 무게를 맞출 수 없다면 -1을 출력한다.
1. 우선순위로 5kg을 최대로 대입한다.
2. 나머지에 3kg을 대입한다.
3. 총 배달해야 하는 설탕무게는 n이다.
*/

function sugar(n){
    //조건식 1 
    //i는 5kg봉지의 갯수, 설탕의 총량을 5로 나눈 값부터 시작. 소수점은 버림한다.(나머지)
    // ** Math.floor는 소수점 이하를 버림한다. ex) 4.95 = 4, -5.05 = -6
    for(let i = Math.floor(n/5); i > 0; i--){ //i가 1이 될 때까지 반복, 봉지 수는 1씩 감소
      let res = (n - (i*5)); //총량에서 5kg 설탕량을 뺀 나머지를 res로 정의
      if(res % 3 === 0){ //만약 res가 3으로 나누었을 때 나머지가 0일 경우,
        return (i + (res/3)); //i는 5kg봉지의 수, res를 3으로 나눈 것은 3kg 설탕봉지의 수. 즉, 5kg봉지 갯수 + 3kg봉지 갯수
      }
    }
  
    //위 조건이 충족되지 못했을 경우, 5kg봉지의 수는 0, 총 봉지 수 리셋
    //조건식 2
    if(n % 3 === 0){ //만약 총량을 3으로 나누었을 때 나머지가 0일 경우,
      return n/3; //총량을 3으로 나눈 것은 3kg봉지의 수. 즉, 3kg봉지 갯수만 출력
    }
  
    //위 두 조건이 모두 충족되지 못했을 경우, -1을 리턴
    return -1;
  }
  console.log(sugar(18));
  console.log(sugar(4));
  console.log(sugar(6));
  console.log(sugar(9));
  console.log(sugar(11));


//2. LRU Caching

// cacheSize     cities     answer
// 3	[Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA]	50
// 3	[Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul]	21
// 2	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	60
// 5	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	52
// 2	[Jeju, Pangyo, NewYork, newyork]	16
// 0	[Jeju, Pangyo, Seoul, NewYork, LA]	25

function solution(cacheSize, cities){ //1번의 경우 3, Jeju 대입
    let answer = 0; //임시로 초기 값 0으로 설정, 언제든지 재햘당 가능.
    let arr = []; //arr이라는 배열 선언

    //캐시 사이즈가 0일 경우
    if (cacheSize === 0) return cities.length * 5;

    for (let i = 0; i < cities.length; i++){ //i가 9보다 작으면 1을 더한다. 9는 cities의 수.(1번 예시)
        //대소문자 구분이 없으므로 소문자로 통일
        cities[i] = cities[i].toLowerCase(); //cities의 i번째 배열의 값을 가져온다. i가 1일 때 = cities[Jeju].(1번 예시)
        
        if (arr.includes(cities[i])){ //arr에 i값이 포함되어 있으면
            answer += 1; //answer에 1을 더한다.
            arr.splice(arr.indexOf(cities[i]), 1); //arr에 cities[Jeju]의 위치에서 1개 제거 = Jeju가 제거됨.(2번 예시)
            arr.push(cities[i]); //arr의 끝에 Jeju를 추가한다.
        }
        else { //arr에 i값이 포함되어있지 않으면
            if (arr.length < cacheSize){ //arr의 수가 3보다 작으면 (1번 예시)
                arr.push(cities[i]); //arr의 끝에 Jeju를 추가한다. (1번 예시)
            }
            else { //arr의 수가 3보다 크면 (1번 예시)
                arr.splice(0, 1); //arr의 0번째 인덱스에서 1개 제거. [Jeju, Pangyo, Seoul, NewYork]일 경우 Jeju 제거.
                arr.push(cities[i]); //arr의 끝에 LA를 추가한다.
            }
            answer += 5; //answer에 5를 더한다.
        }
    }

    return answer; //answer값 최종 리턴.
}

console.log(solution(3, [Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA])) //50 (1번)
console.log(solution(2, [Jeju, Pangyo, NewYork, newyork])) //16 (5번)
console.log(solution(0, [Jeju, Pangyo, Seoul, NewYork, LA])) //25 (6번)