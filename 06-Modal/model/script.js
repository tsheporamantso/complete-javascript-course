"use strict";

/*
 * classList property has couple of methods i.e.(add, remove, toggle, )
 * There are 3 types of events for keyboard( keyup, keydown, keypress )
 */

// Selecting elements
const btnOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  e.key === "Escape" ? closeModal() : null;
});
