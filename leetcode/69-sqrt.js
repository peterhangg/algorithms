/**
 * @param {number} x
 * @return {number}
 */
/*
  Input: x = 4
  Output: 2

  Input: x = 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 */

const mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};

const mySqrt2 = (x) => {
  let sqrt = 1;
  while (sqrt * sqrt <= x) sqrt++;

  return sqrt - 1;
};

console.log(mySqrt(8)); // 2
console.log(mySqrt2(8)); // 2