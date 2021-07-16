/**
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Input: nums = [], target = 0
Output: [-1,-1]

Input: nums = [0], target = 0
Output: [0,0]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const searchRange = (nums, target) => {
  if (!nums.length) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] !== target) left++;
    if (nums[right] !== target) right--;

    if (nums[left] === target && nums[right] === target) {
      return [left, right];
    }
  }
  return [-1, -1];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 0));
// console.log(searchRange([0], 0));

/////////////////////////////////////////////////////////////////////////////

const searchRange2 = (nums, target) => {
  if (!nums.length) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  let leftIndex = -1;
  let rightIndex = -1;

  // GET FIRST POSITION TARGET
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] >= target) {
      right = middle -1;
    } else {
      left = middle + 1;
    }
    if (nums[middle] === target) leftIndex = middle;
  }

  // RESET START AND END INDEX AFTER SEARCHING FOR FIRST INDEX OF TARGET
  left = 0;
  right = nums.length - 1;

  // GET LAST TARGET POSITION
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    
    if (nums[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    if (nums[middle] === target) rightIndex = middle;
  }


  return [leftIndex, rightIndex];
};

console.log(searchRange2([5, 7, 7, 8, 8, 10], 8));