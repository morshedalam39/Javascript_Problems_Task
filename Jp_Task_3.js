// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const arr = [3, 5, 2, 5, 3, 3, 1, 4];

const maxValue = arr.reduce((previous, current, idx, arr) =>
  arr.filter((item) => item === previous).length >
  arr.filter((item) => item === current).length
    ? previous
    : current
);

console.log(maxValue);