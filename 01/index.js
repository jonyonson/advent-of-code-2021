const path = require('path');
const getInput = require('../getInput');

const inputFile = path.resolve(__dirname, 'input.txt');
const data = getInput(inputFile).map(Number);

function partOne() {
  let answer = 0;

  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) answer++;
  }

  return answer;
}

function partTwo() {
  let answer = 0;
  let previousWindowSum;

  for (i = 2; i < data.length; i++) {
    let currentWindowSum = data[i] + data[i - 1] + data[i - 2];
    if (currentWindowSum > previousWindowSum) answer++;
    previousWindowSum = currentWindowSum;
  }

  return answer;
}

// console.log('PART 1: ', partOne());
// console.log('PART 2: ', partTwo());

module.exports = { partOne, partTwo };
