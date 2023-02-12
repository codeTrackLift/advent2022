const { input } = require('./input');

const solution = (input) => {
  const letter = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
    X: 'lose',
    Y: 'draw',
    Z: 'win',
  }

  const shape = {
    rock: 1,
    paper: 2,
    scissors: 3,
  }

  const outcome = {
    win: 6,
    draw: 3,
    lose: 0
  }

  let total = 0;

  const myShape = (arr) => {
    switch (`${letter[arr[0]]}-${letter[arr[1]]}`) {
      case 'rock-win':
        return 'paper';
      case 'rock-lose':
        return 'scissors';
      case 'paper-win':
        return 'scissors';
      case 'paper-lose':
        return 'rock';
      case 'scissors-win':
        return 'rock';
      case 'scissors-lose':
        return 'paper';
      case `${letter[arr[0]]}-draw`:
        return letter[arr[0]];
    }
  }

  input.forEach((e) => {
    const thisShape = myShape(e);
    total += outcome[letter[e[1]]] + shape[thisShape];
  })

  return total;
}

console.log(solution(input));