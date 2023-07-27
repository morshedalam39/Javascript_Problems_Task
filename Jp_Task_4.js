// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


function findTwoNumbers(arr, target) {
    let numMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      let currentNum = arr[i];
      let complement = target - currentNum;
      if (numMap[complement] !== undefined) {
        return [numMap[complement], i];
      }
      numMap[currentNum] = i;
    }
  
    return [];
  }
  
  console.log(findTwoNumbers([1, 3, 6, 8, 11, 15], 9)); 