"use strict";
import getElement from "./getElement.js";
/*
! DOM MANIPULATION
? DOM stands for Document Object Model
* - It is the structured representation of HTML documents.
* - It allows JavaScript to access HTML elements and Styles to manipulate them.
*/

const message = getElement(".message");
const scoreEl = getElement(".score");
const numberEl = getElement(".number");
const guessEl = getElement(".guess");
const checkBtn = getElement(".check");
const againBtn = getElement(".again");
const highScoreEl = getElement(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", () => {
  // *** Get input value and convert to number ***
  const guess = +guessEl.value;

  // *** Submitting empty input field ***
  if (!guess) {
    message.textContent = "⛔ No Number selected!";

    // *** When the player wins ***
  } else if (guess === secretNumber) {
    message.textContent = "🎊 Correct Number!";
    numberEl.textContent = guess;
    document.body.style.backgroundColor = "#60b347";
    numberEl.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    // *** When guess is incorrect ***
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too Low";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "🤯 You lost the game!";
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // highScoreEl.textContent = 0;
  scoreEl.textContent = score;
  message.textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
  numberEl.textContent = "?";
  guessEl.value = "";
});

// const promise = new Promise((resolve, reject) => {
//   const data = true;
//   if (data) {
//     resolve("Hello World");
//   } else {
//     reject("Something went wrong!");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     throw new Error(error);
//   });

// console.log("Yey");
