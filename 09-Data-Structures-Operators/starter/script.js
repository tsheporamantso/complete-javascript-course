'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const getCode = function (str) {
//   str.slice(0, 3).toUpperCase();
// };
// console.log(getCode('fao93766109'));

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(60);
  console.log(output);
}

// Data needed for first part of the section

//ES6 enhancement on object literal
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(categoryIndex, starterIndex, mainIndex) {
    return [
      this.categories[categoryIndex],
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
    ];
  },

  // ES6 enhanced object literal
  openingHours,

  // ES6 enhanced object literal on functions.
  orderDelivery({
    categoryIndex = 0,
    starterIndex = 0,
    mainIndex = 0,
    time = '20:00',
    address = 'Roodekrans,Roodepoort',
  }) {
    return `Order received! \n${this.categories[categoryIndex]} category: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} pronto!`;
  },

  orderPasta(ing1, ing2, ing3) {
    return `Here is your delicious pizza with ${ing1}, ${ing2} and ${ing3}`;
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
! Passing object of options (passing obj as parameter on function and calling it with options.)
*/
// const delivery = restaurant.orderDelivery({
//   time: '22:30',
//   address: '2157 Makutso Street Rockville',
//   categoryIndex: 0,
//   mainIndex: 1,
//   starterIndex: 1,
// });

/*
! Calling function without parameters, relying on default values.
*/
// const delivery2 = restaurant.orderDelivery({});

// console.log(delivery);
// console.log(delivery2);

/*
? ARRAY DESTRUCTURING
*/

/*
! This is unpacking values from array into other variables e.g
* e.g const arr = [1, 2, 3] and you want to save each value in the array on it's own variable.
* Without desctructuring you will have to declare new variable for each item with it's index number i.e
    * const a = arr[0]  
    * const b = arr[1] 
    * const c = arr[2] 
    ? console.log(a, b, c) ===> 1 2 3
* However with destructuring it is simplfied
    * const [a, b, c] = arr 
    ? console.log(a, b, c) ===> 1 2 3
! Desctructuring can be considered as breaking a complex data structure down into smaller simple data structure or variables.
? To destructure arrays we use []
*/

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

/*
 * Switching variables.
 */
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

/*
 * Receive values from function.
 */
// console.log(restaurant.order(0, 1, 1));

// const [category, starter, mainCourse] = restaurant.order(0, 1, 1);
// console.log(`${category}, ${starter} and ${mainCourse}`);

/*
 * nested destructuring
 */
// const nested = [2, 3, [4, 9]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

/*
 ! Default values
*/
/*
? This would be a situation where you not aware of the length of your array and you destructure 3 items in an array of 2 items!, the last item will be undefined, thus you could set default value no your destructured items.
! In the example below 1 will be the default value instead of undefined for the third item destructed.
*/
// const [a = 1, b = 1, c = 1] = [8, 9];
// console.log(a, b, c);

/*
! OBJECT DESTRUCTORING
*/
/*
? To destructure object we use {}, than provide the variables names that exactly match the property names of objects that you want to destructure.
! Remember the order in object doesnt matter
*/

// const { name, openingHours, categories } = restaurant;
// console.log(name);

/*
? If you want to change object name from third party data such API(Application Programming Interface)
*/
// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(resturantName, hours, tags);

/*
? setting default value with = sign and name changing
*/
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

/*
? Mutating variables
*/
// let a = 112;
// let b = 226;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

/*
? Nested objects
*/
// const { fri } = restaurant.openingHours;
// console.log(fri);

// const {
//   fri: { open: oh, close: co },
// } = restaurant.openingHours;
// console.log(oh, co);

/*
! SPREAD OPERATOR )
 
*/

// const arr = [7, 8, 9];
/*
 ! A very painful way of creating a new array, without spread operation. ⛔
*/
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

/*
 ? Great way of creating new array with spread operator. ✔️
*/
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

/*
? New Memu creation by spreading or expanding the existing menu and adding new food. 
*/
// const newMenu = [...restaurant.mainMenu, 'Burger'];
// console.log(newMenu);

/*
? Adding new Memu in restaurant object using bracket notation 
*/
// restaurant['newMenu'] = newMenu;
// console.log(restaurant);

/*
 * Copy Array
 */
// const mainMenuCopy = [...restaurant.mainMenu];

/*
 * Joining 2 or more arrays with spread operation! (I used concat method).
 */
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// const menu = [restaurant.starterMenu.concat(restaurant.mainMenu)];
// console.log(menu);

/*
! Iterables are: arrays, sets, strings, maps. NOT objects, thus you can spread iterables but not objects.
*/

// const str = 'Tshepo';
// const letters = [...str, '', 'R.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);
/*
! Verbose manner of getting ingredients ⛔
*/
// const pastaMaking = restaurant.orderPasta(
//   ingredients[0],
//   ingredients[1],
//   ingredients[2]
// );
/*
 * Easier way using spread operator ✔️
 */
// const pastaMaking = restaurant.orderPasta(...ingredients);
// console.log(pastaMaking);

/*
! Spread operator on objects
? Making a shallow copy of restaurant object 
*/

// const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'Dumisani' };
// console.log(newRestaurant);

/*
? Making a shallow copy of restaurant object 
*/

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Bon Appetite';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/*
! REST PATTERN AND REST PARAMETERS 
? Ther rest bacically collect the rest of elements that are unused in destructuring assisgment! (see line 268)
*/

/*
 * REST DESCTRUCTURING
 */

/*
! SPREAD, because it's on the right side of =[assignment operator]
*/
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
/*
! REST, because it's on the left side of =[assignment operator]
*/

/*
 * REST DESCTRUCTURING
 */
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFoods);

