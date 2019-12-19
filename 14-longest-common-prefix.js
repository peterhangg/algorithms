// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: ["flower","flow","flight"] --> Output: "fl"
// Input: ["dog","racecar","car"] --> Output: "" --> Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = words => {
  if(!words || !words.length) return "";
  let commonLetters = [];
  let firstWord = words[0];
  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 1; j < words.length; j++) {
      // console.log(words[j][i]);
      if (firstWord[i] !== words[j][i]) {
        return commonLetters.join("");
      }
    }
    commonLetters.push(firstWord[i]);
  }
  return commonLetters.join("");
};
