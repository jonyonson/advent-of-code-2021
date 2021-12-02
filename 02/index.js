const path = require('path');
const getInput = require('../getInput');

const inputFile = path.resolve(__dirname, 'input.txt');
const data = getInput(inputFile);

function partOne() {
  let horizontal = 0;
  let depth = 0;
  for (let i = 0; i < data.length; i++) {
    const command = data[i].split(' ');
    const direction = command[0];
    const distance = Number(command[1]);

    if (direction === 'forward') {
      horizontal += distance;
    } else if (direction === 'up') {
      depth -= distance;
    } else if (direction === 'down') {
      depth += distance;
    }
  }

  return horizontal * depth;
}

function partTwo() {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < data.length; i++) {
    const command = data[i].split(' ');
    const direction = command[0];
    const distance = Number(command[1]);

    if (direction === 'forward') {
      horizontal += distance;
      depth += aim * distance;
    } else if (direction === 'up') {
      aim -= distance;
    } else if (direction === 'down') {
      aim += distance;
    }
  }

  return horizontal * depth;
}

module.exports = { partOne, partTwo };