// const {
//   sat: { open: o, close: c },
//   ...weekDays
// } = { ...restaurant.openingHours };

// console.log(o, c);

/*
 * REST FUNCTIONS
 */

// const add = (...rest) => {
//   let sum = 0;
//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }
//   return sum;
// };

// console.log(add(5, 6));
// console.log(add(9, 10, 52, 20));
// console.log(add(8, 2, 7, 9, 6, 5, 3));

// const x = [23, 7, 5];

// console.log(add(...x));

// restaurant.orderPizza('mushrooms', 'olives', 'onions', 'tomato', 'chicken');
// restaurant.orderPizza('mushroom');

/*
! SHORT CIRCUTING  (&& AND ||) OPERATORS
? They can USE any data type, RETURN any data type and SHORT-CIRCUITING aka short circuit evaluation
*/

//console.log('------OR--------');
/*
? in OR(||), if the first value is the truty value it will immediately return that value and not evaluate the rest.
*/
// console.log(3 || 'Tshepo');
// console.log('' || 'Tshepo');
// console.log(true || 0);
// console.log(undefined || 3 || undefined || 0 || '' || 'Tshepo');

/*
 * In the scenario below we took the first truty value in the chain of values or operants.
 */
// console.log(undefined || 0 || '' || 'Tshepo' || 23 || null);

/*
? Setting a default value using ternary operator ⛔.
*/
// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

/*
? Setting a default value using short circuit evaluation ✔️
*/
// const guest = restaurant.numGuests || 10;
// console.log(guest);

/*
? Nullish coalescing operator: null and undefined (NOT 0 or '') ✔️
*/
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//console.log('------AND--------');
/*
? the AND(&&) short circuit if the first operant is falsey and immediately return that value.
*/

// console.log(0 && 'Tshepo');
// console.log(7 && 'Tshepo');

/*
 * Practical Example
 */
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'cheese');
// }

/*
? In the example below I am basically saying if the function doesnt exist short circuit(Dont continue with the evaluation), However if it exist evaluate the second part.
*/
// const order =
//   restaurant.orderPizza && restaurant.orderPizza('mushroom', 'cheese');
// console.log(order);

