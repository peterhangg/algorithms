/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:
  Given nums = [1,1,2] -> length = 2;
  Given nums = [0,0,1,1,1,2,2,3,3,4], -> length = 5
*/

const removeDuplicates = (nums) => {
  if (!nums.length) return 0;

  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      nums.splice(i, 1);
        i--;
    } else {
      hashTable[nums[i]] = 1;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))