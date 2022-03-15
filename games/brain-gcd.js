#!/usr/bin/env mode

import readlineSync from 'readline-sync';
import {
  initGame, getRandomInt, countQuestions, playerName,
} from '../src/index.js';

const getCorrectAnswer = (num1, num2) => {
  let res = 0;
  do {
    res = num1 % num2;
    if (res !== 0) {
      // eslint-disable-next-line no-param-reassign
      num1 = num2;
      // eslint-disable-next-line no-param-reassign
      num2 = res;
    }
  } while (res !== 0);
  return num2;
};

initGame();
console.log('Find the greatest common divisor of given numbers.');
let allCorrect = true;
for (let i = 0; i < countQuestions; i += 1) {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  console.log(`Question: ${number1}  ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(number1, number2);
  if (correctAnswer.toString() === answer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    allCorrect = false;
    break;
  }
}
if (allCorrect) {
  console.log(`Congratulations, ${playerName}!`);
}