/*
? the OR(||) short circuit (assignment operator).
*/

// const rest1 = {
//   name: 'Tshepo La Pizza',
//   // numGuests: 10,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Sgudi Snice',
//   owner: 'Dumisani',
// };
/*
? Short Circuiting number of guests, verbose ⛔ .
*/
// rest1.numGuests = rest1.numGuests || 20;
// rest2.numGuests = rest2.numGuests || 20;
/*
? With latest logiccal operator short circuiting can be wrtitten in most concise manner ✔️
*/
// rest1.numGuests ||= 20;
// rest2.numGuests ||= 20;
/*
? OR(||) Nullish coalescing to deal with 0 number of guests  ✔️
*/
// rest1.numGuests ??= 20;
// rest2.numGuests ??= 20;
/*
? AND(&&) Operator Short Circuit  ✔️
*/
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = '<ANONYMOUS>' && rest1.owner;
/*
? AND(&&) Nullish coalescing to deal with 0 number of guests  ✔️
*/

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/*
              ! CHALLENGE 1
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    return `${players.length} goals were scored by ${players}`;
  },
};

// const odds =
//   game.odds.team1 < game.odds['team2'] &&
//   console.log("Team 1 has lower odds and it's likely to win");

// const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const data1 = game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// const data2 = game.printGoals(...game.scored);
// console.log(data1);
// console.log(data2);

// team1 < team2 && console.log('Team 1 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

/*
 * Regular for loop
 */
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }
/*
 * for-of loop, in this loop you will have to call entries method() to get index of items.
 */
// for (const item of menu) {
//   console.log(item);
// }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
/*
 * forEach loop
 */
// menu.forEach(e => {
//   console.log(e);
// });

/*
! Optional Chaining
? Optional chaining works in this manner, only if the properties before the ? exist then it will continue with the evaluation else it will return undefined immedietly.
* Keep in mind, a property exist if it's not null or undefined. An empty string or 0 they exist.
? You can have multiple optional chaining.
*/
// const workHours = restaurant.openingHours.mon?.open;
// console.log(restaurant.openingHours?.mon?.open);
// console.log(workHours);

// const resHours =
//   restaurant.openingHours.fri && restaurant.openingHours.fri.open;
// console.log(resHours);

/*
! side note .day is not the property of the object, thus use bracket notation for the variable.
*/
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(`on ${day}, we open at ${open}`);
// }

/*
! Optional Chaining on Methods
? You can check if method exists and use nullish coaleising for default value
*/

// console.log(restaurant.order?.(0, 1, 1) ?? 'Method does bot exist');
// console.log(restaurant.orderRisotto?.(0, 1, 1) ?? 'Method does bot exist');

/*
! Optional Chaining on Arrays
*/

// const users = [
//   {
//     name: 'Tshepo',
//     email: 'tgramantso@gmail.com',
//   },
// ];
// console.log(users[1]?.name ?? 'User array empty');

/*
! Looping Objects
*/

/*
? PROPERTIES
*/

// const properties = Object.keys(openingHours);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

/*
? VALUES
*/

// const values = Object.values(openingHours);
// console.log(values);

/*
? ENTIRE OBJECT i.e. KEYS AND VALUES
*/

// const entries = Object.entries(openingHours);

// for (const [key, { open: o, close: c }] of entries) {
//   console.log(`On ${key} we are open at ${o} and close at ${c}`);
// }

// restaurant?.orderPizza && restaurant.orderPizza('Chicken', 'Mushroom');

// const workHours =
//   restaurant.openingHours?.thu && restaurant.openingHours.thu.open;
// console.log(workHours);

// const sat =
//   restaurant.openingHours.sat?.open && console.log('We not open on Monday!');
// console.log(sat);
// if (restaurant.openingHours.mon) {
//   restaurant.openingHours.mon.open;
// } else {
//   console.log('We not open on Mondays');
// }
// console.log(restaurant.openingHours?.mon?.open);

