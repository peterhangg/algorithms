/**
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let sChars = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let middle = sChars.length / 2;

  for (let i = 0; i < middle; i++) {
    if (sChars[i] !== sChars[sChars.length - 1 - i]) return false;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
