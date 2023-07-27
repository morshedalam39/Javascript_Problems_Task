// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


function romanToInteger(romanNumeral) {
    const romanToIntegerMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      let currentCharValue = romanToIntegerMap[romanNumeral[i]];
      let nextCharValue = romanToIntegerMap[romanNumeral[i + 1]];
  
      if (nextCharValue && currentCharValue < nextCharValue) {
        result -= currentCharValue;
      } else {
        result += currentCharValue;
      }
    }
  
    return result;
  }
  
  console.log(romanToInteger("IX")); 