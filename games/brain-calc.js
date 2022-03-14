#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  initGame, getRandomInt, countQuestions, playerName,
} from '../src/index.js';

// eslint-disable-next-line consistent-return
const getCorrectAnswer = (oper1, oper2) => {
  const rnd = Math.floor(Math.random() * (3 - 1) + 1);
  // eslint-disable-next-line default-case
  switch (rnd) {
    case 1: {
      console.log(`Question: ${oper1} + ${oper2}`);
      return oper1 + oper2;
    }
    case 2: {
      console.log(`Question: ${oper1} - ${oper2}`);
      return oper1 - oper2;
    }
    case 3: {
      console.log(`Question: ${oper1} * ${oper2}`);
      return oper1 * oper2;
    }
  }
};

initGame();
console.log('What is the result of the expression?');
let allCorrect = true;
for (let i = 0; i < countQuestions; i += 1) {
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();
  const correctAnswer = getCorrectAnswer(operand1, operand2);
  const answer = readlineSync.question('Your answer: ');
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
