'use strict'

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

/* 
! Arrow Function
*/
const calcAge = (birthYear) => { 
  return `You are ${2037 - birthYear} years old`
}

/*
 ? Function Declaration 
*/

function calcAge1(birthYear) {
  return `You are ${2037 - birthYear} years old`
}

/*
 ? Function Expression or anonymous function 
*/
const calcAge2 = function(birthYear) { 
  return `You are ${2037 - birthYear} years old`
}

// const age = 
console.log(calcAge2(1991))