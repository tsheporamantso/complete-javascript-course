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

// const totals2 = [bills[0] + tips[0] ] // This approach is much cleaner

// const totals = [ //This is messy approach even though it works.
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[bills.length - 1]) + bills[bills.length - 1],
// ];

// console.log(totals);
// console.log(totals2)
const date = new Date();
// console.log(date)
const currentYear = date.getFullYear();
// console.log(currentYear)

// const calcAge = (birthYear) => {
//   return currentYear - birthYear;
// };

const employees = [
  {
    firstName: "Tshepo",
    lastName: "Ramantso",
    birthYear: 2010,
    job: "Software Engineer",
    brothers: ["Dumisani", "Moagi", "Neo", "Kgomotso", "Lesego"],
    // calcAge: (birthYear) => {
    //   return currentYear - birthYear
    // },
    // calcAge: function () {
    //   console.log(this)
    //   return currentYear - this.birthYear;
    // },
    calcAge: function () {
      this.age = currentYear - this.birthYear;
      return this.age;
    },
    hasDriversLicense: true,
  },
  {
    firstName: "Dumisani",
    lastName: "Ramantso",
    birthYear: 1990,
    job: "Software Engineer",
    brothers: ["Tshepo", "Moagi", "Neo", "Kgomotso", "Lesego"],
  },
];

employees[0].location = "South Africa";
employees[1].location = "South Africa";
employees[1]["tweeter"] = "@sgudi001";
employees[1].hasDriversLicense = true;
employees[0]["tweeter"] = "@tshepi14c";
employees[1].calcAge = function () {
  this.age = currentYear - this.birthYear;
  return this.age;
};
employees.push({
  firstName: "Neo",
  lastName: "Mogotsi",
  birthYear: 1994,
  job: "Electrician",
  location: "South Africa",
  tweeter: "@teddy001",
  hasDriversLicense: true,
});

// if(employees[0].calcAge(employees[1].birthYear) >= 18) {
//   console.log(`${employees[0].hasDriversLicense}, ligable to drive a vehicle`)
// } else {
//   console.log(`Underage, not legible to have drivers license`)
// }

// console.log(employees[0].firstName, employees[0]["calcAge"]());
console.log(employees[0].firstName, employees[0]["calcAge"]());
console.log(employees[1].firstName, employees[1].calcAge());
console.log(employees[0].age);
console.log(employees[0].age);

if (employees[0]["calcAge"]() >= 18) {
  console.log(employees[0].hasDriversLicense);
} else {
  console.log(
    `Still young left with, ${
      18 - employees[0]["calcAge"]()
    } years to get a drivers license `
  );
}
// console.log(employees[1].firstName, calcAge(employees[1].birthYear));
// console.log(employees[2].firstName, employees[0]["calcAge"](employees[2]["birthYear"]))
console.log(employees);

// const nameKey = "Name"; // bracket notation using variable concatinanted with part of key
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

// const interestedIn = prompt('What are you interested in to know about employee 1? is it the firstName, lastName, age, job, brothers')

// const employeesFunction = function () {
//   if (employees[0][interestedIn]) {
//     return employees[0][interestedIn]; // bracket notation using expression to get the value.
//   } else {
//     return "Incorrect value";
//   }
// };

// console.log(employeesFunction())

// employees[0].location = 'South Africa'
// employees[1]['tweeter'] = '@sgudi001'

// console.log(employees)
