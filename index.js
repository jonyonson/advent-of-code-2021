const arg = process.argv[2];
const day = ('0' + arg || new Date().getDate()).slice(-2);

const { partOne, partTwo } = require(`./${day}`);

console.log(`----DECEMBER ${day}----`);
console.log('PART 1: ', partOne());
console.log('PART 2: ', partTwo());
