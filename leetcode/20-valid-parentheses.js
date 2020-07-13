 // Valid Parentheses

/* 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.

Example:
  Input: "()[]{}" -> true
  Input: "([)]"   -> false
  Input: "{[]}"   -> true
*/

const isValid = s => {
  if (s.length === 0) return true;
  if (s.length === 1 || s.length % 2 !== 0) return false;
  
  const bracketArr = s.split("");
  const bracketMap = {
    "(":")",
    "[":"]",
    "{":"}"
  };
  let stack = [];

  for (let bracket of bracketArr) {
    if (bracketMap[bracket]) {
      stack.push(bracket);
    } else {
      let prevBracket = stack.pop();
      if (bracketMap[prevBracket] !== bracket) {
        return false;
      }
    } 
  }
  return stack.length === 0;
};

console.log(isValid(""));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
