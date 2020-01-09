// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// contiguous subarray is defined by an interval of the indices: a first and last element and everything between them


const maxSubArray = nums => {
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // set current accumulator to the greater value of the current index or sum of current index + previous value 
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
};

/* Example:
  Input: [-2,1,-3,4,-1,2,1,-5,4],
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6. */