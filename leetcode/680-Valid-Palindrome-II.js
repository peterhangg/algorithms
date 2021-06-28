/**
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Input: s = "aba"
Output: true

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Input: s = "abc"
Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return isValid(s, start + 1, end) || isValid(s, start, end - 1);
    }
    start++;
    end--;
  }
  return true;
};

const isValid = (s, start, end) => {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome('abca'));
console.log(validPalindrome('aba'));
console.log(validPalindrome('abc'));
