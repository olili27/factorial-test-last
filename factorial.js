/**
 *
 * @param {number} number - A positive integer to compute the factorial of
 * @returns {number} The factorial of the given number
 */
export default function factorial(number) {
  if (typeof number !== "number") {
    throw new TypeError("function expects only numbers");
  }

  if (number < 0) {
    throw new RangeError("function expects only positive numbers");
  }

  if (!Number.isInteger(number)) {
    throw new TypeError("function expects only positive integers");
  }

  let result = 1;

  // eslint-disable-next-line no-plusplus, no-param-reassign
  for (number; number > 0; number--) {
    result *= number;
  }

  return result;
}

// console.log(factorial(7.0));
