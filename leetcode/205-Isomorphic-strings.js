/**
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false

Input: s = "paper", t = "title"
Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  let sHashMap = {};
  let tHashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (sHashMap[s[i]] !== tHashMap[t[i]]) return false;
    sHashMap[s[i]] = i;
    tHashMap[t[i]] = i;
  }
  return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
