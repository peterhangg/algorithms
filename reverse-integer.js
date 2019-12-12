// Given a 32-bit signed integer, reverse digits of an integer.
// example: 123 --> 321, 
//          -321 --> -123
//           120  --> 21


const reverse = num => {
  let stringNum = num.toString().split("").reverse().join("");
  let result = parseInt(stringNum) * Math.sign(num);
  // check whether result of the reversed number is less than 32-bit signed integer (-2,147,483,648) or greater than 32-bit signed integer (2,147,483,648). Return 0 if either case is true.
  return (result > Math.pow(2,31) || result < Math.pow(-2,31)) ? 0 : result;
};