'use strict';
const bodyEl = document.querySelector('body');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const againEl = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const lostGame = function () {
  bodyEl.style.backgroundColor = 'red';
};

checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    messageEl.textContent = 'No Number!';
    // When player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = 'Correct Number!';
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = 'green';
    numberEl.style.width = '30rem';
    // When guess is too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageEl.textContent = 'Too High';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'You lost the game';
      scoreEl.textContent = 0;
      lostGame();
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    // document.querySelector('.message').textContent = 'Too low';
    // score--;
    // document.querySelector('.score').textContent = score;
    if (score > 1) {
      messageEl.textContent = 'Too low';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'You lost the game';
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
