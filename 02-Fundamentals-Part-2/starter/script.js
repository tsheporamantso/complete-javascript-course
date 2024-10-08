"use strict";

// let hasDriversLicense = false
// const passTest = false

// if (!passTest) {
//   hasDriversLicense = true
// }

// if (hasDriversLicense) console.log('Yay I can drive!')
// const firstName = (name) => {
//  return `Hello my name is ${name}`
// }

// console.log(firstName('Tshepo'))
// console.log(firstName('Dumisani'))

// const juiceProcessor = (fruit1, fruit2) => {
//   const juice = `Juice made with ${fruit1} apples and ${fruit2} bananas favours`
//   return juice
// }

// // console.log(juiceProcessor('apples', 'bananas'))
// console.log(juiceProcessor( 5, 8))

// const str = parseInt('23')

// /*
// ! Arrow Function
// */
// const calcAge = (birthYear) => {
//   return `You are ${2037 - birthYear} years old`
// }

// /*
//  ? Function Declaration, it can e called before function.
// */
// console.log(calcAge1(1991))

// function calcAge1(birthYear) {
//   return `You are ${2037 - birthYear} years old`
// }

// /*
//  ? Function Expression or anonymous function
// */
// const calcAge2 = function(birthYear) {
//   return `You are ${2037 - birthYear} years old`
// }

// // const age =
// console.log(calcAge2(1991))

// const yearsUntilRetirement = (currentYear,birthYear, firstName) => {
//   const retirementAge = 65
//   const age = currentYear - birthYear
//   const retirement = retirementAge - age
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2037,1991,'John'))
// console.log(yearsUntilRetirement(2037,1980,'Jane'))
// console.log(yearsUntilRetirement(2024,1983,'Tshepo'))

// const cutPieces = (fruit) => {
//   return fruit * 4
// }

// const fruitProcessor = (apples, oranges) => {
//   const applePieces = cutPieces(apples)
//   const orangePieces = cutPieces(oranges)
//   const juice = `Juice with ${applePieces} pieces of apples and with ${orangePieces} pieces of oranges`
//   return juice
// }

// console.log(fruitProcessor(2, 4))

/*
const calcAverage = (firstScore, secondScore, thirdScore) => {
  const score = Math.floor((firstScore + secondScore + thirdScore) / 3)
  return score
}

const scoreDolphins = calcAverage(85, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)

console.log(`Dolphins average score ${scoreDolphins}`)
console.log(`Koalas average score ${scoreKoalas}`)

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${ avgDolphins} vs ${avgKoalas})`
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${ avgKoalas} vs ${avgDolphins})`
  } else {
    return `No winner`
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas))
*/

// Data Structures (Two most common and basic are arrays and Objects)

// const friends = new Array('Dumi', 'Tshepo', 'Moagi')
// friends.push('Neo')
// console.log(friends)

// friends.unshift('Kgomotso')
// console.log(friends)

// friends.push('Xolani')
// friends.unshift('Sanza')

// console.log(friends)

// const popped = friends.pop()
// console.log(popped)

// console.log(friends)
// const shifted = friends.shift()
// console.log(shifted)

// console.log(friends)

// const dumi = friends.indexOf('Dumi')
// console.log(dumi)

// const years = [1990, 1983, 2023]
// console.log(years.length)
// console.log(years[years.length - 1])

// const bills = new Array(125, 555, 44);

// const calcTip = (bill) => {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// console.log(bills)
// console.log(tips);

/*
    !This approach is much cleaner
*/
// const totals2 = [bills[0] + tips[0] ]

// const totals = [ //This is messy approach even though it works.
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[bills.length - 1]) + bills[bills.length - 1],
// ];

// console.log(totals);
// console.log(totals2)
// const date = new Date();
// // console.log(date)
// const currentYear = date.getFullYear();
// const birthYearsArr = [2010, 1990, 1994, 1983, 1985];

// /*
// ! bracket notation using variable concatinanted with part of key
// */
// // console.log(currentYear)

