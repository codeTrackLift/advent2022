const { input } = require('./input');

const solution = (input) => {

  let total = 0;

  input.forEach(e => {
    const middle = e.length / 2;
    const start = e.substring(0, middle);
    const end = e.substring(middle, e.length);
    let common;

    for (let i = 0; i < start.length; i++) {
      if (end.includes(start[i])) {
        common = start[i].charCodeAt(0)
      }
    }

    if (common <= 90) {
      total += common - 38
    } else {
      total += common - 96
    }
  })

  return total;
};

console.log(solution(input));