import readlineSync from 'readline-sync';

const maxRandomNumber = 99;
const countQuestions = 3;
const getRandomInt = () => Math.floor(Math.random() * maxRandomNumber);
// eslint-disable-next-line import/no-mutable-exports
let playerName = '';

const initGame = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

// eslint-disable-next-line import/prefer-default-export
export {
  initGame, countQuestions, getRandomInt, playerName,
};
