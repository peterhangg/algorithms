/**
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  if (nums.length <= 1) return nums;

  let zeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[zeroIndex];
      nums[zeroIndex] = temp;
      zeroIndex++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1, 3, 12]));
console.log(moveZeroes([1, 0, 0, 3, 12]));
console.log(moveZeroes([0]));
