const { input } = require('./input');

const solution = (input) => {

  const letter = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
    X: 'rock',
    Y: 'paper',
    Z: 'scissors',
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

  const isWinner = (arr) => {
    switch (`${letter[arr[0]]}-${letter[arr[1]]}`) {
      case 'rock-paper':
        return 'win';
      case 'paper-rock':
        return 'lose';
      case 'scissors-rock':
        return 'win';
      case 'paper-scissors':
        return 'win';
      case 'scissors-paper':
        return 'lose';
      case 'rock-scissors':
        return 'lose';
      case 'rock-rock':
        return 'draw';
      case 'paper-paper':
        return 'draw';
      case 'scissors-scissors':
        return 'draw';
    }
  }

  input.forEach((e) => {
    const thisOutcome = isWinner(e);
    total += outcome[thisOutcome] + shape[letter[e[1]]]
  })

  return total;
};

console.log(solution(input));