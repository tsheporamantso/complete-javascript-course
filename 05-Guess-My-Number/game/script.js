"use strict";

/*
! DOM MANIPULATION
? DOM stands for Document Object Model
* - It is the structured representation of HTML documents.
* - It allows JavaScript to access HTML elements and Styles to manipulate them.
*/

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  return (document.querySelector(".message").textContent = message);
};

checkBtn.addEventListener("click", () => {
  const guess = parseInt(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number");
    // When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too High!" : "📉Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

againBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
});
