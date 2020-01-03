// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = num => {
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
};

// recursive
const summation = num => {
  return num > 1 ? num + summation(num - 1) : num;
};

console.log(summation(8));

// example:
// summation(2) -> 3 -> 1 + 2
// summation(8) -> 36 -> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8