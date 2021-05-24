/**
Given a string s, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Input: s = "ab-cd"
Output: "dc-ba"

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 */

/**
 * @param {string} s
 * @return {string}
 */

const reverseOnlyLetters = (s) => {
  let strArr = s.split('');
  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    if (isLetter(strArr[left]) && isLetter(strArr[right])) {
      let temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      left++;
      right--;
    } 
    
    if (!isLetter(strArr[left])) {
      left++;
    } 

    if (!isLetter(strArr[right])) {
      right--;
    }
  }

  return strArr.join("");
};

isLetter = (s) => {
  return s.match(/[a-z]/i);
};

console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); // "j-Ih-gfE-dCba"
