/**
Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Input: ["cool","lock","cook"]
Output: ["c","o"]
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */

const commonChars = (words) => {
  let result = [];
  let firstWord = words[0];

  for (let i = 0; i < firstWord.length; i++) {
    let commonLetter = true;
    let letter = firstWord[i];

    for (let j = 1; j < words.length; j++) {
      if (words[j].indexOf(letter) > -1) {
        words[j] = words[j].replace(letter, '');
      } else {
        commonLetter = false;
      }
    }
    if (commonLetter) {
      result.push(letter);
    }
  }
  return result;
};

console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
