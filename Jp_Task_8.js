// Task 8:   Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.....


function findSecondSmallest(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
  }
  

  const inputArr = [8, 3, 7, 1, 9, 4, 2];
  const secondSmallest = findSecondSmallest(inputArr);
  console.log(secondSmallest); 
  