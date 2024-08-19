'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Dumisani Ramantso',
  movements: [430, 1000, 700, 50, 90, 2000, 5800, 8500, -1850],
  interestRate: 1.5,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const insufficientFunds = document.querySelector('.funds');
const insufficientLoan = document.querySelector('.loan');
const closeBtnMsg = document.querySelector('.close__msg');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const sortMovs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  sortMovs.forEach((el, i) => {
    const type = el > 0 ? 'deposit' : 'withdrawal';

    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${el}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = (accounts) => {
  accounts.balance = accounts.movements.reduce((acc, element) => {
    return acc + element;
  }, 0);
  labelBalance.textContent = `${accounts.balance}€`;
  // console.log(accounts);
};

const calcDisplaySummary = (accounts) => {
  const totalIncomes = accounts.movements
    .filter((element) => {
      return element > 0;
    })
    .reduce((acc, element, index, arr) => {
      return acc + element;
    }, 0);
  labelSumIn.textContent = `${totalIncomes}€`;

  const totalOut = accounts.movements
    .filter((element) => {
      return element < 0;
    })
    .reduce((acc, element) => {
      return acc + element;
    }, 0);
  labelSumOut.textContent = `${Math.abs(totalOut)}€`;

  const totalInterest = accounts.movements
    .filter((element) => {
      return element > 0;
    })
    .map((element, index, arr) => {
      return (element * accounts.interestRate) / 100;
    })
    .filter((element, index, arr) => {
      // console.log(arr);
      return element >= 1; // Only add to total interest the current element that are above 1€
    })
    .reduce((acc, element, index, arr) => {
      // console.log(arr);
      return acc + element;
    }, 0);
  labelSumInterest.textContent = `${totalInterest}€`;
};

const createUserNames = (accounts) => {
  accounts.forEach((element) => {
    element.username = element.owner
      .toLowerCase()
      .split(' ')
      .map((el) => {
        return el.at(0);
      })
      .join('');
  });
};
createUserNames(accounts);

const updateUI = (account) => {
  // Display movements
  displayMovements(account.movements);
  // Display balance
  calcDisplayBalance(account);
  // Display summary
  calcDisplaySummary(account);
};

/*
! Event Handlers
*/
let currentAccount;
btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  // console.log('login');

  currentAccount = accounts.find((element) => {
    return element.username === inputLoginUsername.value;
  });
  // console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    //Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;

    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = `Incorrect login credentials`;
    containerApp.style.opacity = 0;
  }
});

btnTransfer.addEventListener('click', (event) => {
  event.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find((element) => {
    return element.username === inputTransferTo.value;
  });

  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';
  insufficientFunds.textContent = '';
  if (
    amount > 0 &&
    receiverAcc &&
    receiverAcc?.username !== currentAccount.username &&
    currentAccount.balance >= amount
  ) {
    // Doing transfers
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  } else {
    insufficientFunds.textContent = 'Insufficient Funds';
  }
});

btnLoan.addEventListener('click', (event) => {
  event.preventDefault();
  const amount = +inputLoanAmount.value;

  insufficientLoan.textContent = '';
  inputLoanAmount.value = '';

  if (
    amount > 0 &&
    currentAccount.movements.some((element) => {
      return element >= amount * 0.1;
    })
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    insufficientLoan.textContent = `Requested amount exceeds minimum deposit!`;
  }
});

btnClose.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex((element) => {
      return element.username === currentAccount.username;
    });

    // Delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
    // Reset Welcome text to original string.
    labelWelcome.textContent = 'Log in to get started';
  }

  // Empty fields error message.
  inputCloseUsername.value === '' && inputClosePin.value === ''
    ? (closeBtnMsg.textContent = 'Please enter account credentials')
    : null;

  // Clear the fields
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', (event) => {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/*
! CHALLENGE 1
*/

