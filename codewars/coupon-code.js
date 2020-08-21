/*
Story
  Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
  Your mission:
  Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
  A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Example
  checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
  checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  if (enteredCode === correctCode && new Date(currentDate).setHours(0,0,0,0) <= new Date(expirationDate).setHours(0,0,0,0)) {
    return true;
  }
  return false;
};

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));