/**
  We are given two sentences s1 and s2.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
  A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
  Return a list of all uncommon words. 
  You may return the list in any order.

  Input: s1 = "this apple is sweet", s2 = "this apple is sour"
  Output: ["sweet","sour"]

  Input: s1 = "apple apple", s2 = "banana"
  Output: ["banana"]
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const mergedArr = [...s1.split(' '), ...s2.split(' ')];
  const result = [];

  const hashMap = mergedArr.reduce((acc, word) => {
    if (!acc[word]) {
      acc[word] = 1;
    } else {
      acc[word]++;
    }
    return acc;
  }, {});

  for (const [key, value] of Object.entries(hashMap)) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));

//////////////////////////////////////////////

var uncommonFromSentences2 = function (s1, s2) {
  const mergedArr = [...s1.split(' '), ...s2.split(' ')];
  const result = [];

  for (let word of mergedArr) {
    if (mergedArr.indexOf(word) === mergedArr.lastIndexOf(word)) {
      result.push(word);
    }
  }

  return result;
};

console.log(uncommonFromSentences2('this apple is sweet', 'this apple is sour'));