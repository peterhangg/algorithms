/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  
  const letterMap = (arr) => {
    return arr.reduce((acc, key) => {
      acc[key] = acc[key] + 1 || 1;
      return acc;
    }, {});
  };

  let sMap = letterMap(s.split(''));
  let tMap = letterMap(t.split(''));

  for (let letter in sMap) {
    if (sMap[letter] !== tMap[letter]) return false;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('car', 'rat'));
