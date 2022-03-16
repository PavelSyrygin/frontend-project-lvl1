#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  initGame, getRandomInt, countQuestions, playerName,
} from '../src/index.js';

const getCorrectAnswer = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

initGame();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let allCorrect = true;
for (let i = 0; i < countQuestions; i += 1) {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(number);
  if (correctAnswer === answer.toString()) {
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
