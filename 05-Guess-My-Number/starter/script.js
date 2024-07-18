'use strict';

let secreteNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

againBtn.addEventListener('click', () => {
  score = 20;
  secreteNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

checkBtn.addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;

  /*
  ! When there is no input
  */
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secreteNumber) {
    displayMessage('Correct Number!');
    displayNumber(secreteNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    /*
        ! When guess is not correct
    */
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      displayMessage(guess > secreteNumber ? 'Too high!' : 'Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost!');
      displayScore(0);
    }
  }
});
