/*
Count the number of prime numbers less than a non-negative number, n.

Example:
  Input: 10
  Output: 4
  Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/
/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = n => {
  if (n < 2) return 0;
  if(number == 2) return true;
  let primeCounter = 0;
  for(let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primeCounter++;
    }
  }
  return primeCounter;
};

const isPrime = n => {
  // Only need to check up till square root 'n' because any factor greater than square root of 'n' must be paired with one less or equal to square root 'n';
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(3))
console.log(countPrimes(10));
