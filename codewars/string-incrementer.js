/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string. */

const incrementString = string => {
  
  // using regex //
  // const word = string.match(/[a-zA-Z]+/g).join("");
  // const number = string.match(/(\d+)/g).join("");
  
  const word = string.split("").filter(letter => isNaN(letter)).join("");
  const number = Number(string.split("").filter(letter => !isNaN(letter)).join("")) + 1;
  const strIncrementer = word + number;
  
  return string.length > strIncrementer.length ? word + "0".repeat(string.length - strIncrementer.length) + number : word + number;
};

/* Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100 */

console.log(incrementString("foobar1"));