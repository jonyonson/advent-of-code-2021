const path = require('path');
const getInput = require('../getInput');

const inputFile = path.resolve(__dirname, 'input.txt');
let data = getInput(inputFile);

const order = data.shift().split(',').map(Number);
data = data
  .filter((x) => x !== '')
  .map((x) =>
    x
      .split(' ')
      .filter((y) => y !== '')
      .map(Number),
  );

function gameBoards() {
  let boards = [];

  for (let i = 4; i < data.length; i += 5) {
    let arr = [data[i - 4], data[i - 3], data[i - 2], data[i - 1], data[i]];
    boards.push(arr);
  }

  return boards;
}

function partOne() {
  const selections = order;
  let selected = selections.splice(0, 5);
  const boards = gameBoards();

  let winningBoard;

  while (!winningBoard) {
    for (let i = 0; i < boards.length; i++) {
      const board = boards[i];

      for (let j = 0; j < board.length; j++) {
        const row = board[j];
        const col = board.map((x) => x[j]);

        for (let k = 0; k < row.length; k++) {
          if (!selected.includes(row[k])) {
            break;
          } else {
            if (k === row.length - 1) {
              winningBoard = board;
              break;
            }
          }
        }

        for (let l = 0; l < col.length; l++) {
          if (!selected.includes(col[l])) {
            break;
          } else {
            if (l === col.length - 1) {
              winningBoard = board;
              break;
            }
          }
        }
      }
    }

    if (!winningBoard) {
      selected.push(selections.shift());
    }
  }

  const lastDrawn = selected[selected.length - 1];

  let unmarked = winningBoard.flat().filter((x) => !selected.includes(x));
  let sumOfUnmarked = unmarked.reduce((a, b) => a + b, 0);

  return sumOfUnmarked * lastDrawn;
}

function partTwo() {
  const selections = [...order];
  let selected = selections.splice(0, 5);
  const boards = gameBoards();

  let winningBoards = [];
  let blah;

  // while (selections.length) {
  let winningBoard = false;

  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];

    for (let j = 0; j < board.length; j++) {
      const row = board[j];
      const col = board.map((x) => x[j]);

      for (let k = 0; k < row.length; k++) {
        if (!selected.includes(row[k])) {
          break;
        } else {
          if (k === row.length - 1) {
            if (!winningBoards.includes(i)) {
              winningBoard = true;
              winningBoards.push(i);
              blah = i;
            }

            break;
          }
        }
      }

      if (!winningBoard) {
        for (let l = 0; l < col.length; l++) {
          if (!selected.includes(col[l])) {
            break;
          } else {
            if (l === col.length - 1) {
              if (!winningBoards.includes(i)) {
                // console.log('col', i);
                // console.log('s', selected[selected.length - 1]);
                winningBoard = true;
                winningBoards.push(i);
                blah = i;
                // console.log('HERE', i);
              }
              // winningBoard = board;
              break;
            }
          }
        }
      }
    }
    // }

    const selection = selections.shift();
    if (winningBoard) {
      console.log('selection', selection);
    }
    selected.push(selection);
  }

  const lastDrawn = selected[selected.length - 1];
  // const lastDrawn = 85;

  const lastWinningBoard = boards[winningBoards[winningBoards.length - 1]];
  let unmarked = lastWinningBoard.flat().filter((x) => !selected.includes(x));
  let sumOfUnmarked = unmarked.reduce((a, b) => a + b, 0);

  // console.log('sumOfUnmarked', sumOfUnmarked);
  // console.log('lastDrawn', lastDrawn);
  // console.log('order', order);
  console.log('last winning', blah);
  // console.log('wining boards', winningBoards[winningBoards.length - 1]);
  // console.log('yo', winningBoards[winningBoards.length - 1]);
  // console.log(boards[85]);
  console.log('selected', selected);
  console.log(lastWinningBoard);
  // console.log('selected', selected);

  return sumOfUnmarked * lastDrawn;
}

// 5586

module.exports = { partOne, partTwo };
// console.log(order);
// console.log('----');
// for (let i = 0; i < order.length; i++) {
//   if ((5586 / order[i]) % 1 === 0) {
//     console.log(order[i]);
//   }
// }
