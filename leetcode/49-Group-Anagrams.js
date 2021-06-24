/**
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = ["a"]
Output: [["a"]]

Input: strs = [""]
Output: [[""]]
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  let anagramMap = {};
  let result = [];

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");

    if (!anagramMap[sortedStr]) {
      anagramMap[sortedStr] = [];
    }
    anagramMap[sortedStr].push(str);
  }

  Object.values(anagramMap).forEach((anagram) => result.push(anagram));
  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([""]));