'use strict';
const bodyEl = document.querySelector('body');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const againEl = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const lostGame = function () {
  bodyEl.style.backgroundColor = 'red';
};
const displayMessage = function (message) {
  messageEl.textContent = message;
};

checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = 'green';
    numberEl.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreEl.textContent = 0;
      lostGame();
    }
  }
});

againEl.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
