'use strict';

/*
  ? DOM is Document Object Model and it's a structured representation of HTML documents.
  ? It allows JavaScript to access HTML elements and styles to manipulate them. 
*/

// Setting values
let secreteNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Getting HTML elements for manipulation
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const bgColor = document.querySelector('body');
const numberWidth = document.querySelector('.number');
const highscore = document.querySelector('.highscore');

// Refactor functions
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = (number) => {
  document.querySelector('.number').textContent = number;
};

const displayScore = (score) => {
  document.querySelector('.score').textContent = score;
};

// Event listerns
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
    displayMessage('🤯 No number!');

    /*
     ! When the player wins.
     */
  } else if (guess === secreteNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secreteNumber);

    bgColor.style.backgroundColor = '#60b347';
    numberWidth.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highscore.textContent = highScore;
    }

    /*
           ! When guess is not correct
    */
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      displayMessage(guess > secreteNumber ? '📈 Too high!' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost!');
      displayScore(0);
    }
  }
});
