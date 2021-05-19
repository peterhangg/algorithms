/**
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Input: mat = [[5]]
Output: 5
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0;

  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];

    // Diagonal top-left to bottom-right
    result += row[i];
    
    // break 1 iteration at shared diagonal midpoint so we don't add it twice
    if (i === row.length - 1 - i) {
      continue;
    }
    // Diaonal top-right to bottom-left
    result += row[row.length - i - 1];
  }
  return result;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);

console.log(
  diagonalSum([
    [1, 1],
    [1, 1],
  ])
);