const checkDogs = (dogsJulia, dogsKate) => {
  const juliaCorrected = dogsJulia.slice();
  const correctJuliaArr = juliaCorrected.splice(1, 2);
  const concatJuliaKate = [...correctJuliaArr, ...dogsKate];
  concatJuliaKate.forEach((el, i) => {
    el >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${el} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/*
! CHALLENGE 2
*/
// const calcAverageHumanAge = (dogAges) => {
//   const humanAges = dogAges.map((element, index, arr) => {
//     return element <= 2 ? 2 * element : 16 + element * 4;
//   });
//   const adults = humanAges.filter((element, index, arr) => {
//     return element > 18 ? element : null;
//   });
//   const averageHumanAge = adults.reduce((acc, element, index, arr) => {
//     return Math.round(acc + element / arr.length);
//   }, 0);
//   return averageHumanAge;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1);
// console.log(avg2);

/*
! CHALLENGE 3
*/

const calcAverageHumanAge = (ages) => {
  return ages
    .map((element) => {
      return element <= 2 ? 2 * element : 16 + element * 4;
    })
    .filter((element, index, arr) => {
      return element > 18;
    })
    .reduce((acc, element, index, arr) => {
      return acc + element / arr.length;
    }, 0);
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1);
// console.log(avg2);

/*
! SLICE()
? THE SLICE ARRAY METHOD DOES NOT MUTATE THE ORIGINAL ARRAY 
*/
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr);
// console.log(arr.slice()); // shallow copy of the array with slice method
// console.log([...arr]); // shallow copy of arr with spread operator.
// console.log(arr.slice(1, 2));

/*
! SPLICE()
? WORKS THE SAME AS SLICE, HOWEVER, FUNDARMENTAL DIFFERENCE WITH SLICE THIS METHOD MUTATE THE ARRAY
*/

// console.log(arr.splice(2));
// console.log(arr);

/*
! REVERSE()
? REVERSE METHOD ALSO MUTATE THE ARRAY.
*/

// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());

/*
! CONCAT()
? THIS IS TO CONCACFTINATE TWO OR MORE ARRAYS
? YOU CAN ALSO USE SPREAD TO JOIN/ CONCAT
* I PREFER THE SPREAD OPERATOR MORE THAN CONCAT METHOD TO JOIN ARRAYS.
*/

// const letters = arr.concat(arr2);
// console.log(letters);
// const letters = [...arr, ...arr2.reverse()];

/*
! JOIN
? FOR COMPLETION PURPOSES I WILL USE JOIN METHOD, HOWEVER JOIN WILL RETURN A STRING 
*/
// const [first, ...rest] = letters;
// const upperCaseLetter = [first.toLocaleUpperCase(), ...rest];
// console.log(upperCaseLetter);
// console.log(letters); // => array
// console.log(letters.join(',')); // => string

/*
! AT()
? THE AT METHOD ALSO WORKS ON STRINGS.
? DIFFERENCE BETWEEN USING THE BRACKET NOTATION OR AT METHOD, IF YOU WANT TO USE METHOD CHAINGING AT METHOD WOULD BE PEFERCT. 
*/

// const arr = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr[0]);
// console.log(arr.at(0));

/*
? Getting the last element of the array, traditionally vs modern JS 
* at() also works on strings.
*/
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('Dumisani'.at(0));
// console.log('Dumisani'.at(-1));

/*
! LOOPING ARRAYS : FOREACH
? forEach method calls the function, it's not us calling the function, thus making forEach high order function.
? The callback function takes the current element of array as argument.
? The callback function pass : 1) The current element, 2) Index of the element, 3) And the entire array
! THE ORDER OF ARGUMENTS MATTERS. THEREFORE THE PARAMETER WILL ALWAYS BE FIRST PARAMETER IS ELEMENT, SECOND PARAMETER IS THE INDEX AND THIRD PARAMETER WILL BE THE ENTIRE ARRAY.
*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   movement > 0;
//   // ? console.log(`Movement ${i + 1}: You have deposited ${movement}`)
//   // : console.log(`Movement ${i + 1}: You have withdrew ${Math.abs(movement)}`);
// }
// // console.log('------ FOREACH -----');
// movements.forEach((el, i, arr) => {
//   el > 0;
//   // ? console.log(`Movement ${i + 1}: You have deposited ${el} 👍`)
//   // : console.log(`Movement ${i + 1}: You have withdrew ${Math.abs(el)} 👎`);
// });

/*
! FOREACH ON MAPS AND SETS
? forEach callback function on MAPS also takes three arguments 1) value  2) key 3) entire map [similar to arrays the first argument is the element, second parameter is key and third parament is entire array.] 
*/
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  // console.log(`${key}: ${value}`);
});

