const path = require('path');
const getInput = require('../getInput');

const inputFile = path.resolve(__dirname, 'input.txt');
const data = getInput(inputFile, ',').map(Number);

// const data = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

function calculateSpentFuel(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

function partOne() {
  let spentFuel = Infinity;
  for (let i = 0; i < data.length; i++) {
    const fuel = data
      .map((x) => Math.abs(x - i))
      .reduce((acc, cv) => acc + cv, 0);

    if (fuel < spentFuel) {
      spentFuel = fuel;
    }
  }

  return spentFuel;
}

function partTwo() {
  let spentFuel = Infinity;
  for (let i = 0; i < data.length; i++) {
    const fuel = data
      .map((x) => Math.abs(x - i))
      .map(calculateSpentFuel)
      .reduce((acc, cv) => acc + cv, 0);

    if (fuel < spentFuel) {
      spentFuel = fuel;
    }
  }

  return spentFuel;
}
module.exports = { partOne, partTwo };
