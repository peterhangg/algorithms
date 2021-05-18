/**

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const arr1 = [...new Set(nums1)];
  const arr2 = [...new Set(nums2)];
  let results = [];

  for (let num of arr1) {
    if (arr2.includes(num)) {
      results.push(num);
    }
  }

  return results;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

//////////////////////////////////////////////

const intersection2 = (nums1, nums2) => {
  const arr2 = new Set(nums2);
  let results = [];

  for (let num of nums1) {
    if (arr2.has(num)) {
      results.push(num);
      arr2.delete(num);
    }
  }

  return results;
};

console.log(intersection2([4, 9, 5], [9, 4, 9, 8, 4]));
