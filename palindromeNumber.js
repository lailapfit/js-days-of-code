/**
 * Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:
Input: x = -101
Output: false
 */

function isNumberPalindrome(num) {
  let numReverse = "";
  const numsStr = num.toString();
  const numsArr = Array.from(numsStr);

  if (num < 0) return false;

  for (let i = numsArr.length - 1; i >= 0; i--) {
    numReverse += numsArr[i];
  }

  return numsStr == numReverse ? true : false;
}

const input1 = isNumberPalindrome(121);
const input2 = isNumberPalindrome(-101);
const input3 = isNumberPalindrome(-121);
const input4 = isNumberPalindrome(101);
const input5 = isNumberPalindrome(10);

// true
console.log(`input1: ${input1}`);
//false
console.log(`input2: ${input2}`);
// false
console.log(`input3: ${input3}`);
// true
console.log(`input4: ${input4}`);
// false
console.log(`input5: ${input5}`);
