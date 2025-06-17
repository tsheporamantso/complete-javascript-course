"use strick";
import getElement from "./utils/getElement.js";

// *** Selecting Elements ***
const score0El = getElement("#score--0");
const score1El = getElement("#score--1");
const diceEl = getElement(".dice");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
