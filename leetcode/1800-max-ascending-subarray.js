/**
  Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
  A subarray is defined as a contiguous sequence of numbers in an array.

  A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. 
  Note that a subarray of size 1 is ascending.

  Input: nums = [10,20,30,5,10,50]
  Output: 65
  Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

  Input: nums = [10,20,30,40,50]
  Output: 150
  Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.

  Input: nums = [100,10,1]
  Output: 100

  Input: nums = [10,20,30,40,50]
  Output: 150
  Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxAscendingSum = (nums) => {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      tempSum += nums[i];
    } else {
      maxSum = Math.max(maxSum, tempSum);
      tempSum = nums[i];
    }
  }
  return Math.max(maxSum, tempSum);
};

const maxAscendingSum2 =  (nums) => {
  let maxSum = nums[0];
  let tempSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      tempSum = 0;
    }
    tempSum += nums[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
console.log(maxAscendingSum([100, 10, 1]));

console.log(maxAscendingSum2([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum2([10, 20, 30, 40, 50]));
console.log(maxAscendingSum2([12, 17, 15, 13, 10, 11, 12]));
console.log(maxAscendingSum2([100, 10, 1]));
