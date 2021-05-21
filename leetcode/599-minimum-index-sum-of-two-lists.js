/**
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]

Input: list1 = ["KFC"], list2 = ["KFC"]
Output: ["KFC"]
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  let minIndex = Infinity;
  let result = [];

  const hashTable1 = getHashTable(list1);
  const hashTable2 = getHashTable(list2);

  for (let item in hashTable1) {
    let totalIndex = hashTable1[item] + hashTable2[item];

    if (totalIndex < minIndex) {
      minIndex = totalIndex;
      result = [];
    }

    if (totalIndex === minIndex) {
      result.push(item);
    }
  }
  return result;
};

const getHashTable = (arr) => {
  return arr.reduce(
    (acc, item, index) => ({
      ...acc,
      [item]: index,
    }),
    {}
  );
};


console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
);

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KNN', 'KFC', 'Burger King', 'Tapioca Express', 'Shogun']
  )
);
