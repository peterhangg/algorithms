/* A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n.
If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
This is only applicable to the natural numbers. */

const digital_root = n => {
  let sum = 0;
  // turn n into an array of numbers
  let numArray = [...String(n)].map(Number);
  while(numArray.length > 1) {
    // get total sum of our array
    sum = numArray.reduce((a,b) => a + b);
    // set numArray to an array of numbers based on our sum value
    numArray = [...String(sum)].map(Number);
  }
  return sum;
};

console.log(digital_root(16));
console.log(digital_root(0));
console.log(digital_root(132189));
console.log(digital_root(493193));

/* examples: 

  digital_root(16)
    => 1 + 6
    => 7

  digital_root(132189)
    => 1 + 3 + 2 + 1 + 8 + 9
    => 24 ...
    => 2 + 4
    => 6 

  digital_root(493193)
  => 4 + 9 + 3 + 1 + 9 + 3
  => 29 ...
  => 2 + 9
  => 11 ...
  => 1 + 1
  => 2
*/
