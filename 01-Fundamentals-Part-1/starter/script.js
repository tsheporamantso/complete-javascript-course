/**
* ! What is JavaScript? 
It is a high level, multi-paradigm, object orientated programming language!
It is a programming language that is used to make web pages interactive and dynamic.
Frameworks such as Ract, Angular and Vue are built on top of JavaScript, thus one should really know and understand JavaScript.
**/

let js = "amazing";

if (js === "amazing") {
  var isFun = true;
  // console.log("JavaScript is FUN!");
}

// console.log(isFun);

// console.log(48 + 10 - (2 * 6) / 12);

const people = [
  {
    firstName: "Tshepo",
    age: 40,
  },

  {
    firstName: "Dumisani",
    age: 34,
  },
];

// console.log(people);

// let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);

// type of null is an object and thats regarded as bug inJavaScript, it was never corrected because of legarcy reasons.
// let lastName = null;
// console.log(typeof lastName);

// console.log(typeof ``);

/*
 * let, const and var
 * let and const are block scoped, var is function scoped.
 * let and const are hoisted to the top of the block, but not initialized.
 * let can be reassigned, const cannot be reassigned / mutated.
 * var can be reassigned and redeclared.
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

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = Math.round(massMark / heightMark ** 2);
// const bmiJohn = Math.round(massJohn / (heightJohn * heightJohn));

// console.log(`Marks BMI: ${bmiMark} and John's BMI ${bmiJohn}`);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);
// console.log(
//   markHigherBMI
//     ? `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`
//     : `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`
// );

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
// }

const age = 18;

// if (age >= 18) {
//   console.log(`You are legible to take drivers license 🚗`);
// } else {
const yearsLeft = 18 - age;
//   console.log(`You are left with ${yearsLeft} years prior legible to drive ❌`);
// }

// const drivingLessons =
//   age >= 18
//     ? `You are legible to take driving lessons 🚗`
//     : `You are left with ${yearsLeft} years to be legible to drive ❌`;
// console.log(drivingLessons);

/*
 ! Template Literal 
 */
// const firstName = "Nelly";
// const job = "Nurse";
// const birthYear = 1959;
// const currentYear = 2025;
// const children = ["Tshepo", "Dumisani"];

// const str = `Hello my name is ${firstName}, mother to ${children[0]} and ${
//   children[1]
// } and I am ${currentYear - birthYear} years old professional ${job}. `;
// console.log(str);

/*
 ? Type Conversion and Coercion
 * Type conversion: it's when we manually converting type from one to another 
 * Type Coercion: It's when JavaScript automatically convert the type behind the scenes
 * 
 * Javascript can convert to either, String, Number or Boolean but cannot convert to undefined or null.
 * If you try to convert a string such as "Dumi" to integer you will get NaN(not a number).
 * NaN it's a number but an invalid number, because of you check typeof NaN it's a number. 
 */

const inputYear = "1991";
// You can use [Number(), parsentInt() JavaScript function/methods] or just + sign as short-hand to convert string to integer.
// Converting to string you just use String() function/method
// console.log(+inputYear + 18);

let n = "1" + 1;
// console.log(typeof n, `${n}`);
// Below it's type coercion. the initial value of n was 11(concatenated) but when we reassign n and -1 we get the correct arithmetic type i.e. 11 - 1 = 10
// When you have a number in a string that number will be converted behind the scenes by JavaScript; that is type coercion!
// Look at template literal examples above, I have arithmetic calculation that was coerced into string
// Whenever there is a string and number in between that number will be converted into string! type coercion.
n -= 1;
// console.log(typeof n, `${n}`);

// const calc = "10" - "4" - "3" - 2 + "5";
// console.log(calc);

/*
! Truthy and Falsy values.
*/
/*
? There are 5 falsy values:
* 1) 0
* 2) ""
* 3) undefined
* 4) null
* 5) NaN
? of course false is falsy no need to include in the list of falsy values! 
? AND EVERYTHING OTHER THAN FALSY VALUES, THEY ARE TRUTHY.
! In practice conversion to Booleans is always implicit not explicit (it is coerced but converted). 
*/

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean("Tshepo"));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

/*
? potential bug, 0 in this instance is the valid number thus height is defined and yet we run else block since 0 is falsy value! This bug can be fixed with logical operators.
*/
// const height = 0;

// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is undefined");
// }

/*
 * Equality operator
 * === is called strict equality, because it doesn't perform type coercion.
 * == is called a loose equality operator, because it does type coercion.
 * 18 === 18 -> true (strict without type coercion)
 * 18 == "18" -> true (loose with type coercion)
 * AVOID LOOSE EQUALITY ALWAYS USE STRICT. LOOSE EQUALITY CAN INTRODUCE HARD TO TRACE BUGS IN YOUR CODE.
 * !== -> strict version of not equal
 * != loose version of not equal
 */

// const favNumber = prompt("What's your favorite number?");

// console.log(favNumber);
// console.log(typeof favNumber);

// if (favNumber === 23) {
// "23" == 23 [prompt will return a string thus with loose comparison this is true. However with strict comparison it false "23" === 23. You need to convert a string into number.]
//   console.log("Lucy number 23");
// }

/*
? The AND(&&), OR(||), NOT(!) operators
* AND if all conditions are true -> truthy however if one condition is false -> all will be falsy
* OR if just one variable is true -> truthy, if we have multiple variables it's enough for just one be true and the rest -> truthy 
* NOT it inverts.
*/

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Dumi is able to drive");
} else {
  console.log("Someone else should drive");
}

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

// const day = prompt("please enter day of the week").toLowerCase();

// switch (day) {
//   case "monday":
//     document.getElementById("heading").innerText = "Study";
//     console.log("Study");
//     break;
//   case "tuesday":
//     document.getElementById("heading").innerHTML = "Do Something";
//     console.log("Do something");
//     break;
//   default:
//     document.getElementById("heading").innerHTML = "Study";
// }

// const day = "tuesday";

// if (day === "wednesday" || day === "thursday") {
//   document.getElementById("heading").innerHTML =
//     "Record videos and Go to coding meetups";
//   console.log("Record videos");
//   console.log("Go to coding meetups");
// } else {
//   document.getElementById("heading").innerHTML =
//     "Day it's either not Wednesday or Thursday";
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

/*
! Expressions and Statements
? An expression it's a piece of code that produces a value. (3 + 4 = expression or 221 or true && false && !false = expression)
*/

// const bill = 50;
// const tip = bill <= 300 && bill >= 50 ? (bill * 15) / 100 : (bill * 20) / 100;
// console.log(
//   `The bill was $${bill}, the tip was $${tip}, and the total value $${
//     bill + tip
//   }`
// );
// const age = 15
// const drink = null
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

const bill = 275.4;

const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(tip);
