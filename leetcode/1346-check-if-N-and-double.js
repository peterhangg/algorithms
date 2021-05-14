/**
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j] * 2 === arr[i]) {
        return true;
      }
    }
  }
  return false;
};

const checkIfExist2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let double = arr[i] * 2;
    let doubleIndex = arr.indexOf(double);

    if (doubleIndex !== -1 && doubleIndex !== i) {
      return true;
    }
  }
  return false;
}

console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
console.log(checkIfExist2([-2,0,10,-19,4,6,-8]))