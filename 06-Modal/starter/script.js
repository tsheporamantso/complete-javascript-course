'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/*
    ? You can choose to either use CSS style or classList to either show or hide the model.
    ? I have used the both alternatives to illustration purposes.
    ? classList is much more concise.   
*/
const OpenModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const CloseModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal);
}

btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

/*
  ? Keyboard events are called "Global events" and to listen to such events you call the entire document.
  ? Keyboard you have 1) keyup[happens when you lift finger off keyboar], 
  ?2) keydown[happens when you press down key] and 
  ?3) keypress[Goes continuously as we keep finger on keyboard.] 
*/
document.addEventListener('keydown', (e) => {
  e.key === 'Escape' && !modal.classList.contains('hidden')
    ? CloseModal()
    : null;
});
