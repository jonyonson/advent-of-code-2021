const path = require('path');
const getInput = require('../getInput');

const inputFile = path.resolve(__dirname, 'input.txt');
// const data = getInput(inputFile);

let data = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

function partOne() {
  // create an array of n 0s
  // for each line,
  //   if the line is a comment, skip it
  //   if the line is a variable assignment
  let oneBitsCount = new Array(data[0].length).fill(0);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (+data[i][j]) {
        oneBitsCount[j] += 1;
      }
    }
  }

  // return oneBitsCount;
  // return data.length / 2;

  const gammaRate = oneBitsCount
    .map((count) => {
      return String(count > data.length / 2 ? 1 : 0);
    })
    .join('');

  const epsilonRate = oneBitsCount
    .map((count) => {
      return String(count > data.length / 2 ? 0 : 1);
    })
    .join('');

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

function partTwo() {
  // oxygen generator rating
  // find the most common value in the current bit position
  // keep only numbers with that bit in that position
  // tie goes to 1

  let arr = data;

  while (arr.length > 1) {
    let oneBitsCount = 0;

    for (let i = 0; i < arr.length; i++) {
      console.log(Boolean(+arr[i][0]));
      if (+arr[i][0]) {
        oneBitsCount += 1;
      }
    }

    if (oneBitsCount >= arr.length / 2) {
      arr.filter((x) => x[0] === '1');
    }
  }

  return oneBitsCount;
}

module.exports = { partOne, partTwo };
