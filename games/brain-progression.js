#!/usr/bin/env mode

import readlineSync from 'readline-sync';
import {
  initGame, getRandomInt, countQuestions, playerName,
} from '../src/index.js';

let correctAnswer;
const showRandomProgression = () => {
  let progression = '';
  const rndNum = Math.floor(Math.random() * (9 - 1) + 1);
  let currNum = getRandomInt();
  for (let i = 0; i < 9; i += 1) {
    currNum += rndNum;
    if (rndNum === i) {
      correctAnswer = currNum;
      progression += '.. ';
    } else {
      progression += `${currNum} `;
    }
  }
  console.log(`Question: ${progression}`);
};

initGame();
console.log('What number is missing in the progression?');
let allCorrect = true;
for (let i = 0; i < countQuestions; i += 1) {
  showRandomProgression();
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
