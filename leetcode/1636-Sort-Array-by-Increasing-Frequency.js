/**
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const frequencySort = (nums) => {
  let hashMap = {};
  let result = [];

  for (let num of nums) {
    hashMap[num] ? (hashMap[num] += 1) : (hashMap[num] = 1);
  }

  let sortedMap = Object.entries(hashMap).sort((a, b) =>
    (a[1] === b[1]) ? (b[0] - a[0]): (a[1] - b[1])
  );
  
  for (let [key, value] of sortedMap) {
    while (value) {
      result.push(key);
      value--;
    }
  }

  return result;
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]));
