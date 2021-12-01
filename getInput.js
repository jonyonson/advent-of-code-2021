const fs = require('fs');

function getInput(inputFile) {
  try {
    return fs.readFileSync(inputFile, 'utf8').trimEnd().split('\n');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = getInput;
