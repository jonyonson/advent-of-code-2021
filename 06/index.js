const path = require('path');
const getInput = require('../getInput');

const inputFile = path.resolve(__dirname, 'input.txt');
const data = getInput(inputFile)[0]
  .split(',')
  .map((x) => Number(x));

const initialState = data;
// const initialState = [3, 4, 3, 1, 2];

function partOne() {
  let state = initialState;
  let days = 0;
  while (days < 80) {
    state = state.map((x) => x - 1);

    state = [
      ...state.map((x) => (x === -1 ? 6 : x)),
      ...new Array(state.filter((x) => x === -1).length).fill(8),
    ];

    days++;
  }

  return state.length;
}

function partTwo() {
  return 'yo';
}

module.exports = { partOne, partTwo };
