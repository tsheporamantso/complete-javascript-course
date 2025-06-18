"use strict";
import getElement from "./utils/getElement.js";
/*
 * classList property has couple of methods i.e.(add, remove, toggle, )
 * There are 3 types of events for keyboard( keyup, keydown, keypress )
 */

const showModalBtns = [...document.querySelectorAll(".show-modal")];
const closeModalBtn = getElement(".close-modal");
const modal = getElement(".modal");
const overlay = getElement(".overlay");

const toggleModal = (element, CSSselector) => {
  element.classList.toggle(CSSselector);
};

const closeModal = (element, CSSselector) => {
  element.classList.add(CSSselector);
};

showModalBtns.map((btn) => {
  btn.addEventListener("click", () => {
    toggleModal(modal, "hidden");
    toggleModal(overlay, "hidden");
  });
});

closeModalBtn.addEventListener("click", () => {
  toggleModal(modal, "hidden");
  toggleModal(overlay, "hidden");
});

overlay.addEventListener("click", () => {
  toggleModal(modal, "hidden");
  toggleModal(overlay, "hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal(modal, "hidden");
    closeModal(overlay, "hidden");
  }
});