/*
! CHALLENGE 2
*/
// 1.
// const entries = game.scored.entries();

// for (const [i, player] of entries) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
// // 2.
// const oddAvg = Object.values(game.odds);
// // console.log(...values);
// let average = 0;
// for (const odds of oddAvg) {
//   average += odds / oddAvg.length;
// }
// console.log(average);

// //3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

/*
! SETS
*/

/*
? Set it's a collection of unique values. Set cannot have duplicates. 
? Set looks like array but its different from them because the values are unique and order is irrelavent.
? You can get the size with the .size keyword , NB it's size not length.
? The main use case of sets is to remove duplicates in an array
* constructor for set is. new Set() 
*/

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risitto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Gladwin'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Chips'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Chef', 'Waiter', 'Chef', 'Manager'];
// If you want to convert set into array you can use spread operator.
// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);

// console.log(
//   new Set(['Waiter', 'Manager', 'Chef', 'Waiter', 'Chef', 'Manager']).size
// );
// console.log(new Set('DumisaniRamantso').size);

/*
! MAPS, This is a data structure that we can use to map values to key.
? Just like object data is stored in key value pairs in maps the difference between object and maps is that key can have any data type in map!
* constructor for maps is. new Map()
* The easiest way to create a new map is to just create an empty map without passing anything in. i.e. const restaurant = new Map()
* To add data into Map we use set()method, You can also chain the set method.
* To retrive we use get()method and pass key.
* To check use has()method
* To delete use delete()method
* To erase use clear()method
* To get length use size()method
*/

/*
! MAP FUNDAMENTALS
*/
// const rest = new Map();

// rest.set('name', 'Gawula Nice');
// rest.set(1, 'Rockville');
// console.log(rest.set(2, 'Weltevrede Park'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(2));

// const time = 8;

// const opHours = rest.get(time > rest.get('open') && time < rest.get('close'));
// console.log(opHours);

// console.log(rest.has('categories'));
// console.log(rest.size);
// // rest.delete(1);
// // rest.clear();
// rest.set(document.querySelector('h1'), 'Heading');
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// console.log(rest);

/*
! MAP ITERATIONS
*/

const quiz = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'Ruby'],
  [2, 'JavaScript'],
  [3, 'Java'],
  ['correct', 2],
  [true, 'Correct 🎉'],
  [false, 'Try Again 🚫'],
]);

// console.log(quiz.get('question'));
// for (const [key, value] of quiz) {
//   typeof key === 'number' ? console.log(`Answer ${key}: ${value}`) : null;
// }
// const answer = +prompt('Your answer!');
const answer = 3;
// console.log(quiz.get(quiz.get('correct') === answer));
// console.log(quiz);

/*
? Object.entries()method, has the same structure as Maps i.e array of arrays. 
?Making it easy to convert object into map.
* To convert map back into array use spread operator.
*/
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(...quiz);

/*
! CHALLENGE 3
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
// console.log(...gameEvents);

//1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//2.
// gameEvents.delete(64);
// console.log(gameEvents);

//3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

//4.
// for (const [min, event] of gameEvents) {
// min < 45
//   ? console.log(`[FIRST HALF] ${min}: ${event}`)
//   : console.log(`[SECOND HALF] ${min}: ${event}`);

//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

/*
! STRINGS  METHODS
*/
const airline = 'South African Airways';

// const plane = 'A320';
// console.log(airline.lastIndexOf('A'));

// console.log(airline.slice(13));
const domText = document.querySelector('h1');

const middleSeat = (seat) => {
  //   const seatAllocated = seat.slice(-1);
  //   seatAllocated === 'B' || seatAllocated === 'E'
  //     ? console.log('You got the middle seat 🤕')
  //     : console.log('You got lucky 😎');
  /*
  ! MY ALTERNATIVE SOLUTION
  */
  seat.includes('B') || seat.includes('E')
    ? (domText.textContent = 'You got the middle seat 😵')
    : (domText.textContent = 'You got lucky 😎');
};

