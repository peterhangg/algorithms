/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

Example:
  Input: [1,3,5,6], 5 -> Output: 2
  Input: [1,3,5,6], 2 -> Output: 1
  Input: [1,3,5,6], 7 -> Output: 4
  Input: [1,3,5,6], 0 -> Output: 0
*/

const searchInsert = (num, target) => {
  let left = 0;
  let right = num.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (num[middle] === target) {
      return middle;
    } else if (num[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));