// Write a program to check if a number is even or odd.

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

const inputNumber = 7;
const result = checkEvenOrOdd(inputNumber);

console.log(`The number ${inputNumber} is ${result}`);