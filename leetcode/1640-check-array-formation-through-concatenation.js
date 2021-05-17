/**
  You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. 
  Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers 
  in each array pieces[i].

  Return true if it is possible to form the array arr from pieces. Otherwise, return false.

  Input: arr = [85], pieces = [[85]]
  Output: true

  Input: arr = [15,88], pieces = [[88],[15]]
  Output: true
  Explanation: Concatenate [15] then [88]

  Input: arr = [49,18,16], pieces = [[16,18,49]]
  Output: false
  Explanation: Even though the numbers match, we cannot reorder pieces[0].

  Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
  Output: true
  Explanation: Concatenate [91] then [4,64] then [78]
 */

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = (arr, pieces) => {
  const hashTable = arr.reduce(
    (acc, value, index) => ({
      ...acc,
      [value]: index,
    }),
    {}
  );

  for (let piece of pieces) {
    const integerIndex = hashTable[piece[0]];

    for (let i = 0; i < piece.length; i++) {
      const currentIndex = i + integerIndex;
      const integerValue = piece[i];

      if (integerValue !== arr[currentIndex]) return false;
    }
  }
  return true;
};

// console.log(canFormArray([85], [[85]]));
// console.log(canFormArray([15, 88], [[88], [15]]));
// console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
// console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
