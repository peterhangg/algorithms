/* The goal of this exercise is to convert a string to a new string where each character in the new string is
  "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
  Ignore capitalization when determining if a character is a duplicate. */


const duplicateEncode = word => {
  let result = "";
  let wordArr = [...word.toLowerCase()];
  wordArr.forEach(letter => {
    wordArr.indexOf(letter) !== wordArr.lastIndexOf(letter) ? result += ")" : result += "(";
  });
  return result;
};

// using map
const duplicateEncode = word => {
  let wordArr = [...word.toLowerCase()];
  let encoder = wordArr.map((letter, index, arr) => {
    return arr.indexOf(letter) !== arr.lastIndexOf(letter) ? ")" : "(";
  });
  return encoder.join("");
};


// test
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));



// example: 
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 0