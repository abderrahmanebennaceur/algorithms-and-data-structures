// Write a program to find the reminder of two numbers.

function reminder2numbers(a, b) {
  return a % b;
}

const number1 = 10;
const number2 = 3;

const result = reminder2numbers(number1, number2);

console.log(`The reminder of ${number1} and ${number2} is ${result}`);