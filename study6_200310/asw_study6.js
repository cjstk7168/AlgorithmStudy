// 문제.1
// 최솟값 삭제 함수
function MindataRemoveFunction( array ){
    if( array.length === 1 ) array[0] = -1;
    else{
        let min = array[0];
        let min_index = 0;
        for( let i in array ){
            if( min > array[i] ){
                min = array[i];
                min_index = i;
            } 
        }
        array.splice(min_index, 1);
    }
    return array;
}
var result = MindataRemoveFunction([4,3,1,2]);
console.log( 'problem1 result >> ', result );

// 문제.2
// JadenCase 문자열 만들기
function JadenCaseFunctin( s ){
    if( s.length > 0 ){
        let result = "";
        let array = s.split(" ");
        for( let split_s of array ){
            let first = split_s.charAt(0);
            if( !isNaN(first) ){
                split_s.toLowerCase();
            }
            else{
                split_s = split_s.substring(0,1).toUpperCase() + split_s.substring(1, split_s.length).toLowerCase();                
            }
            result += split_s+" ";
        }
        return result;
    }
    else{
        return null;
    }
}

let s = "for the last week";
let result2 = JadenCaseFunctin(s);
console.log( result2 );
