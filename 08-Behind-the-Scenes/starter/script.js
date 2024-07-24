'use strict';

/*
const calcAge = birthYear => {
  const age = 2037 - birthYear;

  const printAge = () => {
    const output = `${firstName} is ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Dumi';
      const str = `Oh,and you are also a millenial ${firstName}`;

      const add = (a, b) => {
        return a + b;
      };
      console.log(str); // block scoped
    }
    console.log(millenial); // var is function scope and it can be called outside block scope. var variables do not care about block scope.
    // console.log(add(2, 3)); // Functions are also block scoped but only on strict mode! if I can comment out use strict, I should be able to run function outside the block.
  };
  printAge();
  return age;
};

const firstName = 'Tshepo';
calcAge(1990);
*/

// TDZ Temporal Dead Zone and Hoisting

//console.log(me); // Variables deaclraed with var are hoisted but hoisted to undefined.
//console.log(job); // Cannot access before initialization
//console.log(year); // Cannot access before initialization

var me = 'Tshepo';
let job = 'Software Engineer';
const year = 1991;

// Functions Hoisting and TDZ

//console.log(addDeclaration(2, 5)); // Function declaration will be hoisted and will get the value.
//console.log(addExpression(2, 5)); // Function expression cannot access before initialization
//console.log(addArrow(2, 5)); // Arrow function cannot be access before initialization

/*
! If you change function expression and Arrow function to var they will be hoisted to undefined
? const and let declarations, cannot be accessed before initialization, simply because the function value is stored in the variable.
*/

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

/*
! Dangerous example of hoisting and using var keyword and function declaration 
*/

// console.log(numProduct);

// const numProduct = 0;

// const deleteShoppingCart = () => {
//   console.log('All products are deleted');
// };

// !numProduct ? deleteShoppingCart() : null;

// Variables created with var will create a property on global window object

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//this keyword

/*
 ! Arrow functions do not get this keyword.
 */
const employees = [
  {
    name: 'Gladwin',
    tshepo: function () {
      console.log(this);
      return `this employes name is: 🌟 ${this.name}`;
    },
  },
];

// console.log(employees[0].tshepo());

// Method borrowing

const dumi = {
  year: 2023,
};

dumi.tshepo = employees[0].tshepo; // This keyword always points to the object that's calling the method

/*
! arguments keyword exist only in regular functions not on arrow functions.
*/

function addDeclaration(a, b) {
  //console.log(arguments);
  return a + b;
}

// const addExpression = function (a, b) {
//   return a + b;
// };

const addArrow = (a, b) => {
  //console.log(arguments); // arrow function does not get this keyword
  return a + b;
};

addDeclaration(2, 5, 8, 9, 7); // argument keyword allows us to add more arguments even though we only specify two in the function. Thus we can loop through them and utilize the values if needed.
//addArrow(5, 2, 8, 9); // ReferenceError: arguments is not defined at arrow functions.
