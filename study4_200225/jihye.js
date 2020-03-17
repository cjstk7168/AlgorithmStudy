/* 1. 마라톤
** 문제 **
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요. 
- 조건1 : 모든 선수 = 1 < 100000
- 조건2 : 완주하지 못한 선수 = 모든선수 - 1 
- 조건3 : 이름 = 1 < 20, lowercase
*/

function solution(participant, completion) { //참가자 수, 완주한 사람 수를 인수로 받음
    
    participant.sort(); //참가자 수를 알파벳 순서대로 배열을 반환한다.
    completion.sort(); //완주한 사람 수를 알파벳 순서대로 배열을 반환한다.
    
    for(let i in participant) { //속성 in 객체명 :  in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환
        participant[i] = participant[i].toLowerCase(); //참가자 이름을 모두 소문자로 변환
        if(participant[i] !== completion[i]) return participant[i]; //참가자와 완주한 사람이 일치하지 않으면 그 값을 반환
    }
}