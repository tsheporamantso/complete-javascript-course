// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const reverseStr = (str) => {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// };
// console.log(reverseStr("hello"));

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9];
// const temperatures2 = [-2, -6, 17, 15, 14, 9];

// const calcTempAmplitute = (t1, t2) => {
//   const arr = t1.concat(t2);
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;
//     if (arr[i] > max) {
//       max = arr[i];
//     } else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   console.log(arr);
//   return max - min;
// };

// console.log(calcTempAmplitute(temperatures, temperatures2));

const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: parseInt(prompt("Degrees celsius")),
  };

  /*
    ! Different consoles that I can use. It is much nicer to use console.table in large objects
     console.table(measurement);
     console.warn(measurement);
     console.error(measurement);

  */

  // const kelvin = measurement["value"] + 273;
  return kelvin;
};

// console.log(measureKelvin());

for (let i = 0; i <= 10; i++) {
  // console.log(`lifting weight${[i]}`);
}

const tempArray = [17, 21, 23];
const tempArray2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return "..." + str;
};
console.log(printForecast(tempArray));
