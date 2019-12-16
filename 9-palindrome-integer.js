// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Input: 121 ==> Output: true
// Input: -121 ==> Output: false. Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const isPalindrome = x => {
  const reverseNum = x.toString().split("").reverse().join("");
  const numStr = x.toString();
  return reverseNum === numStr;
};