/*
!FOREACH LOOP ON SETS
? callback function on sets will also take three arguments i.e. value, key and entire map. However set doest's have index nor key thus the key will be the same as the value.
! _ this represents a throwaway variable( THIS IS A VARIABLE THAT'S COMPLETELY UNNECESSARY).
*/

const currenciesUnique = new Set([
  'USD',
  'GBP',
  'ZAR',
  'USD',
  'EUR',
  'EUR',
  'ZAR',
]);
// console.log(currenciesUnique);

currenciesUnique.forEach((value, _, map) => {
  // console.log(`${value}: ${value}`);
});

/*
! DATA TRANSFORMATION: MAP, FILTER, REDUCE
? These are methods we use to create new arrays based on transforming data from other arrays. 
*/

/*
! MAP, It is used to loop over arrays and it's similar to the forEach(), difference is that Map creates a  new array.
? Map returns a new array containing the results of applying an operation on all original array elements.
*/
const arr = [3, 1, 4, 3, 2];

// arr.map((el, index) => {
//   console.log(`Element at index ${index + 1} is ${el * 2}`);
// });

/*
! FILTER, It is used to filter for elemnets in an original array that satisfy a certain condition!
? Filter returns a new array containing the array elements that passed a specific test condition.
*/
// arr.filter((el, index) => {
//   el > 2
//     ? console.log(`Elements ${el} is greater than 2 and it's on index ${index}`)
//     : null;
// });

/*
! REDUCE, It is used to boil(reduce) all array elements down to a single value e.g adding all elements together
? Therefore there is no new array, only the reduced value will be returned.
*/

/*
! MAP
* forEach iteration log each element individually thus creating what is known as SIDE EFFECT, whereas map method puts all element into new array.
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// const movementsUSD = movements.map((element) => {
//   return Math.round(element * eurToUsd);
// });
// console.log(movements);
// console.log(movementsUSD);

// const newArr = [];
// for (const movement of movements) {
//   newArr.push(Math.round(movement * eurToUsd));
// }
// console.log(newArr);

// const movesUSD = movements.map((element, index) => {
//   return `Movement ${index + 1}: You ${
//     element > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(element)}`;
// });

// console.log(movesUSD);

/*
! Messing around with map and forEach iterations...
*/

// const movementUsd = movements.map((element, index) => {
//   return ` Movement ${index + 1}: You ${
//     element > 0 ? 'deposited' : 'withdrew'
//   } ${element} `;
// });

// for (const movement of movementUsd) {
//   console.log(movement);
// }

/*
! FILTER
? Reason why you would use either Filter or Map method, it's because modern JS is moving towards more functional programming and you aolso have the ability to chain other methods. 
*/

/*
 * On two filter examples below, you might choose to return a boolen by explicit if statement or implicit. For readability and understanding I prefer explicit approach.
 */

const deposits = movements.filter((el) => {
  return el > 0 ? el : null; // explicit
});
// console.log(deposits);

const withdrawals = movements.filter((element) => {
  return element < 0; // implicit
});

// console.log(withdrawals);

const depositsArr = [];
for (const mov of movements) {
  mov > 0 ? depositsArr.push(mov) : null;
}
// console.log(depositsArr);

/*
! REDUCE
? Unlike MAP, forEach and Filter, the first argument on reduce callback function is the accumulator.
? The second or another argument of reduce it's the initial value of the accumulator.
*/

const balance = movements.reduce((acc, element, index, arr) => {
  // console.log(`Iteration ${index}: ${acc}`);
  return acc + element;
}, 0);
// console.log(balance);

let balanceFor = 0;
for (const [index, balance] of movements.entries()) {
  // console.log(`Iteration ${index}: ${balanceFor + balance}`);
  balanceFor += balance;
}
// console.log(balanceFor);

/*
! Getting max value in array with reduce method
*/

