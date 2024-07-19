'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
// console.log(btnsOpenModal);

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
  ? Keyboard events are called "Global events" and to listen to such events you call the entire document.
  ? Keyboard you have 1) keyup[happens when you lift finger off keyboar], 2) keydown[happens when you press down key] and keypress[Goes continuously as we keep finger on keyboard.] 
*/
document.addEventListener('keydown', (e) => {
  // console.log(e);
  e.key === 'Escape' && !modal.classList.contains('hidden')
    ? closeModal()
    : null;
});
