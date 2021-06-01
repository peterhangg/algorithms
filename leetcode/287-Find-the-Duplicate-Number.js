/**
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3

Input: nums = [1,1]
Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  let hashMap = {};

  for (let num of nums) {
    if (hashMap[num]) {
      return num
    } else {
      hashMap[num] = 1;
    }
  }
};

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))