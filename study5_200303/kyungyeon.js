const question1 = s => {
  const printLen =  s.length % 2 === 0 ? 2 : 1;
  const middlePosition = Math.ceil(s.length / 2) - 1;
  return s.substring(middlePosition, middlePosition + printLen);
};

const question2 = num => {
  const numberOneCount = num.toString(2).match(/1/g).length;

  for (let i = num + 1; ; i++) {
    const iOneCount = i.toString(2).match(/1/g).length;
    if (iOneCount === numberOneCount) {
      return i;
    }
  }
};

console.log('answer1', question1('abcde'));
console.log('answer1', question1('qwer'));

console.log('answer2', question2(78));
console.log('answer2', question2(15));


