/**
Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let map = s.split('').reduce((acc, key) => {
    acc[key] = acc[key] ? ++acc[key] : 1;
    return acc;
  }, {});

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
