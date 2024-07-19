'use strict';

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.getElementsByClassName('dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let diceRoll = Math.floor(Math.random() * 6) + 1;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

//Event Handler

btnRoll.addEventListener('click', () => {
  console.log('roll dice clicked');
});
