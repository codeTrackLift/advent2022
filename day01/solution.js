const { input } = require('./input.js');

const solution = (input) => {
  let maxCalories = 0;

  input.forEach(e => {
    const total = e.reduce((acc, prev) => acc + prev, 0);

    if (total > maxCalories) maxCalories = total;
  })

  return maxCalories;
}

console.log(solution(input));