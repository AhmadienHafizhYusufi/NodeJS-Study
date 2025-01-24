// const validator = require('validator');

// console.log(validator.isEmail('yowamomo@gmail.com'));
// console.log(validator.isMobilePhone('08129840975', 'id-ID'));
// console.log(validator.isNumeric('08129840975'));

import chalk from "chalk";

console.log(chalk.white.bgRed('Hello world!'));
const pesan = chalk`lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
console.log(chalk.bgRed(pesan));