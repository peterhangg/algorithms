// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/* example: Given nums = [2, 7, 11, 15], target = 9,
            Because nums[0] + nums[1] = 2 + 7 = 9,
            return [0, 1] */

const nums = [2, 7, 11, 15];

// const twoSum = (num, target) => {
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j ++) {
//       if (num[i] + num[j] === target) {
//         result.push(i,j);
//       }
//     }
//   }
//   return result;
// };

//////////////////////////////////////////////////////

const twoSum2 = (arr, target) => {
  let result = [];
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    // If 'diff' exist in hash table, push the value and index
    if (hashTable[diff]) {
      result.push(hashTable[diff], i)
    }
    // Array value as key and array index as value in hash table
    hashTable[arr[i]] = i;
  }
  return result;
};

console.log(twoSum2(nums, 9));