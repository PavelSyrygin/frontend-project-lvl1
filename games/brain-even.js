#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  initGame, getRandomInt, countQuestions, playerName,
} from '../src/index.js';

initGame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let allCorrect = true;
for (let i = 0; i < countQuestions; i += 1) {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
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
