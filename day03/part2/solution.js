const { input } = require('./input');

const solution = (input) => {

  let total = 0;
  
  for (let i = 0; i < input.length; i += 3) {
    let common;

    for (let j = 0; j < input[i].length; j++) {
      thisLetter = input[i][j]
      if (input[i + 1].includes(thisLetter) && input[i + 2].includes(thisLetter)) {
        common = thisLetter.charCodeAt(0);
      }
    }

    if (common <= 90) {
      total += common - 38
    } else {
      total += common - 96
    }
  }

  return total;
}

console.log(solution(input));