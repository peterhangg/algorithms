/**
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
  let hashMap = {};
  for (let num of nums) {
    hashMap[num] ? (hashMap[num] += 1) : (hashMap[num] = 1);

    if (hashMap[num] > nums.length / 2) {
      return num;
    }
  }
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
