// Write a program to find the smallest number in a list of numbers.

function findSmallestNumber(numbers) {
  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return smallest;
}

const numberList = [5, 10, 3, 8, 2, 7];
const smallestNumber = findSmallestNumber(numberList);

console.log(`The smallest number in the list is: ${smallestNumber}`);