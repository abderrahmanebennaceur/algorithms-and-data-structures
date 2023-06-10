// Write a program to find the largest number in a list of numbers.

function findLargestNumber(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

const numberList = [5, 10, 3, 8, 2, 7];
const largestNumber = findLargestNumber(numberList);

console.log(`The largest number in the list is: ${largestNumber}`);