'use strict';
/*
! FUNCTION DEFAULT PARAMETERS
*/

const bookings = [];

const createBooking = (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) => {
  /*
  ? ES5 SHORT CIRCUITING CREATING DEFAULT VALUES
  */
  // numPassangers ||= 1;
  // price ||= 199 * numPassangers;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  bookings.push(booking);
  // console.log(booking);
};

createBooking('LH123', 2);
createBooking('LH123', 5);
//createBooking('LH123', undefined, 400); // Skipping argument with undefined. It will take default value.
// console.log(bookings);
/*
? Passing by value and passing by reference on function.
? Unlike other languages, JS only pass by value. 
*/

// const flight = 'LH234';
// const tshepo = {
//   name: 'Tshepo Ramantso',
//   passport: 12345678910,
// };

// const checkIn = (flightNum, passanger) => {
//   tshepo.passport === 12345678910
//     ? console.log(`flight Number ${flightNum} it's for passenger ${passanger}`)
//     : console.log('Incorrect passport number');
// };

// checkIn(flight, tshepo['name']);

/*
! FIRST CLASS AND HIGH ORDER FUNCTIONS.
?JS treats functions as first class citizens
? this means functions are simply values 
? functions are just another type of objects. 
* HIGH ORDER FUNCTION is a function that receives another function as an argument or function that returns a new function OR BOTH e.g addEventListener() because we can pass a Callback function.
* and this is possible because of first class functions.
*/

const oneWord = (str) => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = (str) => {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};

/*
! High Order Function i.e. transformer
*/
const transformer = (str, fn) => {
  // console.log(`Original string: ${str}`);
  // console.log(`Transformed string: ${fn(str)}`);
  // console.log(`Transformed by: ${fn.name}`);
};

// upperFirstWord is the callback function, called by transformer on line 60
// transformer('JavaScript is the best!', upperFirstWord);
// console.log(transformedStr);
// oneWord is the callback function, called by transformer on line 60
// transformer('JavaScript is the best!', oneWord);

/*
? Another example of high order function, in this instance it would be AddEventListener()
? high5 function is the callBack function on AddEventListener
*/

const high5 = () => {
  // console.log('👋');
  // document.querySelector('.buy').textContent = '👋';
};

document.body.addEventListener('click', high5);

/*
? CallBack functions are used all the time in JS
? CallBack functions allow us to create Abstruction, 
*/

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

// greet('Hello')('Dumisani');
// greet('Dumela')('Mama');
// const greeterFn = greet('Hey');
// greeterFn('Bubu');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}, ${name}`,
    });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book; // Stored object function i.e. book into variable(this is possible because of first class function. Function stored into variable.)

// lufthansa.book(668, 'Dumisani Ramantso');
// lufthansa.book(668, 'Tshepo Ramantso');
// console.log(lufthansa);
/*
! CALL METHOD.
? call() first argument is where we want the this keywoard(i.e) to point too and than other arguments as per function
*/
// book.call(eurowings, 628, 'Ellen Mogotsi');
// console.log(eurowings);
// book.call(lufthansa, 104, 'Regionald Mogotsi');
// book.call(swiss, 2157, 'Dumisani Ramantso');
// book.call(swiss, 2157, 'Tshepo Ramantso');

/*
!APPLY METHOD.
? apply() does the same as call() except that it doesnt take the list of arguments but it an array of arguments.
* Again the first argument will be the (this) keywork, than array of arguments 👍
! the apply method is not used that much in modern JavaScript, instead you can use call method and spread data from array ⛔
*/
const flightData = [2157, 'Dineo Ramantso'];
// book.apply(swiss, flightData);
// book.call(swiss, ...flightData);

// console.log(lufthansa);
// console.log(eurowings);
// console.log(swiss);

/*
! BIND METHOD.
* This method is more important than the APPLY and CALL METHOD.
? The difference between BIND method and the other two methods, is than BIND does not immediately call the function, instead it returns the new function where the (this) keyword is bound.
*/

const bookEW = book.bind(eurowings);

// console.log(bookEW);
// bookEW(1043, 'Neo Mogotsi');
// console.log(eurowings);

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

/*
* Pre-set the flight number and only pass the second argument when calling the function.
? This is the common pattern called partial application.
*/

const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Nelly Ramantso');
// bookEW23('Tshepo Ramantso');
// bookEW(10, 'Mbali Ramantso');
// bookLX(10, 'Thandi Masimula');
// console.log(eurowings);

/*
! USING THE METHODS(APPLY, CALL AND BIND) WITH EVENT LISTENERS
*/

lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

const buyPlanes = lufthansa.buyPlanes;

const buyBtn = document.querySelector('.buy');

buyBtn.addEventListener('click', buyPlanes.bind(lufthansa));

// const addTax = (rate, value) => {
//   return value + value * rate;
// };
// console.log(addTax1(0.1, 200));

// const addVAT = addTax.bind(null, 0.15);
// console.log(addVAT(100));
// console.log(addVAT(23));

/*
 * CHALLENGE
? On both solutions the results are the same..
 */

// const addTax = (rate, value) => {
//   return value + value * rate;
// };

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
/*
? The variable above is the same as having addVAT function
! const addVAT = (value) => {
!  value + value * 0.23}
*/

// my solution
const addTax = (rate) => {
  return (value) => {
    return value + value * rate;
  };
};

const addVAT2 = addTax(0.23);

// console.log(addVAT2(100));
// console.log(addVAT2(23));

// // jonas solution
// const addTaxRate = (rate) => {
//   return (value) => {
//     return value + value * rate;
//   };
// };

// const addVAT = addTaxRate(0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

/*
 * CHALLENGE
 */
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = parseInt(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type) {
//     type ||= 'array';
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

/*
! IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
? One might create such function for scope purposes i.e data encapsulation
*/

// const runOnce = () => {
//   console.log('This will never run again');
// };

// runOnce();

// IIFE arrow function
(() => {
  // console.log('This will never run again');
})();

// IIFE regular function statement.
(function () {
  // console.log('This will ALSO never run again');
  // const isPrivate = 668;
})();

/*
! CLOSURES
*/
