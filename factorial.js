/**
 *
 * @param {number} number - A positive integer to compute the factorial of
 * @returns {number} The factorial of the given number
 */
export default function factorial(number) {
  let result = 1;

  for (number; number > 0; number--) {
    result = result * number;
  }

  return result;
}

console.log(factorial(4));

