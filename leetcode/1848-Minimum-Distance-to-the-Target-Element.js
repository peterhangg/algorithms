/**
Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

Return abs(i - start).

It is guaranteed that target exists in nums.

Input: nums = [1,2,3,4,5], target = 5, start = 3
Output: 1
Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

Input: nums = [1], target = 1, start = 0
Output: 0
Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.

Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
Output: 0
Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = (nums, target, start)  => {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && Math.abs(i - start) < min) {
      min = Math.abs(i - start);
    }
  }

  return min;
};

// console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
// console.log(getMinDistance([1], 1, 0));
// console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
// console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9));

///////////////////////////////////////////

const getMinDistance2 = (nums, target, start)  => {
  let left = Infinity;
  let right = Infinity;

  for (let i = 0; i <= start; i++) {
    if (nums[start - i] === target) {
      left = i;
      break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[start + i] === target) {
      right = i;
      break;
    }
  }

  return Math.min(left, right);
};
// console.log(getMinDistance2([1, 2, 3, 4, 5], 5, 3));
// console.log(getMinDistance2([1], 1, 0));
// console.log(getMinDistance2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
console.log(getMinDistance2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9));