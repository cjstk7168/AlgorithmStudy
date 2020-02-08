const answer1 = words => {
  maxLength = Math.max(...words.map(w => w.length));
  result = [];
  for (let c = 0; c < maxLength; c++) {
    for (let r = 0; r < 5; r++) {
      if (c < words[r].length) {
        result.push(words[r][c]);
      }
    }
  }
  return result.join("");
};

console.log(answer1(["ABCDE", "abcde", "01234", "FGHIJ", "fghij"]));
console.log(answer1(["AABCDD", "afzz", "09121", "a8EWg6", "P5h3kx"]));
