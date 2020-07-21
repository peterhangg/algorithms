/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:
  Input: ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]

  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = (s) => {
  const midPoint = Math.floor(s.length/2);
  for (let i = 0; i < midPoint; i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));