const path = require('path');
const getInput = require('../getInput');

const inputFile = path.resolve(__dirname, 'input.txt');
const data = getInput(inputFile);

// let data = [
//   '00100',
//   '11110',
//   '10110',
//   '10111',
//   '10101',
//   '01111',
//   '00111',
//   '11100',
//   '10000',
//   '11001',
//   '00010',
//   '01010',
// ];

function partOne() {
  let oneBitsCount = new Array(data[0].length).fill(0);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (+data[i][j]) {
        oneBitsCount[j] += 1;
      }
    }
  }

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
  let arr = data;
  let count = 0;
  let oneBitsCount;

  while (arr.length > 1) {
    oneBitsCount = 0;

    for (let i = 0; i < arr.length; i++) {
      if (+arr[i][count]) {
        oneBitsCount += 1;
      }
    }

    if (oneBitsCount >= arr.length / 2) {
      arr = arr.filter((x) => x[count] === '1');
    } else {
      arr = arr.filter((x) => x[count] === '0');
    }

    count++;
  }

  let arr1 = data;
  count = 0;

  while (arr1.length > 1) {
    oneBitsCount = 0;

    for (let i = 0; i < arr1.length; i++) {
      if (+arr1[i][count]) {
        oneBitsCount += 1;
      }
    }

    if (oneBitsCount >= arr1.length / 2) {
      arr1 = arr1.filter((x) => x[count] === '0');
    } else {
      arr1 = arr1.filter((x) => x[count] === '1');
    }

    count++;
  }

  const oxygenGeneratorRating = parseInt(arr.join(''), 2);
  const c02ScrubberRating = parseInt(arr1.join(''), 2);

  return oxygenGeneratorRating * c02ScrubberRating;
}

module.exports = { partOne, partTwo };