// // const calcAge = (birthYear) => {
// //   return currentYear - birthYear;
// // };

const nameKey = "Name";
// const employees = [
//   {
//     firstName: "Tshepo",
//     lastName: "Ramantso",
//     birthYear: birthYearsArr[3],
//     job: "Software Engineer",
//     brothers: ["Dumisani", "Moagi", "Neo", "Kgomotso", "Lesego"],
//     hasDriversLicense: false,
//     // calcAge: (birthYear) => {
//     //   return currentYear - birthYear
//     // },
//     // calcAge: function () {
//     //   console.log(this)
//     //   return currentYear - this.birthYear;
//     // },
//     calcAge: function () {
//       /*
//       ! age propery creation and storing the expression(could either use bracket or Dot notation to create property.)
//       */
//       this["age"] = currentYear - this.birthYear;
//       return this["age"];
//     },
//     getSummary: function () {
//       return `${this["first" + nameKey]} is ${this.calcAge()}-years old ${
//         this.job
//       } and ${
//         this.hasDriversLicense
//           ? "has drivers license"
//           : "he does not have a drivers license"
//       }`;
//     },
//   },
//   {
//     firstName: "Dumisani",
//     lastName: "Ramantso",
//     birthYear: birthYearsArr[1],
//     job: "Software Engineer",
//     brothers: ["Tshepo", "Moagi", "Neo", "Kgomotso", "Lesego"],
//   },
// ];

// employees[0].location = "South Africa";
// employees[1].location = "South Africa";
// employees[1]["tweeter"] = "@sgudi001";
// employees[1].hasDriversLicense = true;
// employees[0]["tweeter"] = "@tshepi14c";
// employees[1].calcAge = function () {
//   this.age = currentYear - this.birthYear;
//   return this.age;
// };
// employees.push({
//   firstName: "Neo",
//   lastName: "Mogotsi",
//   birthYear: birthYearsArr[2],
//   job: "Electrician",
//   location: "South Africa",
//   tweeter: "@teddy001",
//   hasDriversLicense: true,
//   calcAge: function () {
//     return currentYear - this.birthYear;
//   },
// });

// // if(employees[0].calcAge(employees[1].birthYear) >= 18) {
// //   console.log(`${employees[0].hasDriversLicense}, ligable to drive a vehicle`)
// // } else {
// //   console.log(`Underage, not legible to have drivers license`)
// // }

// // console.log(employees[0].firstName, employees[0]["calcAge"]());
// console.log(employees[0].getSummary());
// console.log(employees[1].firstName, employees[1].calcAge());
// console.log(employees[2]["first" + nameKey], employees[2].calcAge());
// // console.log(employees[0].age);
// // console.log(employees[0].age);

// if (employees[0]["calcAge"]() >= 18) {
//   console.log(employees[0].hasDriversLicense);
// } else {
//   console.log(
//     `Still young left with, ${
//       18 - employees[0]["calcAge"]()
//     } years to get a drivers license `
//   );
// }
// // console.log(employees[1].firstName, calcAge(employees[1].birthYear));
// // console.log(employees[2].firstName, employees[0]["calcAge"](employees[2]["birthYear"]))
// console.log(employees);

// console.log(
//   `${employees[1]["first" + nameKey]} ${
//     employees[1]["last" + nameKey]
//   }, has ${employees[1].brothers.length} brothers but his most trusted brother is ${
//     employees[1]["brothers"][2]
//   } and his tweeter handle is ${employees[1].tweeter}`
// );

// console.log(
//   `${employees[0].firstName} ${employees[0]["last" + nameKey]} is located in ${
//     employees[0]["location"]
//   } and his job title is ${employees[0].job}`
// );

/*
  !bracket notation using expression to get the value.
  */
// const interestedIn = prompt('What are you interested in to know about employee 1? is it the firstName, lastName, age, job, brothers')

