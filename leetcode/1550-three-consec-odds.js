/**
  Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

  Input: arr = [2,6,4,1]
  Output: false
  Explanation: There are no three consecutive odds.

  Input: arr = [1,2,34,3,4,5,7,23,12]
  Output: true
  Explanation: [5,7,23] are three consecutive odds.
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

const threeConsecutiveOdds = (arr) => {
  let consecutiveOdds = 0;
  for (num of arr) {
    num % 2 === 0 ? consecutiveOdds = 0 : consecutiveOdds++;
    if (consecutiveOdds === 3) return true;
  }
  return false;
};

const threeConsecutiveOdds2 = (arr) => {
  const isOdd = (num) => num % 2 === 1;

  for (let i = 0; i < arr.length; i++) {
    if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) return true;
    console.log((isOdd(arr[i]), isOdd(arr[i + 1]), isOdd(arr[i + 2])))
  }
  return false;
}

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));
console.log(threeConsecutiveOdds([2,6,4,1]));
console.log(threeConsecutiveOdds2([1,2,34,3,4,5,7,23,12]));
console.log(threeConsecutiveOdds2([2,6,4,1]));