// middleSeat('11B');
// middleSeat('23C');
middleSeat('2E');

const passenger = 'tShEpO';

const passengerName = (name) => {
  const passengerLower = name.toLowerCase();
  const passengerCorrect = passengerLower.replace(
    passengerLower[0],
    passengerLower[0].toUpperCase()
  );
  //passengerLower[0].toUpperCase() + passengerLower.slice(1);
  // console.log(passengerCorrect);
};
passengerName(passenger);
passengerName('dUMISANI');

// Comparing emails
const email = 'hello@gmail.com';
const loginEmail = '   Dumi@GMAIL.com \n';

const emailComp = (email1, email2) => {
  const email = email1;
  const normalizedEmail = email2.toLowerCase().trim();
  return email === normalizedEmail;
};

// console.log(emailComp(email, loginEmail));

// Replacing
const priceGB = '288,98£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

const announcement =
  'All passengers come to the boarding door 23. I repeat boarding door 23';

// console.log(announcement.replaceAll('door', 'gate'));
/*
! You can also regex[regular expression]
*/
// console.log(announcement.replace(/door/g, 'gate'));

/*
 ? 3 string methods that returns booleans i.e includes(), startsWith(), endsWith()  
 */
const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Airbus'));
// console.log(plane.endsWith('neo'));

plane.startsWith('Airbus') && plane.endsWith('neo');
// ? console.log('Part of the new Airbus Family')
// : console.log('Not part of Airbus Family');

const checkBaggege = (items) => {
  const baggage = items.toLowerCase();
  // baggage.includes('knife') || baggage.includes('gun')
  //   ? console.log('Forbidden Items ⛔, you are NOT allowed to board.')
  //   : console.log('Welcome aboard! 👍');
};

checkBaggege('I have Knife, a Laptop and some Food');
checkBaggege('I hace some socks and camera');
checkBaggege('I got some snacks and a GUN for some protection');

/*
! STRINGS PART 3
*/
/*
? split() and join()
*/
// console.log('a+very+nice+string'.split('+'));
// console.log('Tshepo Ramantso'.split(' '));

const [firstName, lastName] = 'Tshepo Ramantso'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const capitalizeName = (name) => {
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return namesUpper.join(' ');
};

// console.log(capitalizeName('dumisani ramantso'));
// console.log(capitalizeName('tshepo gladwin ramantso'));
// console.log(capitalizeName('tshePo glaDWin ramaNtso'));

/*
? PADDING STRING
? string padding takes two arguments. First one is the number of the entire string and the second is character you want to pad with. 
*/

const message = 'Go to gate 23';

// const padding = message.padStart(25, '+').padEnd(30, '+');
// console.log(padding);
// console.log('Tshepo'.padStart(25, '+').padEnd(30, '+'));

const muskedCreditCard = (number) => {
  const str = String(number);
  const lastNumbers = str.slice(-4);
  return lastNumbers.padStart(str.length, '*');
};

// console.log(muskedCreditCard(66547125));
// console.log(muskedCreditCard(6654712556654));
// console.log(muskedCreditCard('66547125555621564898898645564'));

/*
? REPEAT STRING
? This method would allow us to repeat the same string multiple times. 
*/

const alertMessage = 'Bad weather all Departues Delayed...! ';

// console.log(alertMessage.repeat(5));

const planesInLine = (n, terminal) => {
  return `There are ${n} planes in line, [${'✈️'.repeat(
    n
  )}] waiting for take off! in terminal ${terminal}`;
};
// console.log(planesInLine(2, 2));
// console.log(planesInLine(5, 23));
// console.log(planesInLine(12, 16));

const textArea = document.body.append(document.createElement('textarea'));
const btn = document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