// const employeesFunction = function () {
//   if (employees[0][interestedIn]) {
/*
      !bracket notation using expression to get the value.
*/
//     return employees[0][interestedIn];
//   } else {
//     return "Incorrect value";
//   }
// };

// console.log(employeesFunction())

// employees[0].location = 'South Africa'
// employees[1]['tweeter'] = '@sgudi001'

// console.log(employees)

/*
 * Coding Challenge 3
 */

// const BMIs = [
//   {
//     fullName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.BMI = Math.floor(this.mass / this.height ** 2);
//       return this.BMI;
//     },
//   },
//   {
//     fullName: "John",
//     lastName: "Smith",
//     mass: 92,
//     height: 1.95,
//   },
// ];

// BMIs[1].calcBMI = function () {
//   this.BMI = Math.floor(this["mass"] / (this["height"] * this["height"]));
//   return this.BMI;
// };

// BMIs[0].calcBMI()
// BMIs[1].calcBMI()

// BMIs[0].BMI > BMIs[1].BMI
//   ? console.log(
//       `${BMIs[0]["fullName"]} ${BMIs[0].lastName} BMI (${BMIs[0].BMI}) is higher than ${
//         BMIs[1].fullName
//       } ${BMIs[1]['last' + nameKey]} (${BMIs[1].BMI})!`
//     )
//   : console.log(
//       `${BMIs[1]["fullName"]} ${BMIs[1]['last' + nameKey]} BMI (${BMIs[1].BMI}) is higher than ${
//         BMIs[0].fullName
//       } ${BMIs[0].lastName} (${BMIs[0].BMI})!`
//     );

/*
 * Loops
 */

// for(let i = 1; i <= 10; i++) {
//   // console.log(i)
//   // console.log(`lifting weights rep ${i} `)
// }

// const tshepo = ['Tshepo', 'Ramantso', 2024 - 1983, ['Dumi', 'Neo', 'Moagi'], true]
// const types = []

// for(let i = 0; i < tshepo.length; i++){
//   console.log(tshepo[i])

//   types.push(typeof tshepo[i])
// }

// console.log(types)

// const birthYearsArr = [
//   2010,
//   "Tshepo",
//   1990,
//   1994,
//   1983,
//   1985,
//   true,
//   ["tshepo", "lebo", "dumisani"],
// ];
// const ages = [];
// const date = new Date();
// const currentYear = date.getFullYear();

// for (let i = 0; i < birthYearsArr.length; i++) {
//   /*
//   ! Continue and Break keywords.. important but a bit confusing. I would opp for ternary expression.
//   */
//   // if(typeof birthYearsArr[i] !== 'number') continue //
//   // ages.push(currentYear - birthYearsArr[i])
//   typeof birthYearsArr[i] === "number"
//     ? ages.push(currentYear - birthYearsArr[i])
//     : "";
// }
// console.log(ages);
// console.log(typeof birthYearsArr[0])

// const birthYearsArr = [
//   2010,
//   "Tshepo",
//   1990,
//   1994,
//   1983,
//   1985,
//   true,
//   ["tshepo", "lebo", "dumisani"],
// ];

// for(let i = birthYearsArr.length - 1; i >= 0; i--){
//   console.log(i, birthYearsArr[i])
// }

// for(let i = 1; i <= 3; i++){
//   console.log(`------- STARTING EXERCISES ${i}`)

//     for(let j = 1; j <= 5; j ++){
//       console.log(`lifting weight repetition ${j}`)
//     }
// }

// let i = 1

// while(i <= 10){
//   console.log(`WHILE: lifting weights repetition${i}`)
//   i++
// }

// let dice = Math.floor(Math.random() * 6) + 1

// while(dice !== 6){
//   console.log(`You've rolled ${dice}`)
//   dice = Math.floor(Math.random() * 6) + 1
//   if(dice === 6) console.log('Loop ended...')
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(bills[i] + tip);
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(bills);
console.log(tips);
console.log(total);
console.log(`Average total $${calcAverage(total)}`);

const reverse = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
};
console.log(reverse("tshepo"));
