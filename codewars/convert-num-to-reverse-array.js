// Convert number to reversed array of digits
// You have to return the digits of this number within an array in reverse order.

const digitize = n => {
  const numArr = n.toString().split("").reverse();
  return numArr.map(Number);
}

// 1 liner method
const digitize = n => [...String(n)].map(Number).reverse();

console.log(digitize(348597))
// Example: 348597 => [7,9,5,8,4,3]