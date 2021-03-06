# AlgorithmStudy
이번주의 알고리즘 스터디 내용

## 1. 마라톤
#### 문제
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

#### 출력 예제
| participant	| completion	| return |
|:---:|:---:|:---:|
|["leo", "kiki", "eden"]	|["eden", "kiki"]	|leo|
|["marina", "josipa", "nikola", "vinko", "filipa"]	|["josipa", "filipa", "marina", "nikola"]|	vinko|
|["mislav", "stanko", "mislav", "ana"]	|["stanko", "ana", "mislav"]|	mislav|

예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

## 2. 지뢰찾기
#### 문제
지뢰찾기는 N×N에서 이뤄지는 게임이다.  
보드의 곳곳에는 몇 개의 지뢰가 숨겨져 있고, 지뢰가 없는 칸에는 그 칸과 인접(상하좌우 및 대각선)해 있는 8개의 칸들에 몇 개의 지뢰가 숨겨져 있는지에 대한 정보가 주어진다.   

배열의 크기 N, 지뢰의 개수 M을 입력받아 지뢰찾기 판을 완성하시오.  
단, (M <= N x N)

지뢰의 위치는 랜덤으로 뿌려진다.

주변에 지뢰가 없다면 아무 숫자도 표시하지 않는다.

#### 입력
배열의 크기 N

#### 출력
N x N 배열의 지뢰찾기 판

#### 출력 예제
N: 10
M: 10

|      |      |      |      |      |      | 1    | 1    | 1    |      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |      | 1    | *    | 1    |      |
|      |      |      | 1    | 1    | 1    | 1    | 1    | 1    | 1    |
|      |      | 1    | 2    | *    | 1    |      | 1    | *    | 1    |
| 1    | 1    | 2    | *    | 3    | 2    | 1    | 1    | 1    | 1    |
| 1    | *    | 2    | 1    | 2    | *    | 2    | 1    |      |      |
| 1    | 1    | 1    |      | 1    | 2    | *    | 1    |      |      |
|      | 1    | 1    | 1    | 1    | 2    | 2    | 1    |      |      |
|      | 1    | *    | 1    | 1    | *    | 1    | 1    | 1    | 1    |
|      | 1    | 1    | 1    | 1    | 1    | 1    | 1    | *    | 1    |

