/** 
let js = "amazing";

if (js === "amazing") {
  console.log("JavaScript is FUN!");
}

console.log(48 + 10 - (2 * 6) / 12);

const people = [
  {
    firstName: 'Tshepo',
    age: 40
  },

  {
    firstName: 'Dumisani',
    age: 34
  }
]

console.log(people)


let javascriptIsFun = true;

console.log(typeof javascriptIsFun);

let lastName = null 

console.log(typeof lastName) // type of null is an object and thats regarded as bug inJavaScript.
*/

// Operations
// const currentYear = 2024
// const ageTshepo = currentYear - 1983
// const ageDumi = currentYear - 1990

// console.log(`Tshepo: ${ageTshepo}, Dumi: ${ageDumi}`)
// console.log(`Tshepo: ${ageTshepo / 10}, Dumi: ${ageDumi * 2}`)

// const firstName = 'Dumisani'
// const lastName = 'Ramantso'

// console.log(`${firstName} ${lastName}`)

// Challenge 1

// const massMark = 95
// const heightMark = 1.88
// const massJohn = 85
// const heightJohn = 1.76

// const bmiMark = Math.floor(massMark / heightMark ** 2)
// const bmiJohn = Math.floor(massJohn / (heightJohn * heightJohn))

// console.log(`Marks BMI: ${bmiMark} and
// John's BMI ${bmiJohn}`)

// const markHigherBMI = bmiMark > bmiJohn

// console.log( markHigherBMI ? `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!` : `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
// }

// const age = 15
// let isOldEnough;

// if (age >= 18 ) {
//   console.log(`You are legible to take drivers license! :smile:`)
// } else {
//   const yearsLeft = 18 - age
//   console.log(`You are left with ${yearsLeft} years prior legible to drive`)
// }

// const inputYear = "1991";
// console.log(parseInt(inputYear) + 18); // You can use Number(), parsent() or just + as short handto convert string to integer.

// let n = "1" + 1;
// console.log(typeof n);
// n -= 1;
// console.log(n);

// 5 falsy values : 0, '', undefined, null and Nan

// const height = null

// if (height >= 0) {
//   console.log('Height is defined')
// } else {
//   console.log('Height is undefined')
// }

// const dolphinsAvgScore = Math.floor((97 + 112 + 100 ) /3)
// const koalasAvgScore = Math.floor((109 + 95 + 50) / 3 )

// console.log(`Dolphins Average Score is: ${dolphinsAvgScore} and koalas Average Score is: ${koalasAvgScore}`)

// if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
//   console.log('Dolphins Wins')
// } else if (dolphinsAvgScore < koalasAvgScore && koalasAvgScore >= 100) {
//   console.log('Koalas Wins')
// } else if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= 100 & koalasAvgScore >=100) {
//   console.log('Its a draw!')
// } else {
//   console.log('No winner!')
// }

// const day = "thursday";

// if (day === 'wednesday' || day === 'thursday') {
//   console.log("Record videos");
//   console.log("Go to coding meetups");
// }

// switch (day) {
//   case "monday":
//     console.log("Plan study structure");
//     break;
//   case "tuesday":
//     console.log("Prepare videos");
//     break;
//   case "wednesday":
//     console.log("Write coded examples");
//     break;
//   case "thursday":
//     console.log("Record videos");
//     console.log("Go to coding meetups");
//     break;
//   case "friday":
//     console.log("Attend meetings and coding meetups");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Visit my brother! and rest.");
//     break;
//   default:
//     console.log("Not a valid day!");
// }
// const calc = 40 * 0.2
// console.log(calc)
const bill = 50
const tip = bill <= 300 && bill >= 50 ? bill * 15/100 : bill * 20 /100
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`)
// const age = 15
// const drink = null
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)