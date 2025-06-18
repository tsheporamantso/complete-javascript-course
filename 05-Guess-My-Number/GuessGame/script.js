"use script";
import getElement from "./utils/GetElement.js";

const againBtn = getElement(".again");
const checkBtn = getElement(".check");
const numberEl = getElement(".number");
const guessEl = getElement(".guess");
const messageEl = getElement(".message");
const scoreEl = getElement(".score");
const highScoreEl = getElement(".highscore");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", () => {
  const guess = parseInt(guessEl.value);
  // *** No Number entered ***
  if (!guess) {
    messageEl.textContent = "⛔ No Number Entered!";

    // *** When the player wins ***
  } else if (guess === randomNumber) {
    numberEl.textContent = guess;
    messageEl.textContent = "🎊 Correct Number!";
    document.body.style.backgroundColor = "#60b347";
    numberEl.style.width = "30rem";

    if (score > highScore) {
      highScoreEl.textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent =
        guess > randomNumber ? "📈 Too high" : "📉 Too low";
    } else {
      messageEl.textContent = "🤯 You lost!";
      scoreEl.textContent = 0;
      document.body.style.backgroundColor = "red";
    }
  }
});

againBtn.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = score;
  guessEl.value = "";
  numberEl.textContent = "?";
  document.body.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
});
