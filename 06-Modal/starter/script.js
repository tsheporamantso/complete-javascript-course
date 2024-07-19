'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

/*
    ? You can choose to either use CSS style or classList to either show or hide the model.
    ? I have used the both alternatives to illustration purposes.
    ? classList is much more concise.   
*/
const handleOpenModal = () => {
  // modal.classList.remove('hidden');
  modal.style.display = 'block';
  overlay.classList.remove('hidden');
};

const handleCloseModal = () => {
  // modal.classList.add('hidden');
  modal.style.display = 'none';
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', handleOpenModal);
}

btnCloseModal.addEventListener('click', handleCloseModal);
overlay.addEventListener('click', handleCloseModal);

/*
  ? Keyboard events are called "Global events" and to listen to such events you call the entire document.
  ? Keyboard you have 1) keyup[happens when you lift finger off keyboar], 2) keydown[happens when you press down key] and keypress[Goes continuously as we keep finger on keyboard.] 
*/
document.addEventListener('keydown', (e) => {
  // console.log(e);
  e.key === 'Escape' && !modal.classList.contains('hidden')
    ? handleCloseModal()
    : null;
});
