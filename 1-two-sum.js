// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/* example: Given nums = [2, 7, 11, 15], target = 9,
            Because nums[0] + nums[1] = 2 + 7 = 9,
            return [0, 1] */

const twoSum = (num, target) => {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j ++) {
      if (num[i] + num[j] === target) {
        result.push(i,j);
      }
    }
  }
  return result;
};




//////////// work in progress ////////////

/* const twoSum = (num, target) => {
  let result = [];
  let obj = {};

  for (let i = 0; i < num.length; i++) {
    let input = target - num[i];
    if(obj[input] !== undefined) {
      result.push([obj[input], i])
    }
    obj[num[i]] = i;
  }
  return result;
} */

