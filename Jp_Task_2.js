// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const numbers = [2, -5, 10, -3, 7];
let sum = 0;

for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] > 0) sum += numbers[i];
}

console.log(sum);