'use strict';

// import getElement from '../../05-Guess-My-Number/game/getElement.js';

const showModalBtns = [...document.querySelectorAll('.show-modal')];
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay ');
console.log(showModalBtns);
/*
    ? You can choose to either use CSS style or classList to either show or hide the model.
    ? I have used the both alternatives to illustration purposes.
    ? classList is much more concise.   
*/

const toggleModal = (element, classList) => element.classList.toggle(classList);

showModalBtns.map((btn) => {
  btn.addEventListener('click', () => {
    // modal.classList.contains('hidden')
    //   ? modal.classList.remove('hidden')
    //   : modal.classList.add('hidden');
    toggleModal(modal, 'hidden');
    toggleModal(overlay, 'hidden');
  });
});

closeModalBtn.addEventListener('click', () => {
  toggleModal(modal, 'hidden');
  toggleModal(overlay, 'hidden');
});

/*
  ? Keyboard events are called "Global events" and to listen to such events you call the entire document.
  ? Keyboard you have 
  ? 1) keyup[happens when you lift finger off keyboar], 
  ? 2) keydown[happens when you press down key] and 
  ? 3) keypress[Goes continuously as we keep finger on keyboard.] 
*/
