/**
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

Input: s = "a"
Output: 1

Input: s = "bb"
Output: 2
 */

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  let result = 0;
  let letterMap = s.split("").reduce((acc, curr) => (acc[curr] = ++acc[curr] || 1, acc), {});

  for (let letter in letterMap) {
    if (letterMap[letter] % 2 === 0) {
      result += letterMap[letter];
    } else {
      result += letterMap[letter] - 1;
    }
  }
  return s.length === result ? result : result + 1;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ss"));
console.log(longestPalindrome("ccc"));