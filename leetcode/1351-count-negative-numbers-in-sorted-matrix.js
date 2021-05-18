/**
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Input: grid = [[3,2],[1,0]]
Output: 0

Input: grid = [[1,-1],[-1,-1]]
Output: 3
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => {
  const numsArr = [];
  let count = 0;

  for (let rows of grid) {
    numsArr.push(...rows);
  }

  for (let num of numsArr) {
    if (num < 0) count++;
  }

  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);

console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
);