// const max = movements.reduce((acc, element) => {
//   return acc > element ? acc : element;
// }, movements.at(0));

// console.log(movements);
// console.log(max);

/*
! CHAINING METHODS
* You can only chain when the result of the first method returns an array. filter and map both returns new arrays however reduce returns a value.
! DO NOT CHAIN TONES OF METHODS ONE AFTER ANOTHER, THAT MAY CAUSE PERFORMANCE ISSUES.
! IT IS ALSO BAD PRACTICE TO CHAIN METHODS THAT MUTATES THE ORIGINAL ARRAY, METHODS SUCH AS SPLICE AND REVERSE... 
*/

const totalDepositsUSD = movements
  .filter((element) => {
    return element > 0;
  })
  .map((element, index, array) => {
    // console.log(array)
    return Math.round(element * eurToUsd);
  })
  .reduce((acc, element) => {
    return acc + element;
  }, 0);

// console.log(totalDepositsUSD);

/*
! FIND METHOD
* WE CAN USE THIS METHOD TO RETRIVE ELEMENT ON AN ARRAY BASED ON CONDITION.
? THIS METHOD WILL RETURN THE FIRST ELEMENT THAT MEETS THE SPECIFIED CONDITION WHEREAS FILTER WILL RETURN ALL ELEMENTS THAT MEETS THE CONDITION
? FILTER WILL RETURN A NEW ARRAY WHEREAS FIND RETURNS THE ELEMENT ITSELF NOT AN ARRAY.
*/

// const sortMov = movements.sort((a, b) => {
//   return a > b ? 1 : -1;
// });
const firstWithdrawal = movements.find((element, index, arr) => {
  return element < 0;
});
// console.log(movements);
// console.log(`You first withdrawal ${firstWithdrawal}`);

// console.log(accounts);

const account = accounts.find((element) => {
  return element.owner === 'Jessica Davis';
});
// console.log(account);

for (const account of accounts) {
  // console.log(account);
  // account.owner === 'Jessica Davis' ? console.log(account) : null;
}

/*
! FIND INDEX METHOD
? WORKS TTHE SAME AS FIND METHOD, HOWEVER FINDINDEX RETURNS THE INDEX OF THE ELEMENT NOT THE VALUE OF ELEMENT. 
*/

/*
! SOME METHODS
? SOME METHODS TEST A CONDITION AS OPPOSED TO INCLUDES METHOD THAT TEST FOR EQUALITY.
*/
// console.log(movements);
// With includes method we checking for equality
// console.log(movements.includes(-130));

// console.log(
//   movements.some((element) => {
//     return element === -130;
//   })
// );

// some method will check for specified condition.
const depositsCheck = movements.some((element) => {
  return element > 0;
});

// console.log(depositsCheck);

/*
! EVERY METHOD
? SAME AS SOME, BUT EVERY ONLY RETURNS TRUE IF ALL ELEMENTS IN THE ARRAY SATISFY THE CONDITION.
*/

// console.log(movements.every((ele) => ele > 0));

const positiveDep = account4.movements.every((ele) => {
  return ele > 0;
});
// console.log(positiveDep);

/*
? MIND GRENADE
*/
const deposit = (element) => {
  return element > 0;
};

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/*
! FLAT METHOD
? THIS RETURNS NESTED ARRAY INTO FLAT ONE ARRAY
* No callBack function is required!
* Flat method can only go one level on deep nested arrays!
? deep nested arrays you can change the depth value, by default it's 1. so deppending how deep nested the array is depth could be passed as parameter i.e flat(2).
*/

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(array.flat());

const arrayDeep = [
  [1, 2, 3],
  [4, 5, 6],
  [
    [7, [8, 9]],
    [[10, 11], 12],
  ],
];

// console.log(arrayDeep.flat(3));

//flat

const overalBalance = accounts
  .map((element, index, array) => {
    return element.movements;
  })
  .flat()
  .reduce((acc, element, index, array) => {
    return acc + element;
  });

// console.log(overalBalance);

