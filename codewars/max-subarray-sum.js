// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const maxSequence = arr => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};

const maxSequence2 = arr => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i ++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if(currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should be 6: [4, -1, 2, 1]
console.log(maxSequence2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should be 6: [4, -1, 2, 1]


