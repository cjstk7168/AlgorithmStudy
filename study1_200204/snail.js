
/*
  시간복잡도 O(n^2)을 목표로..
*/

// const DIRECTION = ['RIGHT', 'DOWN', 'LEFT', 'UP'];
// function snail(n){
//   const obj = {};
//   let cnt = 1;
//   let ROW= 0, COL = 0;
//   let r = 0, c = 0;
//   let DIR = DIRECTION[0];
//   while(cnt <= n*n){
//     obj[`${ROW},${COL}`] = cnt;
//     console.log(ROW,COL,obj[`${ROW},${COL}`], DIR)
//     cnt++;
//     if(DIR === 'RIGHT' && COL < n-1){
//       COL++;
//     }
//     if(DIR === 'LEFT' && COL > 0 ){
//       COL--;
//     }
//     if(DIR === 'DOWN' && ROW < n-1){
//       ROW++;
//     }
//     if(DIR === 'UP' && ROW > 0){
//       ROW--;
//     }
//     if(obj[`${ROW},${COL}`] || (ROW === 0 && COL=== 0) || (ROW === 0 && COL===n-1) || (ROW === n-1 && COL === n-1) || (ROW === n-1 && COL === 0)){
//       console.log(r, c);
//       DIRECTION.push(DIRECTION.shift());
//       DIR = DIRECTION[0];
//       if(DIR === 'RIGHT' && COL < n-1){
//         COL++;
//       }
//       if(DIR === 'LEFT' && COL > 0 ){
//         COL--;
//       }
//       if(DIR === 'DOWN' && ROW < n-1){
//         ROW++;
//       }
//       if(DIR === 'UP' && ROW > 0){
//         ROW--;
//       }
//     }

//   }
//   console.dir(obj);
// };

// snail(4);