// flat map [NOTE flatMap ONLY GOES ONE LEVEL DEEP, SO IF YOU NESTED ARRAY, YOU BEST BET IS FLAT WITH DEPTH PARAMETER]
const overalBalance2 = accounts
  .flatMap((element) => {
    return element.movements;
  })
  .reduce((acc, element) => {
    return acc + element;
  }, 0);
// console.log(overalBalance2);

/*
! SORTING ARRAYS
? This method mutates the original array.
* Ordianry sort method wont yeld disired results on numbers, we can use the COMPARE SORT CALLBACK FUNCTION TO SORT NUMBERS.
* THIS CALLBACK FUNCTION IS CALLED WITH TWO ARGUMENTS, these arguments are essentially the current value and the next value in the array.
! In this anonymous function if we return < 0 the value a will be sorted before b and vice versa

*/
// String

const owners = [
  'Zack',
  'Tshepo',
  'Dumisani',
  'Ellen',
  'Anele',
  'Lebogang',
  'Kganya',
];
// console.log(owners.sort());

// Numbers
// console.log(movements);

// return < 0 than A before B
// return > 0 than B before A

// ASCENDING
// console.log(movements);
movements.sort((a, b) => {
  // return a < b ? -1 : 1;
  // return a - b;
});

// console.log(movements);

// DESCENDING
movements.sort((a, b) => {
  // return a > b ? 1 : -1;
  // return b - a;
});

// console.log(movements);

/*
! CREATING ASND FILLING ARRAYS
* THE NEW ARRAY CONSTRUCTOR IF YOU PASS IN A SINGLE VALUE, IT WILL CREATE AN EMPTY ARRAY WITH THE LENGTH OF THE VALUE YOU'VE PASSED E.G const x = new Array(7) => this will result in empty array with length of 7
* To add values, you can use the fill method(), this method works like slice, in the parameters you can pass the index where values should start and end.
* You can fill existing arrays
! Array.from takes two arguments, the first being an object with the length of array and the second argument is the callback function
!The callback function, like map method it takes the 1) current element, 2) index and 3) array however the current element might not be useful and thus you could use the throwaway variable i.e _  
*/
// fill
const x = new Array(7);
x.fill(2, 2, 5);
// console.log(x);

const fillArr = [1, 2, 3, 4, 5, 6, 7];
fillArr.fill(23, 2, 4);
// console.log(fillArr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

/*
? In the example below, the order of acclback arguments matters, hance current element even though it's not being used, however it can be replaced by throwaway.
*/
const newArray = Array.from({ length: 7 }, (_, index) => {
  return index + 1;
});
// console.log(newArray);

const diceRolls = Array.from({ length: 7 }, (_, index) => {
  return Math.floor(index + Math.random() * 100);
});
// console.log(diceRolls);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (element) => +element.textContent.replace('€', '')
  );
  // console.log(movementsUI);
});

const numDeposits1000 = accounts
  .flatMap((element) => {
    return element.movements;
  })
  .filter((element) => {
    return element >= 1000;
  });

// console.log(numDeposits1000.length);

//Prefixed ++ operator
const numDeposits2 = accounts
  .flatMap((element) => {
    return element.movements;
  })
  .reduce((acc, element) => {
    return element >= 1000 ? ++acc : acc;
  }, 0);

let a = 10;
// console.log(++a);
// console.log(numDeposits2);

// const sums = accounts
//   .flatMap((element) => {
//     return element.movements;
//   })
//   .reduce(
//     (acc, element) => {
//       element > 0 ? (acc.deposits += element) : (acc.withdrawals += element);
//       return acc;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(sums);

// const titleCaseConvertion = (title) => {
//   const exceptions = ['a', 'but', 'an', 'the', 'or', 'with', 'in'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map((element) => {
//       return exceptions.includes(element)
//         ? element
//         : element[0].toUpperCase() + element.slice(1);
//     });
//   return titleCase.join(' ');
// };

// console.log(titleCaseConvertion('this is a nice title'));
// console.log(
//   titleCaseConvertion('in another turn of events with these examples titles')
// );
// console.log(
//   titleCaseConvertion(
//     "this is another LONG title with Title that doesnt make any sense but it's a great example or not "
//   )
// );
