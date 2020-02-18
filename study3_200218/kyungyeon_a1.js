const run = str => {
  let maxLength = 0;
  str.forEach(item => maxLength = item.length > maxLength ? item.length : maxLength);

  let result = '';
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < 5; j++) {
      result += str[j].substring(i, i+1);
    }
  }

  console.log('result', result);
};

run(
[ 'ABCDE',
  'abcde',
  '01234',
  'FGHIJ',
  'fghij' ]
);

run(
[ 'AABCDD',
  'afzz',
  '09121',
  'a8EWg6',
  'P5h3kx' ]
);

/*
  result Aa0FfBb1GgCc2HhDd3IiEe4Jj
  result Aa0aPAf985Bz1EhCz2W3D1gkD6x
 */