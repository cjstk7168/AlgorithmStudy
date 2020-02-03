

/*

진지하게 생각한다면, 
s1 ~ s5 에서 가장 긴 녀석의 length 만큼 loop를 돌리면 된다.
*/
function vertical(s1,s2,s3,s4,s5){
  let pos = 0;
  let str = '';
  while(pos < 15 && (pos < s1.length || pos < s2.length || pos < s3.length || pos < s4.length ||pos < s5.length)){
    str+=s1[pos] || '';
    str+=s2[pos] || '';
    str+=s3[pos] || '';
    str+=s4[pos] || '';
    str+=s5[pos] || '';
    pos++;
  }
  return str;
}
console.log(
  vertical('ABCDE', 'abcde', '01234', 'FGHIJ', 'fghij'), vertical('ABCDE', 'abcde', '01234', 'FGHIJ', 'fghij') === 'Aa0FfBb1GgCc2HhDd3IiEe4Jj'
)
console.log(
  vertical('AABCDD', 'afzz', '09121', 'a8EWg6', 'P5h3kx') ,vertical('AABCDD', 'afzz', '09121', 'a8EWg6', 'P5h3kx') === 'Aa0aPAf985Bz1EhCz2W3D1gkD6x'
)


function vertical2(...s){
  let LEN = s[0].length;
  for(let i = 1; i < s.length; i++){
    if(LEN < s[i].length) LEN = s[i].length;
  }
  let str = '';
  for(let j = 0; j < LEN; j++){
    for(let k = 0; k < s.length; k++){
      str+=s[k][j] || '';
    }
  }
  return str;
}
console.log(
  vertical2('ABCDE', 'abcde', '01234', 'FGHIJ', 'fghij'), vertical('ABCDE', 'abcde', '01234', 'FGHIJ', 'fghij') === 'Aa0FfBb1GgCc2HhDd3IiEe4Jj'
)

console.log(
  vertical2('AABCDD', 'afzz', '09121', 'a8EWg6', 'P5h3kx') ,vertical('AABCDD', 'afzz', '09121', 'a8EWg6', 'P5h3kx') === 'Aa0aPAf985Bz1EhCz2W3D1gkD6x'
)
function diskTree(n, ...dir){
  const obj = {};
  for(let i = 0; i < n; i++){
    const s = dir[i].split("\\");
    //let maps = new Map();
    for(let j =s.length; j > 0; j--){
      obj[s[j]] = obj;
    }
    console.dir(obj);
  }
  return dir;
}

console.log(
  diskTree(7,
    `WINNT\\SYSTEM32\\CONFIG`,
    `GAMES`,
    `WINNT\\DRIVERS`,
    `HOME`,
    `WIN\\SOFT`,
    `GAMES\\DRIVERS`,
    `WINNT\\SYSTEM32\\CERTSRV\\CERTCO~1\\X86`,
  )
)